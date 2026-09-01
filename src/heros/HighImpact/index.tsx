'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { cn } from '@/utilities/ui'
import React, { useEffect, useState } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
    'group inline-flex items-center gap-2.5 rounded-md bg-white px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-white/90',
  outline:
    'group inline-flex items-center gap-2.5 rounded-md border border-white/50 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10',
}

const enterClasses = (visible: boolean) =>
  cn(
    'transition-all duration-500 ease-out motion-reduce:transition-none',
    visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
  )

export const HighImpactHero: React.FC<Page['hero']> = ({ eyebrow, links, media, richText }) => {
  const { setHeaderTheme, hasAdminBar } = useHeaderTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setHeaderTheme('dark')
    const timeout = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className={cn(
        'relative flex min-h-screen items-end overflow-hidden text-white transition-[margin-top] duration-300',
        hasAdminBar ? '-mt-40' : '-mt-30',
      )}
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

      <div className="container relative z-10 pt-32 pb-24 md:pt-40 md:pb-28">
        <div className="max-w-2xl">
          {eyebrow && (
            <p
              className={cn(
                'mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold md:mb-4 md:text-sm',
                enterClasses(mounted),
              )}
            >
              {eyebrow}
            </p>
          )}
          {richText && (
            <RichText
              className={cn(
                'mb-6 [&_h1]:font-serif [&_h1]:text-4xl [&_h1]:font-normal [&_h1]:leading-[1.05] [&_h1]:tracking-tight md:mb-8 md:[&_h1]:text-7xl [&_p]:mt-3 [&_p]:max-w-lg [&_p]:text-sm [&_p]:text-white/80 md:[&_p]:mt-4 md:[&_p]:text-base',
                enterClasses(mounted),
              )}
              data={richText}
              enableGutter={false}
              style={{ transitionDelay: '100ms' }}
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className={cn('flex flex-wrap gap-4', enterClasses(mounted))} style={{ transitionDelay: '220ms' }}>
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
                      <ArrowIcon />
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
