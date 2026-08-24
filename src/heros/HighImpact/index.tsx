'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    className="size-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const pillClasses: Record<string, string> = {
  default:
    'group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-black transition-colors hover:bg-white/90',
  outline:
    'group inline-flex items-center gap-3 rounded-full border border-white/40 py-2 pl-6 pr-2 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10',
}

export const HighImpactHero: React.FC<Page['hero']> = ({ eyebrow, links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="relative -mt-[10.4rem] flex min-h-[92vh] items-end overflow-hidden text-white"
      data-theme="dark"
    >
      <div className="absolute inset-0 -z-10 select-none">
        {media && typeof media === 'object' ? (
          <Media fill imgClassName="object-cover" priority resource={media} videoClassName="size-full object-cover" />
        ) : (
          <div className="size-full bg-[radial-gradient(ellipse_at_top_right,_oklch(74%_0.11_75deg_/_25%),_transparent_60%),linear-gradient(to_bottom,_oklch(20%_0.03_255deg),_oklch(10%_0.01_255deg))]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      </div>

      <div className="container relative z-10 pb-20 pt-40 md:pb-28">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold">
              {eyebrow}
            </p>
          )}
          {richText && (
            <RichText
              className="mb-8 [&_h1]:font-serif [&_h1]:text-5xl [&_h1]:font-normal [&_h1]:leading-[1.05] [&_h1]:tracking-tight md:[&_h1]:text-7xl [&_p]:mt-4 [&_p]:max-w-lg [&_p]:text-white/80"
              data={richText}
              enableGutter={false}
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex flex-wrap gap-4">
              {links.map(({ link }, i) => {
                if (!link) return null
                const { label, appearance, ...linkProps } = link
                return (
                  <li key={i}>
                    <CMSLink
                      {...linkProps}
                      appearance={appearance || 'default'}
                      className={pillClasses[appearance || 'default']}
                    >
                      <span>{label}</span>
                      <span className="flex size-8 items-center justify-center rounded-full bg-gold text-gold-foreground transition-transform group-hover:translate-x-0.5">
                        <ArrowIcon />
                      </span>
                    </CMSLink>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 hidden justify-center md:flex">
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <span className="size-1 animate-bounce rounded-full bg-white/80" />
        </span>
      </div>
    </div>
  )
}
