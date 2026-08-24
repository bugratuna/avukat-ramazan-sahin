// Ramazan Şahin Hukuk Bürosu'nun eski (avukatramazansahin.com.tr) WordPress
// sitesinden taşınan gerçek içerik. WP REST API üzerinden çekildi ve düz
// metne indirgendi — kumar/bahis spam yazısı (bkz. platform analizi) hariç
// tutuldu.

export type ArticleBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

export interface PracticeArea {
  slug: string
  title: string
  subtitle: string
  body: string
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'ceza-hukuku',
    title: 'Ceza Hukuku',
    subtitle: 'Güçlü savunma, adil yargılanma hakkı',
    body: 'Ceza hukuku; soruşturma ve kovuşturma süreçlerinde şüpheli, sanık veya mağdur sıfatıyla yer alan kişilerin haklarının korunmasını amaçlayan temel hukuk dallarından biridir. Bu kapsamda ifade alma, gözaltı, tutuklama, arama ve el koyma gibi koruma tedbirlerine karşı hukuki güvencelerin sağlanması büyük önem taşır. Ceza yargılamasının her aşamasında etkin savunma yapılması, delillerin doğru değerlendirilmesi ve usul kurallarına uygun hareket edilmesi, adil yargılanma hakkının korunması açısından kritik rol oynar. Hukuk büromuz; soruşturma aşamasından temyiz ve istinaf süreçlerine kadar tüm ceza yargılamasında müvekkillerine kapsamlı hukuki destek sunmaktadır.',
  },
  {
    slug: 'aile-hukuku',
    title: 'Aile Hukuku',
    subtitle: 'Hassas süreçlerde güvenilir rehberlik',
    body: 'Aile hukuku; boşanma, velayet, nafaka, mal paylaşımı ve soybağı gibi bireylerin özel yaşamını doğrudan etkileyen hassas konuları kapsar. Bu süreçlerde yalnızca hukuki bilgi değil, aynı zamanda dikkatli ve özenli bir yaklaşım da gereklidir. Çekişmeli ve anlaşmalı boşanma davalarının yürütülmesi, çocukların üstün yararının gözetilmesi ve taraflar arasında adil çözümler geliştirilmesi temel önceliktir. Hukuk büromuz, aile hukukuna ilişkin tüm uyuşmazlıklarda gizlilik ve hassasiyet ilkeleri çerçevesinde destek sunmaktadır.',
  },
  {
    slug: 'icra-iflas-hukuku',
    title: 'İcra İflas Hukuku',
    subtitle: 'Alacakların güvenli ve hızlı tahsili',
    body: 'İcra ve iflas hukuku, alacakların tahsili ve borçların yapılandırılması süreçlerini düzenleyen bir alandır. İlamsız ve ilamlı icra takiplerinin başlatılması, haciz işlemleri, satış süreçleri ve itirazların yönetimi bu alanın temel konularını oluşturur. Ayrıca iflas, konkordato ve yeniden yapılandırma süreçlerinde hem alacaklıların hem de borçluların haklarının dengeli biçimde korunması gerekir. Hukuk büromuz, icra takiplerinin etkin şekilde yürütülmesi ve uyuşmazlıkların en kısa sürede çözüme kavuşturulması amacıyla profesyonel danışmanlık ve temsil hizmeti sağlamaktadır.',
  },
  {
    slug: 'is-hukuku',
    title: 'İş Hukuku',
    subtitle: 'Çalışma hayatında dengeli ve adil çözümler',
    body: 'İş hukuku; işçi ve işveren ilişkilerini düzenleyen, çalışma hayatının temel kurallarını belirleyen bir alandır. İş sözleşmelerinin hazırlanması, fesih süreçleri, kıdem ve ihbar tazminatı alacakları, işe iade davaları ve iş kazalarından doğan sorumluluklar bu kapsamda değerlendirilir. Taraflar arasındaki dengenin korunması ve uyuşmazlıkların en kısa sürede çözülmesi önemlidir. Hukuk büromuz, iş hukuku alanında hem danışmanlık hem dava takibi hizmeti sunmaktadır.',
  },
  {
    slug: 'ticaret-hukuku',
    title: 'Ticaret Hukuku',
    subtitle: 'Ticari faaliyetlerde hukuki güvence',
    body: 'Ticaret hukuku, ticari işletmelerin faaliyetlerini düzenleyen ve ticari ilişkilerden doğan uyuşmazlıkları konu alan geniş kapsamlı bir hukuk dalıdır. Ticari sözleşmelerin hazırlanması, haksız rekabet, ticari alacak davaları ve şirketler arası uyuşmazlıklar bu alanın başlıca konularındandır. Hukuk büromuz, ticari faaliyetlerin güvenli şekilde yürütülmesi için önleyici hukuk hizmetleri de sunmaktadır.',
  },
  {
    slug: 'sirketler-hukuku',
    title: 'Şirketler Hukuku',
    subtitle: 'Kurumsal yapınıza güçlü hukuki temel',
    body: 'Şirketler hukuku; şirket kuruluşu, birleşme, bölünme, hisse devri, genel kurul işlemleri ve yöneticilerin sorumluluğu gibi konuları kapsar. Şirket yapısının doğru kurulması ve mevzuata uygun yönetilmesi, ileride doğabilecek risklerin önlenmesi açısından büyük önem taşır. Hukuk büromuz, şirketlerin tüm kurumsal süreçlerinde hukuki danışmanlık sağlamaktadır.',
  },
  {
    slug: 'yabancilar-hukuku',
    title: 'Yabancılar Hukuku',
    subtitle: 'Uluslararası süreçlerde güvenilir destek',
    body: 'Yabancılar hukuku; ikamet izni, çalışma izni, vatandaşlık başvuruları ve sınır dışı işlemlerine karşı başvuruları kapsar. Uluslararası mevzuat ve idari uygulamaların yakından takip edilmesi gereklidir. Hukuk büromuz, yabancı gerçek ve tüzel kişilere hukuki destek sunmaktadır.',
  },
  {
    slug: 'infaz-hukuku',
    title: 'İnfaz Hukuku',
    subtitle: 'Ceza infazında hakların korunması',
    body: 'İnfaz hukuku, kesinleşmiş ceza hükümlerinin nasıl uygulanacağını düzenler. Denetimli serbestlik, koşullu salıverilme ve infaz erteleme gibi konular bu alanın kapsamındadır. Hukuk büromuz, hükümlü ve yakınlarına infaz sürecinde danışmanlık vermektedir.',
  },
  {
    slug: 'bilisim-ve-e-ticaret-hukuku',
    title: 'Bilişim ve E-Ticaret Hukuku',
    subtitle: 'Dijital dünyada hukuki güvenlik',
    body: 'Bu alan; kişisel verilerin korunması, internet üzerinden yapılan sözleşmeler, dijital içerik ihlalleri ve siber suçları kapsar. Hukuk büromuz, dijital dünyadan doğan uyuşmazlıklarda etkin hukuki çözümler sunar.',
  },
  {
    slug: 'fikri-ve-sinai-mulkiyet-haklari',
    title: 'Fikri ve Sınai Mülkiyet Hakları',
    subtitle: 'Fikirleriniz ve markalarınız güvende',
    body: 'Marka, patent, tasarım ve telif haklarının korunması bu alanın temelini oluşturur. Tescil başvurularının hazırlanması, itiraz ve hükümsüzlük süreçlerinin yürütülmesi ile ihlallerin önlenmesine yönelik hukuki tedbirlerin alınması büyük önem taşır. Hukuk büromuz, fikri hakların etkin biçimde korunması ve ticari değerinin sürdürülebilir şekilde yönetilmesi için kapsamlı danışmanlık ve dava takibi hizmeti sunmaktadır.',
  },
  {
    slug: 'miras-hukuku',
    title: 'Miras Hukuku',
    subtitle: 'Adil paylaşım, güvenli gelecek',
    body: 'Mirasın paylaşımı, vasiyetname düzenlenmesi, mirasçılık tespiti ve mirasın reddi gibi işlemler bu kapsamda değerlendirilir. Miras uyuşmazlıklarının çoğu zaman aile içi hassas dengeler barındırması nedeniyle sürecin dikkat ve özenle yürütülmesi gerekir. Hukuk büromuz, hak kayıplarını önleyerek adil ve kalıcı çözümler üretilmesi amacıyla profesyonel destek sağlamaktadır.',
  },
  {
    slug: 'deniz-ticaret-hukuku',
    title: 'Deniz Ticaret Hukuku',
    subtitle: 'Deniz ticaretinde güçlü temsil',
    body: 'Deniz taşımacılığı, navlun sözleşmeleri, yük hasarları, çatma ve deniz kazalarından doğan sorumluluklar bu alanın başlıca konularıdır. Uluslararası sözleşmeler ve denizcilik teamülleri dikkate alınarak yürütülen süreçlerde hızlı ve doğru müdahale büyük önem taşır. Hukuk büromuz, deniz ticaretinden kaynaklanan uyuşmazlıklarda etkin temsil ve danışmanlık hizmeti sunmaktadır.',
  },
  {
    slug: 'sigorta-hukuku',
    title: 'Sigorta Hukuku',
    subtitle: 'Tazminat süreçlerinde etkin koruma',
    body: 'Sigorta sözleşmelerinden doğan hak ve yükümlülüklerin belirlenmesi, hasar tespiti, tazminat talepleri ve sigorta şirketleriyle yaşanan uyuşmazlıkların çözümü bu alanın kapsamındadır. Eksik veya hatalı değerlendirmeler ciddi hak kayıplarına yol açabileceğinden sürecin uzmanlıkla yürütülmesi gerekir. Hukuk büromuz, sigorta uyuşmazlıklarında müvekkillerinin haklarını en etkin şekilde korumayı amaçlamaktadır.',
  },
  {
    slug: 'kira-hukuku',
    title: 'Kira Hukuku',
    subtitle: 'Kiracı ve mal sahibi arasında denge',
    body: 'Kira sözleşmelerinin hazırlanması, tahliye davaları, kira tespit ve uyarlama talepleri ile kira alacaklarının tahsili bu alanın temel konularını oluşturur. Taraflar arasındaki ilişkinin hukuka uygun ve dengeli biçimde yürütülmesi, uzun vadeli uyuşmazlıkların önlenmesi açısından önemlidir. Hukuk büromuz, kira hukukuna ilişkin tüm süreçlerde çözüm odaklı destek sunmaktadır.',
  },
  {
    slug: 'sozlesmeler-hukuku',
    title: 'Sözleşmeler Hukuku',
    subtitle: 'Güvenli sözleşmeler, sağlam ilişkiler',
    body: 'Her türlü hukuki ve ticari ilişkinin temelini oluşturan sözleşmelerin doğru hazırlanması, ileride doğabilecek uyuşmazlıkların önlenmesini sağlar. Sözleşme ihlallerinde ise hakların etkin biçimde korunması ve zararların giderilmesi hedeflenir. Hukuk büromuz, sözleşme hazırlama, inceleme ve uyuşmazlık çözümü süreçlerinde kapsamlı danışmanlık vermektedir.',
  },
  {
    slug: 'gayrimenkul-hukuku',
    title: 'Gayrimenkul Hukuku',
    subtitle: 'Taşınmaz işlemlerinde tam güvence',
    body: 'Taşınmaz alım satımı, tapu iptali ve tescil davaları, kat mülkiyeti uyuşmazlıkları ve imar uygulamalarından doğan sorunlar bu alanın kapsamındadır. Yüksek maddi değer içeren işlemlerde hukuki risklerin önceden belirlenmesi büyük önem taşır. Hukuk büromuz, gayrimenkul işlemlerinin güvenli şekilde yürütülmesi için danışmanlık ve dava takibi hizmeti sunmaktadır.',
  },
  {
    slug: 'idare-hukuku',
    title: 'İdare Hukuku',
    subtitle: 'Kamu işlemlerine karşı etkin başvuru',
    body: 'İdari işlemlerin iptali, tam yargı davaları, kamu cezalarına karşı başvurular ve ruhsat işlemlerinden doğan uyuşmazlıklar bu alanın konusudur. Sürelerin kısa ve usul kurallarının sıkı olması nedeniyle sürecin dikkatle takip edilmesi gerekir. Hukuk büromuz, idare hukukundan doğan uyuşmazlıklarda etkin temsil sağlamaktadır.',
  },
  {
    slug: 'vergi-hukuku',
    title: 'Vergi Hukuku',
    subtitle: 'Vergi uyuşmazlıklarında doğru strateji',
    body: 'Vergi cezaları, tarhiyat işlemleri, uzlaşma başvuruları ve vergi davaları bu alanın temelini oluşturur. Mali yükümlülüklerin doğru değerlendirilmesi ve hak arama yollarının etkin kullanılması önemlidir. Hukuk büromuz, vergi uyuşmazlıklarında müvekkillerine stratejik hukuki destek sunmaktadır.',
  },
  {
    slug: 'kooperatif-hukuku',
    title: 'Kooperatif Hukuku',
    subtitle: 'Kooperatiflerde mevzuata uygun yönetim',
    body: 'Kooperatiflerin kuruluşu, genel kurul süreçleri, ortaklık ilişkileri ve yönetsel uyuşmazlıklar bu kapsamda ele alınır. Mevzuata aykırı işlemler ciddi sorumluluklar doğurabileceğinden hukuki danışmanlık büyük önem taşır. Hukuk büromuz, kooperatiflerin sağlıklı işleyişi için kapsamlı destek sağlamaktadır.',
  },
  {
    slug: 'marka-ve-patent',
    title: 'Marka ve Patent',
    subtitle: 'Tescilden korumaya tam destek',
    body: 'Marka ve patent başvurularının hazırlanması, tescil süreçlerinin takibi, itiraz ve hükümsüzlük davaları ile ihlallerin önlenmesine yönelik hukuki işlemler bu alanın kapsamındadır. Hukuk büromuz, sınai mülkiyet haklarının korunması ve ticari değerinin artırılması için profesyonel hizmet sunmaktadır.',
  },
  {
    slug: 'spor-hukuku',
    title: 'Spor Hukuku',
    subtitle: 'Spor dünyasında hukuki güvence',
    body: 'Sporcu sözleşmeleri, transfer uyuşmazlıkları, disiplin soruşturmaları ve federasyon kararlarına karşı başvurular bu alanın konusudur. Spor hukukunun kendine özgü kuralları ve hızlı işleyen yapısı nedeniyle uzmanlık gerektirir. Hukuk büromuz, spor alanındaki uyuşmazlıklarda etkin temsil sağlamaktadır.',
  },
  {
    slug: 'tazminat-hukuku',
    title: 'Tazminat Hukuku',
    subtitle: 'Zararın adil ve tam giderimi',
    body: 'Haksız fiillerden, trafik kazalarından, iş kazalarından ve sözleşme ihlallerinden doğan maddi ve manevi zararların tazmini bu alanın kapsamındadır. Zararın doğru hesaplanması ve sorumluların belirlenmesi büyük önem taşır. Hukuk büromuz, tazminat taleplerinin en etkin şekilde sonuçlandırılması için hukuki destek sunmaktadır.',
  },
  {
    slug: 'insaat-hukuku',
    title: 'İnşaat Hukuku',
    subtitle: 'Projelerde hukuki sağlamlık',
    body: 'İnşaat sözleşmeleri, yüklenici ve iş sahibi uyuşmazlıkları, ayıplı imalat iddiaları ve proje gecikmelerinden doğan sorumluluklar bu alanın temelini oluşturur. Büyük ölçekli projelerde hukuki risklerin doğru yönetilmesi kritik öneme sahiptir. Hukuk büromuz, inşaat hukukuna ilişkin tüm süreçlerde danışmanlık ve dava takibi hizmeti vermektedir.',
  },
  {
    slug: 'tip-hukuku',
    title: 'Tıp Hukuku',
    subtitle: 'Sağlık hizmetlerinde hakların korunması',
    body: 'Tıbbi müdahalelerden doğan sorumluluklar, malpraktis iddiaları, hasta hakları ihlalleri ve sağlık kuruluşlarına karşı açılan davalar bu alanın kapsamındadır. Tıbbi ve hukuki değerlendirmenin birlikte yürütülmesi gerekir. Hukuk büromuz, sağlık hukukuna ilişkin uyuşmazlıklarda titiz bir çalışma yürütmektedir.',
  },
  {
    slug: 'vakif-ve-dernekler-hukuku',
    title: 'Vakıf ve Dernekler Hukuku',
    subtitle: 'Sivil toplum için hukuki rehberlik',
    body: 'Vakıf ve derneklerin kuruluşu, yönetimi, denetimi ve faaliyetlerinden doğan hukuki süreçler bu alanın konusudur. Mevzuata uygun hareket edilmemesi idari yaptırımlara yol açabilir. Hukuk büromuz, sivil toplum kuruluşlarının güvenli ve sürdürülebilir şekilde faaliyet göstermesi için danışmanlık sunmaktadır.',
  },
  {
    slug: 'tuketici-hukuku',
    title: 'Tüketici Hukuku',
    subtitle: 'Tüketici haklarında güçlü savunma',
    body: 'Ayıplı mal ve hizmetler, mesafeli satış sözleşmeleri, garanti kapsamı ve tüketici uyuşmazlıklarından doğan başvurular bu alanın kapsamındadır. Hak kayıplarının önlenmesi için sürecin doğru yürütülmesi gerekir. Hukuk büromuz, tüketici haklarının korunması amacıyla etkin hukuki destek sağlamaktadır.',
  },
  {
    slug: 'anayasa-mahkemesi-bireysel-basvuru',
    title: 'Anayasa Mahkemesi Bireysel Başvuru',
    subtitle: 'Temel haklar için en yüksek başvuru yolu',
    body: 'Temel hak ve özgürlüklerin kamu gücü tarafından ihlal edildiği iddiasıyla yapılan bireysel başvuruların hazırlanması, kabul edilebilirlik kriterlerinin sağlanması ve başvuru sürecinin titizlikle yürütülmesi bu alanın kapsamındadır. Hukuk büromuz, Anayasa Mahkemesi nezdindeki bireysel başvurularda kapsamlı hukuki değerlendirme ve temsil hizmeti sunmaktadır.',
  },
  {
    slug: 'konkordato',
    title: 'Konkordato',
    subtitle: 'Mali yeniden yapılanmada stratejik çözüm',
    body: 'Konkordato, mali sıkıntı yaşayan borçluların faaliyetlerini sürdürebilmesi ve alacaklıların da belirli ölçüde tatmin edilmesini amaçlayan bir yeniden yapılandırma mekanizmasıdır. Başvuru sürecinin hazırlanması, mahkeme aşamalarının takibi ve komiser raporlarının değerlendirilmesi büyük titizlik gerektirir. Doğru planlama yapılmadığı takdirde süreç başarısızlıkla sonuçlanabilir. Hukuk büromuz, konkordato başvurularının hazırlanmasından tasdik sürecine kadar tüm aşamalarda hukuki danışmanlık sağlamaktadır.',
  },
]

