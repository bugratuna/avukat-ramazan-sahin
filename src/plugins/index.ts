import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { searchPlugin } from '@payloadcms/plugin-search'
import { s3Storage } from '@payloadcms/storage-s3'
import { Plugin } from 'payload'
import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { searchFields } from '@/search/fieldOverrides'
import { beforeSyncWithSearch } from '@/search/beforeSync'

import { Page, Post } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title
    ? `${doc.title} | Ramazan Şahin Hukuk Bürosu`
    : 'Ramazan Şahin Hukuk Bürosu'
}

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

// Cloudflare R2 kimlik bilgileri tanımlıysa (production) medya bu S3-uyumlu
// depoya yüklenir; tanımlı değilse (yerel geliştirme) Payload varsayılan
// yerel disk depolamasını kullanmaya devam eder — bkz. src/collections/Media.ts
// `staticDir`. R2, sıfır aktarım (egress) ücreti sayesinde Vercel Blob'a göre
// çok daha ucuz — bkz. https://developers.cloudflare.com/r2/pricing/
const hasR2Config = Boolean(
  process.env.R2_ACCESS_KEY_ID &&
    process.env.R2_SECRET_ACCESS_KEY &&
    process.env.R2_BUCKET &&
    process.env.R2_ENDPOINT,
)

export const plugins: Plugin[] = [
  ...(hasR2Config
    ? [
        s3Storage({
          bucket: process.env.R2_BUCKET as string,
          collections: {
            media: true,
          },
          config: {
            credentials: {
              accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
              secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
            },
            endpoint: process.env.R2_ENDPOINT,
            forcePathStyle: true,
            region: 'auto',
          },
        }),
      ]
    : []),
  redirectsPlugin({
    collections: ['pages', 'posts'],
    overrides: {
      labels: {
        singular: 'Yönlendirme',
        plural: 'Yönlendirmeler',
      },
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
    },
    formOverrides: {
      labels: {
        singular: 'Form',
        plural: 'Formlar',
      },
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          return field
        })
      },
    },
    formSubmissionOverrides: {
      labels: {
        singular: 'Form Gönderimi',
        plural: 'Form Gönderimleri',
      },
    },
  }),
  searchPlugin({
    collections: ['posts'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      labels: {
        singular: 'Arama Sonucu',
        plural: 'Arama Sonuçları',
      },
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
]
