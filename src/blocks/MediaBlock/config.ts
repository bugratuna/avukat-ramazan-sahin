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
      admin: {
        description:
          'Fotoğraf veya kendi video dosyanızı buradan yükleyebilirsiniz. Bunun yerine bir YouTube videosu eklemek isterseniz aşağıdaki "YouTube Video Bağlantısı" alanını kullanın — ikisinden yalnızca biri yeterlidir.',
      },
      label: 'Medya (Fotoğraf veya Video Dosyası)',
      relationTo: 'media',
    },
    {
      name: 'youtubeUrl',
      type: 'text',
      admin: {
        description:
          'Bir YouTube video bağlantısı (örn. https://www.youtube.com/watch?v=... veya https://youtu.be/...) yapıştırırsanız, yukarıdaki medya yerine bu video gömülü olarak gösterilir.',
      },
      label: 'YouTube Video Bağlantısı (opsiyonel)',
    },
    {
      name: 'overlayText',
      type: 'text',
      admin: {
        description: 'Doldurulursa, fotoğrafın üzerine ortalanmış büyük bir başlık olarak gösterilir (banner görünümü).',
      },
      label: 'Fotoğraf Üzerindeki Başlık (opsiyonel)',
    },
  ],
}