export const firmInfo = {
  name: 'Ramazan Şahin Hukuk Bürosu',
  founder: 'Avukat Ramazan Şahin',
  phone: '+90 541 383 62 44',
  email: 'info@avukatramazansahin.com.tr',
  address: 'Hacı İlyas Mahallesi 4. Tan Sokak No:6 Kanburoğlu Kardeşler İş Hanı Kat: 3 Daire: 10 No: 302 Osmangazi/Bursa',
}

export const values = [
  {
    title: 'Güven ve Sadakat',
    text: 'Müvekkil ile avukat arasındaki ilişkinin temelinin "sır saklama" ve "sadakat" olduğuna inanıyoruz. Dosyanız bizimle tam güvendedir.',
  },
  {
    title: 'Şeffaflık',
    text: 'Sürecin her aşamasında müvekkillerimizi bilgilendiriyor; ihtimalleri, riskleri ve beklentileri tüm çıplaklığıyla paylaşıyoruz.',
  },
  {
    title: 'Titizlik ve Detaycılık',
    text: 'Hukukta bir kelimenin, bir tarihin veya bir detayın tüm gidişatı değiştirebileceğini biliyoruz. Bu yüzden her vakayı bir "proje" disipliniyle inceliyoruz.',
  },
  {
    title: 'Bağımsızlık',
    text: 'Meslek onurunu her türlü menfaatin üzerinde tutarak, yargı bağımsızlığına ve savunma hakkının kutsallığına ödün vermeden bağlı kalıyoruz.',
  },
]

