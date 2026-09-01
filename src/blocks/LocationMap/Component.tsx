import React from 'react'

import type { LocationMapBlock as LocationMapBlockProps } from '@/payload-types'

import { firmInfo } from '@/endpoints/seed/avukat-data'

export const LocationMapBlock: React.FC<LocationMapBlockProps> = ({ address }) => {
  const query = address || firmInfo.mapQuery
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`

  return (
    <div className="container">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-border md:aspect-[21/9]">
        <iframe
          className="size-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={src}
          title={`${firmInfo.name} - Google Haritalar Konumu`}
        />
      </div>
    </div>
  )
}
