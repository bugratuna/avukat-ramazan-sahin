import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    overlayText,
    staticImage,
    disableInnerContainer,
  } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  if (overlayText) {
    return (
      <div className={cn({ container: enableGutter }, className)}>
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg md:aspect-[3/1]">
          {(media || staticImage) && (
            <Media
              className="absolute inset-0"
              fill
              imgClassName="object-cover grayscale"
              resource={media}
              src={staticImage}
            />
          )}
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="h-px w-12 bg-gold" />
            <h2 className="font-serif text-3xl font-normal text-white md:text-5xl">{overlayText}</h2>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        '',
        {
          container: enableGutter,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <Media
          imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && (
        <div
          className={cn(
            'mt-6',
            {
              container: !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
    </div>
  )
}
