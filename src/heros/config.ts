import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Hero Türü',
      options: [
        {
          label: 'Yok',
          value: 'none',
        },
        {
          label: 'Video/Görsel Arka Planlı (Büyük)',
          value: 'highImpact',
        },
        {
          label: 'Görsel Yanda (Orta)',
          value: 'mediumImpact',
        },
        {
          label: 'Sade Metin (Küçük)',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'eyebrow',
      type: 'text',
      admin: {
        description: 'Başlığın üstünde görünen küçük vurgu metni (opsiyonel).',
      },
      label: 'Üst Vurgu Metni',
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'slides',
      type: 'array',
      admin: {
        condition: (_, { type } = {}) => type === 'highImpact',
        description:
          'Video/görsel arka planın üzerinde belirli aralıklarla otomatik değişen metinler (opsiyonel). En az 2 slayt eklenirse kayan metin gösterilir; boş bırakılırsa yukarıdaki üst vurgu metni ve başlık kullanılır.',
      },
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Üst Vurgu Metni',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Başlık',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Açıklama',
        },
      ],
      label: 'Kayan Metinler (Slider)',
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
        description: 'Görsel veya video (mp4) yükleyebilirsiniz — video otomatik döngüye alınır.',
      },
      label: 'Arka Plan Görseli/Videosu',
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
