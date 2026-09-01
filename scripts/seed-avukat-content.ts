/**
 * Ramazan Şahin Hukuk Bürosu'nun gerçek içeriğini (eski WordPress sitesinden
 * taşınan uzmanlık alanları, hakkımızda, iletişim, konkordato makalesi) bu
 * Payload kurulumuna yazar. Tek seferlik / tekrar çalıştırılabilir bir
 * içerik göçü script'idir (slug'a göre var olan kayıtları atlar).
 *
 * Çalıştırma: npx payload run scripts/seed-avukat-content.ts
 */
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import config from '@payload-config'

import { practiceAreas, firmInfo, values, faq, konkordatoArticle, type ArticleBlock } from '../src/endpoints/seed/avukat-data'

const dirname = path.dirname(fileURLToPath(import.meta.url))

// --- Lexical düz metin yardımcıları -----------------------------------

const textNode = (text: string) => ({
  type: 'text',
  detail: 0,
  format: 0,
  mode: 'normal',
  style: '',
  text,
  version: 1,
})

const paragraphNode = (text: string) => ({
  type: 'paragraph',
  children: [textNode(text)],
  direction: 'ltr',
  format: '',
  indent: 0,
  textFormat: 0,
  version: 1,
})

const headingNode = (text: string, tag: 'h1' | 'h2' | 'h3' | 'h4' = 'h2') => ({
  type: 'heading',
  tag,
  children: [textNode(text)],
  direction: 'ltr',
  format: '',
  indent: 0,
  version: 1,
})

const listNode = (items: string[]) => ({
  type: 'list',
  listType: 'bullet',
  start: 1,
  tag: 'ul',
  children: items.map((item) => ({
    type: 'listitem',
    children: [textNode(item)],
    direction: 'ltr',
    format: '',
    indent: 0,
    value: 1,
    version: 1,
  })),
  direction: 'ltr',
  format: '',
  indent: 0,
  version: 1,
})

const richTextRoot = (children: unknown[]) => ({
  root: {
    type: 'root',
    children,
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  },
})

const simpleRichText = (paragraphs: string[]) => richTextRoot(paragraphs.map((p) => paragraphNode(p)))

const articleRichText = (blocks: ArticleBlock[]) =>
  richTextRoot(
    blocks.map((b) => {
      if (b.type === 'heading') return headingNode(b.text, 'h3')
      if (b.type === 'list') return listNode(b.items)
      return paragraphNode(b.text)
    }),
  )

// NOT: `payload run` script'i dynamic import() ile yükler ve import promise'i
// resolve olur olmaz süreci kapatır. Bu yüzden burada tüm mantığı bir
// top-level await zincirinde tutuyoruz — aksi halde getPayload() henüz
// resolve olmadan process sessizce (exit code 0 ile) sonlanır.

const payload = await getPayload({ config })

