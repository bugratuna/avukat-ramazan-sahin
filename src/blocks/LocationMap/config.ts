import type { Block } from 'payload'

export const LocationMap: Block = {
  slug: 'locationMap',
  interfaceName: 'LocationMapBlock',
  labels: {
    plural: 'Konum Haritaları',
    singular: 'Konum Haritası',
  },
  fields: [
    {
      name: 'address',
      type: 'text',
      admin: {
        description: 'Boş bırakılırsa büronun varsayılan adresi kullanılır.',
      },
      label: 'Adres',
    },
  ],
}