export const faq: { q: string; a: string }[] = [
  {
    q: 'Vekaletname nasıl çıkartılır ve nelere dikkat etmek gerekir?',
    a: 'Bir avukata vekâlet verebilmek için, kimlik kartı ya da yerine geçebilen ehliyet veya pasaport gibi resmi bir belgeyle bizzat notere başvurulması gerekmektedir. Yurt dışında bulunan kişiler ise vekâletname düzenleme işlemini konsolosluklar aracılığıyla gerçekleştirebilir. Vekâletin hazırlanabilmesi için, yetki verilecek avukatın T.C. kimlik numarası ile adı ve soyadının ibraz edilmesi zorunludur. Hukuki ihtiyaçlara göre, tüm süreçleri kapsayan genel dava vekâletnamesi düzenlenebileceği gibi yalnızca belirli bir işlem veya dava için geçerli özel vekâletname de hazırlanabilir.',
  },
  {
    q: 'Dava açarken para yatırılır mı?',
    a: 'Dava açılırken, dava türüne göre belirlenen nispi veya maktu harçların ödenmesi zorunludur. Ayrıca yargılama sürecinde yapılacak tebligat ve diğer işlemler için kullanılmak üzere gider avansının mahkemeye yatırılması gerekmektedir.',
  },
  {
    q: 'Dava masrafları geri alınabilir mi?',
    a: 'Davanın kabul edilmesi halinde yatırılan harç ve giderler dava sonunda haksız çıkan taraftan tahsil edilmektedir. Ancak avukatınıza ödediğiniz vekalet ücreti, noter ücreti, dava sırasında yapmış olduğunuz ulaşım vb. kişisel harcamalar bu kapsamda değildir.',
  },
  {
    q: 'Avukatlık ücreti ne kadardır ve neye göre belirlenir?',
    a: 'Avukatlık ücreti, Türkiye Barolar Birliği tarafından her yıl yayımlanan Avukatlık Asgari Ücret Tarifesi\'nde belirlenen asgari tutarın altında olmamak kaydıyla serbestçe kararlaştırılabilir. Ücret; davanın veya hukuki işlemin niteliğine, karmaşıklığına, süresine ve gerektirdiği emek ile sorumluluğa göre farklılık gösterebilir.',
  },
  {
    q: 'Danışma ücretli midir?',
    a: 'Avukat-müvekkil ilişkisinin temelini güven ve şeffaflık oluşturur. Bu doğrultuda sunulan hukuki danışmanlık hizmetleri ücrete tabidir. Danışma ücreti; hukuki sorunun niteliğine, görüşme süresine ve harcanacak emek ile uzmanlığa göre belirlenir.',
  },
  {
    q: 'Avukat tutmak zorunlu mudur?',
    a: 'Türk hukukunda, kural olarak avukatla temsil zorunluluğu bulunmamaktadır. Bununla birlikte hukuki süreçlerin niteliği gereği dava ve işlemlerin doğru şekilde yürütülmesi uzmanlık ve deneyim gerektirir. Sürecin başlangıcında yapılan küçük bir hata veya kaçırılan bir süre, telafisi güç hatta mümkün olmayan hak kayıplarına yol açabilir.',
  },
]

