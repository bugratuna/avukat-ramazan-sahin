import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="flex flex-col gap-6 rounded-md bg-navy p-8 text-navy-foreground md:flex-row md:items-center md:justify-between md:gap-8 md:p-10">
        <div className="flex max-w-[42rem] items-center [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-normal md:[&_h2]:text-3xl">
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        <div className="flex shrink-0 flex-col gap-4">
          {(links || []).map(({ link }, i) => {
            return (
              <CMSLink
                className="rounded-md bg-gold px-6 py-3 text-sm font-medium text-gold-foreground transition-colors hover:bg-gold/90"
                key={i}
                {...link}
                appearance="default"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