payload.logger.info('Avukat Ramazan Şahin içeriği yazılıyor...')

  const { docs: existingUsers } = await payload.find({ collection: 'users', limit: 1 })
  const authorId = existingUsers[0]?.id

  // --- Kategoriler -------------------------------------------------
  const ensureCategory = async (title: string, slug: string) => {
    const { docs } = await payload.find({ collection: 'categories', where: { slug: { equals: slug } }, limit: 1 })
    if (docs[0]) {
      if (docs[0].title !== title) {
        return payload.update({
          collection: 'categories',
          id: docs[0].id,
          data: { title },
          context: { disableRevalidate: true },
        })
      }
      return docs[0]
    }
    return payload.create({ collection: 'categories', data: { title, slug } })
  }

  const uzmanlikCategory = await ensureCategory('Faaliyet Alanları', 'uzmanlik-alanlari')
  const blogCategory = await ensureCategory('Makaleler', 'blog')

  // --- Faaliyet alanları (Posts) ------------------------------------
  const upsertPost = async (data: Record<string, unknown> & { slug: string }) => {
    const { docs } = await payload.find({ collection: 'posts', where: { slug: { equals: data.slug } }, limit: 1 })
    if (docs[0]) {
      payload.logger.info(`  güncelleniyor: ${data.slug}`)
      return payload.update({
        collection: 'posts',
        id: docs[0].id,
        data: data as never,
        context: { disableRevalidate: true },
      })
    }
    payload.logger.info(`  oluşturuluyor: ${data.slug}`)
    return payload.create({
      collection: 'posts',
      data: data as never,
      context: { disableRevalidate: true },
    })
  }

  const practiceAreaDocs: Record<string, { id: number | string }> = {}
  for (const area of practiceAreas) {
    const doc = await upsertPost({
      slug: area.slug,
      title: area.title,
      _status: 'published',
      authors: authorId ? [authorId] : undefined,
      categories: [uzmanlikCategory.id],
      content: articleRichText([
        { type: 'heading', text: area.subtitle },
        { type: 'paragraph', text: area.body },
      ]),
      meta: {
        title: area.title,
        description: area.body.slice(0, 155),
      },
    })
    practiceAreaDocs[area.slug] = doc
  }

  // --- Gerçek makale (konkordato) ------------------------------------
  await upsertPost({
    slug: konkordatoArticle.slug,
    title: konkordatoArticle.title,
    _status: 'published',
    authors: authorId ? [authorId] : undefined,
    categories: [blogCategory.id],
    content: articleRichText(konkordatoArticle.blocks),
    meta: {
      title: konkordatoArticle.title,
      description: konkordatoArticle.intro,
    },
  })

  // --- Ana sayfa hero arka planı ---------------------------------------
  // Gerçek Bursa videosu zaten yüklenmişse onu kullan (bkz. video alt metni
  // aşağıda); yoksa (yeni/temiz bir ortamda) geçici bir görsele düş —
  // Media içindeki `Media` bileşeni video/görsel ayrımını mimeType'a göre
  // otomatik yapıyor, bu yüzden burada tek yapılan doğru dokümanı seçmek.
  const videoAlt = 'Ana sayfa hero arka plan videosu — Bursa'
  const { docs: existingVideo } = await payload.find({
    collection: 'media',
    where: { alt: { equals: videoAlt } },
    limit: 1,
  })

  const placeholderAlt = 'Ana sayfa hero arka planı (geçici — gerçek Bursa görseliyle değiştirilecek)'
  const heroMedia =
    existingVideo[0] ||
    (
      await payload.find({
        collection: 'media',
        where: { alt: { equals: placeholderAlt } },
        limit: 1,
      })
    ).docs[0] ||
    (await payload.create({
      collection: 'media',
      data: { alt: placeholderAlt },
      filePath: path.resolve(dirname, 'hero-placeholder.png'),
    }))

  // --- Sayfalar -------------------------------------------------------
  const upsertPage = async (data: Record<string, unknown> & { slug: string }) => {
    const { docs } = await payload.find({ collection: 'pages', where: { slug: { equals: data.slug } }, limit: 1 })
    if (docs[0]) {
      payload.logger.info(`  güncelleniyor: ${data.slug}`)
      return payload.update({
        collection: 'pages',
        id: docs[0].id,
        data: data as never,
        context: { disableRevalidate: true },
      })
    }
    payload.logger.info(`  oluşturuluyor: ${data.slug}`)
    return payload.create({
      collection: 'pages',
      data: data as never,
      context: { disableRevalidate: true },
    })
  }

  const iletisimPage = await upsertPage({
    slug: 'iletisim',
    title: 'İletişim',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      richText: richTextRoot([
        headingNode('İletişim', 'h1'),
        paragraphNode('Hukuki danışmanlık ve randevu talepleriniz için bize ulaşın.'),
      ]),
    },
    layout: [
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: richTextRoot([
              headingNode('Bize Ulaşın', 'h2'),
              paragraphNode(`Adres: ${firmInfo.address}`),
              paragraphNode(`Telefon: ${firmInfo.phone}`),
              paragraphNode(`E-posta: ${firmInfo.email}`),
            ]),
          },
        ],
      },
    ],
    meta: {
      title: 'İletişim',
      description: `${firmInfo.name} ile iletişime geçin: ${firmInfo.phone} — ${firmInfo.email}`,
    },
  })

  const hakkimizdaPage = await upsertPage({
    slug: 'hakkimizda',
    title: 'Hakkımızda',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      richText: richTextRoot([
        headingNode('Hakkımızda', 'h1'),
        paragraphNode(
          'Ramazan Şahin Hukuk Bürosu, kurulduğu günden bu yana adaletin tesisi ve müvekkillerinin haklarının korunması amacıyla ilkeli bir hukuk mücadelesi yürütmektedir.',
        ),
      ]),
    },
    layout: [
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: simpleRichText([
              'Hukuku sadece bir kurallar bütünü olarak değil, toplumsal düzenin ve bireysel özgürlüklerin teminatı olarak görüyoruz. Bu bilinçle her müvekkilin ihtiyacına özel, sonuç odaklı ve analitik çözümler üretiyoruz. Genç ve dinamik yapımızı, mesleki tecrübenin getirdiği öngörüyle birleştirerek; hukuki riskleri henüz ortaya çıkmadan yönetiyor, mevcut ihtilafları ise en etkin şekilde sonuçlandırıyoruz.',
              'Avukat Ramazan Şahin — Kurucu',
            ]),
          },
        ],
      },
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: richTextRoot([
              headingNode('Misyon ve Vizyon', 'h2'),
              headingNode('Misyon', 'h3'),
              paragraphNode(
                'Hukuki uzmanlığımızı güçlü teknolojik altyapı ve yenilikçi yaklaşımlarla birleştirerek; yalnızca yerel ölçekte değil, uluslararası standartlarda hizmet sunan, güvenilirliğiyle öne çıkan ve müvekkillerine sürdürülebilir değer üreten öncü bir hukuk kurumu olmak için çalışıyoruz.',
              ),
              headingNode('Vizyon', 'h3'),
              paragraphNode(
                'Müvekkillerimize ait tüm hukuki meseleleri evrensel hukuk ilkeleri, dürüstlük ve şeffaflık çerçevesinde ele alarak hak arama hürriyetini en üst düzeyde temsil etmeyi hedefliyoruz.',
              ),
            ]),
          },
        ],
      },
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: richTextRoot([
              headingNode('Mesleki Değerlerimiz', 'h2'),
              ...values.flatMap((v) => [headingNode(v.title, 'h3'), paragraphNode(v.text)]),
            ]),
          },
        ],
      },
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: richTextRoot([
              headingNode('Sıkça Sorulan Sorular', 'h2'),
              ...faq.flatMap((f) => [headingNode(f.q, 'h3'), paragraphNode(f.a)]),
            ]),
          },
        ],
      },
    ],
    meta: {
      title: 'Hakkımızda',
      description: `${firmInfo.name} hakkında: misyon, vizyon ve mesleki değerlerimiz.`,
    },
  })

  const uzmanlikPage = await upsertPage({
    slug: 'uzmanlik-alanlarimiz',
    title: 'Faaliyet Alanlarımız',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      richText: richTextRoot([
        headingNode('Faaliyet Alanlarımız', 'h1'),
        paragraphNode(`${firmInfo.name}, ${practiceAreas.length} farklı hukuk alanında müvekkillerine kapsamlı destek sunmaktadır.`),
      ]),
    },
    layout: [
      {
        blockType: 'archive',
        populateBy: 'collection',
        relationTo: 'posts',
        categories: [uzmanlikCategory.id],
        limit: 40,
      },
    ],
    meta: {
      title: 'Faaliyet Alanlarımız',
      description: `${firmInfo.name} faaliyet alanları: ceza, aile, ticaret, icra-iflas, gayrimenkul hukuku ve daha fazlası.`,
    },
  })

  await upsertPage({
    slug: 'home',
    title: 'Ana Sayfa',
    _status: 'published',
    hero: {
      type: 'highImpact',
      eyebrow: 'Bursa Avukatlık ve Hukuk Bürosu',
      media: heroMedia?.id,
      richText: richTextRoot([
        headingNode('Güvenilir Hukuki Çözümler, Kararlı Savunma', 'h1'),
        paragraphNode(
          'Sürekli güncellenen mevzuat bilgimiz ve stratejik bakış açımızla, hukuki süreçlerinizi en doğru şekilde yöneterek güvenilir çözümler üretiyoruz.',
        ),
      ]),
      links: [
        {
          link: {
            type: 'reference',
            reference: { relationTo: 'pages', value: iletisimPage.id },
            label: 'Bize Ulaşın',
            newTab: false,
            appearance: 'default',
          },
        },
        {
          link: {
            type: 'reference',
            reference: { relationTo: 'pages', value: uzmanlikPage.id },
            label: 'Faaliyet Alanlarımız',
            newTab: false,
            appearance: 'outline',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: richTextRoot([
              headingNode('Hukukun Gücü, Tecrübenin Güvencesiyle Buluşuyor', 'h2'),
              paragraphNode(
                'Avukat Ramazan Şahin Hukuk Bürosu, kurulduğu günden bu yana adaletin tesisi ve müvekkillerinin haklarının korunması amacıyla ilkeli bir hukuk mücadelesi yürütmektedir. Değişen dünya düzeninde ve karmaşıklaşan yasal mevzuatlar içerisinde, sadece çözüm ortağı değil, aynı zamanda stratejik bir yol gösterici olma vizyonuyla hareket ediyoruz.',
              ),
            ]),
            enableLink: true,
            link: {
              type: 'reference',
              reference: { relationTo: 'pages', value: hakkimizdaPage.id },
              label: 'Detaylı İncele',
              newTab: false,
              appearance: 'default',
            },
          },
        ],
      },
      {
        blockType: 'archive',
        introContent: richTextRoot([headingNode('Faaliyet Alanlarımız', 'h2')]),
        populateBy: 'collection',
        relationTo: 'posts',
        categories: [uzmanlikCategory.id],
        limit: 6,
      },
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: richTextRoot([
              headingNode(`${practiceAreas.length} Farklı Hukuk Alanında Uzmanlık`, 'h2'),
              paragraphNode(
                'Ceza, aile, ticaret, icra-iflas, gayrimenkul, iş, miras ve daha birçok alanda tek bir büroda kapsamlı hukuki destek alırsınız. Hangi alanda ihtiyacınız olursa olsun, doğru uzmanlık alanına yönlendirilirsiniz.',
              ),
            ]),
          },
        ],
      },
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: richTextRoot([
              headingNode('Neden Ramazan Şahin Hukuk Bürosu?', 'h2'),
              ...values.flatMap((v) => [headingNode(v.title, 'h3'), paragraphNode(v.text)]),
            ]),
          },
        ],
      },
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: richTextRoot([
              headingNode('Sıkça Sorulan Sorular', 'h2'),
              ...faq
                .slice(0, 3)
                .flatMap((f) => [headingNode(f.q, 'h3'), paragraphNode(f.a)]),
            ]),
            enableLink: true,
            link: {
              type: 'reference',
              reference: { relationTo: 'pages', value: hakkimizdaPage.id },
              label: 'Tüm Soruları Görüntüle',
              newTab: false,
              appearance: 'outline',
            },
          },
        ],
      },
      {
        blockType: 'cta',
        richText: richTextRoot([headingNode('Hukuki danışmanlık ve randevu talepleriniz için bize ulaşın', 'h2')]),
        links: [
          {
            link: {
              type: 'reference',
              reference: { relationTo: 'pages', value: iletisimPage.id },
              label: 'Bize Ulaşın',
              newTab: false,
              appearance: 'default',
            },
          },
        ],
      },
    ],
    meta: {
      title: 'Bursa Avukatlık ve Hukuk Danışmanlığı',
      description:
        'Ceza, aile, ticaret, icra-iflas, gayrimenkul ve daha birçok alanda güvenilir hukuki danışmanlık ve dava takibi.',
    },
  })

  // --- Header / Footer -------------------------------------------------
  await payload.updateGlobal({
    slug: 'header',
    context: { disableRevalidate: true },
    data: {
      navItems: [
        { link: { type: 'reference', reference: { relationTo: 'pages', value: hakkimizdaPage.id }, label: 'Hakkımızda', newTab: false } },
        { link: { type: 'reference', reference: { relationTo: 'pages', value: uzmanlikPage.id }, label: 'Faaliyet Alanlarımız', newTab: false } },
        { link: { type: 'custom', url: '/posts', label: 'Makaleler', newTab: false } },
        { link: { type: 'reference', reference: { relationTo: 'pages', value: iletisimPage.id }, label: 'İletişim', newTab: false } },
      ],
    },
  })

  await payload.updateGlobal({
    slug: 'footer',
    context: { disableRevalidate: true },
    data: {
      navItems: [
        { link: { type: 'reference', reference: { relationTo: 'pages', value: hakkimizdaPage.id }, label: 'Hakkımızda', newTab: false } },
        { link: { type: 'reference', reference: { relationTo: 'pages', value: uzmanlikPage.id }, label: 'Faaliyet Alanlarımız', newTab: false } },
        { link: { type: 'reference', reference: { relationTo: 'pages', value: iletisimPage.id }, label: 'İletişim', newTab: false } },
        { link: { type: 'custom', url: `tel:${firmInfo.phone.replace(/\s/g, '')}`, label: firmInfo.phone, newTab: false } },
      ],
    },
  })

payload.logger.info('Tamamlandı.')
process.exit(0)