export const konkordatoArticle: {
  title: string
  slug: string
  intro: string
  blocks: ArticleBlock[]
} = {
  title: 'Konkordato Sürecinde Alacaklıların Akıbeti',
  slug: 'konkordato-surecinde-alacaklilarin-akibeti',
  intro:
    'Konkordato ilan eden bir borçlu karşısında alacaklıların hakları ne olur, süreç nasıl işler? Alacak bildirimi, kayıt kabul davası ve kesin mühlet sürecine dair bilinmesi gerekenler.',
  blocks: [
    {
      type: 'paragraph',
      text: 'Konkordato, borçlunun mali durumunun bozulması hâlinde alacaklılarla uzlaşarak borçlarını yeniden yapılandırmasına olanak tanıyan hukuki bir koruma mekanizmasıdır. Ancak bu süreç sadece borçluyu değil, alacaklıları da doğrudan etkilemektedir. Alacaklılar, borçlunun ödeme yükümlülüklerini ertelemesi veya azaltması nedeniyle ciddi risklerle karşı karşıya kalmaktadır.',
    },
    {
      type: 'paragraph',
      text: 'Son yıllarda Türkiye\'de yaşanan ekonomik dalgalanmalar, döviz kurlarındaki artış, enflasyon oranlarındaki yükselme ve faiz oranlarının dengesizliği, birçok işletmeyi mali açıdan zor duruma düşürmüştür. Bu kapsamda, borçlarını ödemekte güçlük çeken şirketlerin konkordato ilan etme taleplerinde ciddi bir artış yaşanmıştır. Her ne kadar konkordato süreci esasen borçlu şirketin korunması amacıyla yürütülse de, bu sürecin alacaklılar üzerindeki etkileri de oldukça büyüktür.',
    },
    {
      type: 'paragraph',
      text: 'Konkordato süreci genellikle borçlu tarafından gizli ve sessiz şekilde başlatılmakta, ilan edilene kadar kamuya duyurulmamaktadır. Bu durum, alacaklıların hazırlıksız yakalanmasına ve panik havasının oluşmasına neden olmaktadır. Sürecin ilan edilmesiyle birlikte alacaklılar, alacaklarının tahsili konusunda belirsizlik yaşamaya başlar. Özellikle küçük ve orta ölçekli işletmeler, bu belirsizlikten en çok etkilenen gruplar arasında yer alır.',
    },
    {
      type: 'paragraph',
      text: 'Konkordato uygulaması, Türk İcra ve İflas Hukuku çerçevesinde hem borçlunun hem de alacaklının haklarını dengelemeye çalışan istisnai bir yol olsa da uygulamada bazı yapısal sorunlar söz konusudur:',
    },
    {
      type: 'list',
      items: [
        'Sürecin başlangıcında alacaklıların haberdar olmaması',
        'Geçici mühlet sürecinde alacaklıların icra yollarının kapanması',
        'Komiser raporlarının yeterli denetimden geçmemesi',
        'Kötü niyetli borçluların konkordato kurumunu suistimal edebilmesi',
      ],
    },
    { type: 'heading', text: 'Alacaklı olduğum firma konkordato ilan ettiğinde ne yapmalıyım?' },
    {
      type: 'paragraph',
      text: 'Bilindiği üzere geçici mühlet süresi üç ay olup, mahkeme kararıyla iki aya kadar uzatılabilir. Bu sürede borçlunun malvarlığı koruma altına alınır, icra takipleri durdurulur ve konkordato komiseri görevlendirilir. Alacaklıların ilk olarak yapması gereken şey, işin uzmanı olan bir avukat aracılığıyla vakit kaybetmeden geçici mühlet kararına itiraz edip ilgili mahkemeye müdahillik talebinde bulunarak davaya müdahil olmalıdır.',
    },
    {
      type: 'paragraph',
      text: 'Alacaklı, davaya müdahil olduktan sonra ilk olarak konkordato ilanı için başvuru şartlarının en önemli unsuru olan Konkordato Ön Projesini incelemelidir. Bu proje, borçlunun borçlarını hangi oranda veya vadede ödeyeceğini, alacaklıların alacaklarından hangi oranda vazgeçmiş olacaklarını ve ödemeler için gerekli mali kaynağın nasıl sağlanacağını gösterir. Alacaklının dikkat etmesi gereken en önemli husus, kendi alacağının ön projede doğru şekilde yer alıp almadığıdır.',
    },
    {
      type: 'paragraph',
      text: 'Alacaklı, bu aşamaları tamamladıktan sonra kesin mühlet hakkında karar duruşması için hazırlık yapmalıdır. Konkordato başvurusunun yasal şartlara uygun olup olmadığının dosya üzerinden detaylı biçimde incelenmesi büyük önem taşır. Şartların eksik olduğu kanaati oluşursa, alacaklının mahkemeye başvurarak konkordato talebinin reddini istemesi mümkündür.',
    },
    { type: 'heading', text: 'Duruşma ne zaman gerçekleşir ve karar sonrası ne yapılmalı?' },
    {
      type: 'paragraph',
      text: 'Mahkeme, "kesin mühlet" kararını geçici mühlet süresi içerisinde verir (İİK m. 289/1) — yani üç aylık geçici mühletin ve gerektiğinde verilen iki aylık ek sürenin sonunda duruşma gerçekleştirilir. Bu duruşmada; geçici mühlet süresince borçlunun sürece katılımı, konkordato komiseri tarafından hazırlanan raporlar ile alacaklıların itiraz gerekçeleri birlikte değerlendirilir.',
    },
    {
      type: 'paragraph',
      text: 'Borçlu iflasa tabi bir borçlu ise ve kesin mühlet sırasında konkordato talebi reddedilirse, mahkeme doğrudan iflas kararı verir; bu durumda alacaklılar konkordato hükümlerine tabi olmaksızın alacaklarının ve işleyen faizlerin tamamını borçludan talep edebilir, icra takibi başlatabilir. Red sebeplerinin geçici mühlet sonrasında ortaya çıkması hâlinde ise komiser durumu asliye ticaret mahkemesine bildirir ve mahkeme geçici mühleti kaldırarak resen iflasa karar verebilir; bu durumda alacaklıların iflas dairesine alacak bildiriminde bulunması gerekir.',
    },
    { type: 'heading', text: 'Mahkeme 1 yıllık kesin mühlet verirse ne olur?' },
    {
      type: 'paragraph',
      text: 'Kesin mühlet süresinin başlamasıyla konkordato komiseri, yapılacak ilanla birlikte alacaklıları 15 gün içinde alacaklarını bildirmeye davet eder (İİK m. 299). Komiser, 1 yıllık kesin mühlet içerisinde bir alacaklılar toplantısı düzenler; bu toplantıya kesinlikle bir vekil aracılığıyla katılım sağlanmalıdır.',
    },
    {
      type: 'paragraph',
      text: 'Alacaklıların süresi içinde alacak bildiriminde bulunmamaları önemli hak kayıplarına yol açabilir: kayıt yaptırmayan alacaklı, konkordato nisabına ve oylamaya dahil edilmez. Ancak bu durum alacaklının alacak hakkını maddi hukuk açısından kaybettiği anlamına gelmez — yalnızca konkordato görüşmelerine katılma ve oy kullanma hakkının kaybı söz konusudur. Süresi içinde kayıt yaptırmamış olsa dahi, alacağını ticaret mahkemesi kararıyla ispat eden alacaklı, konkordatonun tasdikine itiraz etme ve feshini talep etme hakkını korur.',
    },
    { type: 'heading', text: 'Konkordato sürecinde herhangi bir dava açmalı mıyım?' },
    {
      type: 'paragraph',
      text: 'Konkordato sürecinde alacaklılar arasında tapu iptal tescil, sözleşmeye dayalı fesih, sebepsiz zenginleşme gibi davalar açılması yönünde bilgiler yaygın olsa da bunun bir doğruluğu bulunmamaktadır. Bu tarz davalar açılırsa ilgili mahkeme, konkordato süreci sebebiyle davayı "bekletici mesele" yapar ve süreç devam ettiği müddetçe herhangi bir sonuç alınmaz; konkordato yargılaması boyunca borçluya karşı yürütülecek icra takipleri de durdurulur.',
    },
    { type: 'heading', text: 'Hangi dava açılmalı ve ne zaman açılmalı?' },
    {
      type: 'paragraph',
      text: 'Konkordato komiserleri tarafından İİK m. 299 uyarınca yapılan ilan sonrasında alacaklılar 15 gün içinde alacaklarını bildirir. Borçlunun bildirilen alacağı kabul etmemesi halinde, söz konusu alacak "çekişmeli alacak" olarak değerlendirilir. Alacaklı, reddedilen kısım için İİK m. 308/b uyarınca kayıt kabul davası açma hakkına sahiptir — ancak bu dava hakkı, konkordato projesinin tasdikine ilişkin kararın verilmesinden itibaren yalnızca bir ay içinde kullanılabilir.',
    },
    {
      type: 'paragraph',
      text: 'Bu bir aylık süre alacaklılar bakımından büyük önem taşır. Konkordato süreci çok kapsamlı ve hukuki açıdan karmaşık bir süreç olduğundan, alacaklıların hakkının korunması için sürecin işin uzmanı hukukçular tarafından sıkı sıkıya takip edilmesi önerilmektedir.',
    },
  ],
}
