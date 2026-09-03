'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { cn } from '@/utilities/ui'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import React, { useEffect, useMemo, useRef, useState } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { firmInfo } from '@/endpoints/seed/avukat-data'

const quickLinks = [
  { Icon: Phone, label: 'Telefon', url: `tel:${firmInfo.phone.replace(/\s/g, '')}` },
  { Icon: MapPin, label: 'Konum', url: firmInfo.mapsUrl },
  { Icon: Mail, label: 'E-posta', url: `mailto:${firmInfo.email}` },
  { Icon: Instagram, label: 'Instagram', url: firmInfo.social.instagram },
]

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

const SLIDE_INTERVAL_MS = 6000
const SLIDE_FADE_MS = 500

export const HighImpactHero: React.FC<Page['hero']> = ({ eyebrow, links, media, richText, slides }) => {
  const { setHeaderTheme, hasAdminBar } = useHeaderTheme()
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideVisible, setSlideVisible] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  const validSlides = useMemo(
    () => (slides ?? []).filter((slide): slide is NonNullable<typeof slide> => Boolean(slide?.heading)),
    [slides],
  )
  const useSlider = validSlides.length > 1

  const goToSlide = (index: number) => {
    setSlideVisible(false)
    window.setTimeout(() => {
      setActiveIndex(index)
      setSlideVisible(true)
    }, SLIDE_FADE_MS)
  }

  useEffect(() => {
    setHeaderTheme('dark')
    const timeout = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!useSlider) return

    const interval = window.setInterval(() => {
      goToSlide((activeIndex + 1) % validSlides.length)
    }, SLIDE_INTERVAL_MS)

    return () => window.clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useSlider, validSlides.length, activeIndex])

  // Kaydırma çubuğunun aşağısındaki gösterge topu, hero video ekrandan
  // çıkana kadar kaydırma ilerlemesini takip ederek aşağı iner.
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const node = heroRef.current
        if (!node) return
        const rect = node.getBoundingClientRect()
        const progress = rect.height > 0 ? Math.min(1, Math.max(0, -rect.top / rect.height)) : 0
        setScrollProgress(progress)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const activeSlide = useSlider ? validSlides[activeIndex] : null
  const textVisible = mounted && slideVisible

  return (
    <div
      className={cn(
        'relative flex min-h-screen items-end overflow-hidden text-white transition-[margin-top] duration-300',
        hasAdminBar ? '-mt-40' : '-mt-30',
      )}
      data-theme="dark"
      ref={heroRef}
    >
      <div className="absolute inset-0 -z-10 select-none">
        {media && typeof media === 'object' ? (
          <Media
            fill
            imgClassName="object-cover"
            priority
            resource={media}
            videoClassName="size-full object-cover grayscale contrast-125 brightness-95"
          />
        ) : (
          <div className="size-full bg-[radial-gradient(ellipse_at_top_right,_oklch(74%_0.11_75deg_/_25%),_transparent_60%),linear-gradient(to_bottom,_oklch(20%_0.03_255deg),_oklch(10%_0.01_255deg))]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      </div>

      <div
        className={cn(
          'absolute top-1/2 left-6 z-10 hidden -translate-y-1/2 flex-col gap-3 md:flex',
          enterClasses(mounted),
        )}
        style={{ transitionDelay: '300ms' }}
      >
        {quickLinks.map(({ Icon, label, url }) => {
          const isExternal = url.startsWith('http')
          return (
            <a
              aria-label={label}
              className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
              href={url}
              key={label}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              target={isExternal ? '_blank' : undefined}
            >
              <Icon className="size-5" />
            </a>
          )
        })}
      </div>

      <div className="container relative z-10 pt-32 pb-24 md:pt-40 md:pb-28">
        <div className="max-w-2xl">
          {activeSlide ? (
            <>
              {activeSlide.eyebrow && (
                <p
                  className={cn(
                    'mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold md:mb-4 md:text-sm',
                    enterClasses(textVisible),
                  )}
                >
                  {activeSlide.eyebrow}
                </p>
              )}
              <h1
                className={cn(
                  'mb-6 font-serif text-4xl font-normal leading-[1.05] tracking-tight md:mb-8 md:text-7xl',
                  enterClasses(textVisible),
                )}
                style={{ transitionDelay: '100ms' }}
              >
                {activeSlide.heading}
              </h1>
              {activeSlide.description && (
                <p
                  className={cn(
                    'mt-3 max-w-lg text-sm text-white/80 md:mt-4 md:text-base',
                    enterClasses(textVisible),
                  )}
                  style={{ transitionDelay: '150ms' }}
                >
                  {activeSlide.description}
                </p>
              )}
            </>
          ) : (
            <>
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
            </>
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className={cn('mt-6 flex flex-wrap gap-4', enterClasses(mounted))} style={{ transitionDelay: '220ms' }}>
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
          {useSlider && (
            <div className="mt-8 flex gap-2" role="tablist" aria-label="Öne çıkan bilgiler">
              {validSlides.map((slide, i) => (
                <button
                  aria-current={i === activeIndex}
                  aria-label={slide.heading}
                  className={cn(
                    'h-1 w-8 rounded-full transition-colors duration-300 hover:bg-gold/70',
                    i === activeIndex ? 'bg-gold' : 'bg-white/25',
                  )}
                  key={slide.id ?? i}
                  onClick={() => {
                    if (i !== activeIndex) goToSlide(i)
                  }}
                  role="tab"
                  type="button"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-6 z-10 hidden justify-center md:flex"
        style={{ opacity: 1 - scrollProgress }}
      >
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <span
            className="size-1 rounded-full bg-white/80"
            style={{ transform: `translateY(${scrollProgress * 20}px)` }}
          />
        </span>
      </div>
    </div>
  )
}
