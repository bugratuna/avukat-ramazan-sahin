import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  labels: {
    plural: 'Medya Blokları',
    singular: 'Medya Bloğu',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      label: 'Medya',
      relationTo: 'media',
      required: true,
    },
  ],
}
