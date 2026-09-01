'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { cn } from '@/utilities/ui'
import { firmInfo } from '@/endpoints/seed/avukat-data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Mail, Menu, Phone, X } from 'lucide-react'

import type { Header } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { headerTheme, setHeaderTheme, hasAdminBar } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    setTheme(null)
    setMobileOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme !== theme) setTheme(headerTheme ?? null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = theme === 'dark' && !scrolled && !mobileOpen
  const navItems = data?.navItems || []

  return (
    <header
      className={cn(
        'fixed inset-x-0 z-50 transition-[background-color,box-shadow,top] duration-300',
        hasAdminBar ? 'top-10' : 'top-0',
        transparent ? 'bg-transparent' : 'bg-navy shadow-sm',
      )}
      data-theme="dark"
    >
      {/* Üst bilgi çubuğu */}
      <div
        className={cn(
          'hidden overflow-hidden text-navy-foreground/80 transition-[max-height,opacity] duration-300 md:block',
          !transparent && 'border-b border-white/10',
          scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100',
        )}
      >
        <div className="container flex items-center justify-end gap-6 py-2 text-xs">
          <a className="flex items-center gap-2 hover:text-gold" href={`tel:${firmInfo.phone.replace(/\s/g, '')}`}>
            <Phone className="size-3.5 text-gold" />
            {firmInfo.phone}
          </a>
          <a className="flex items-center gap-2 hover:text-gold" href={`mailto:${firmInfo.email}`}>
            <Mail className="size-3.5 text-gold" />
            {firmInfo.email}
          </a>
        </div>
      </div>

      {/* Ana nav */}
      <div className="container flex items-center justify-between py-4 text-navy-foreground">
        <Link className="shrink-0" href="/">
          <Logo loading="eager" priority="high" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <HeaderNav data={data} />
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          className="flex size-10 items-center justify-center md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobil menü */}
      <div
        className={cn(
          'overflow-y-auto bg-navy text-navy-foreground transition-[max-height] duration-300 md:hidden',
          mobileOpen ? 'max-h-[calc(100vh-4.5rem)]' : 'max-h-0',
        )}
      >
        <nav className="container flex flex-col gap-1 pb-6">
          {navItems.map(({ link }, i) => (
            <CMSLink
              className="border-b border-white/10 py-3 text-base"
              key={i}
              {...link}
              appearance="inline"
            />
          ))}
          <a
            className="mt-4 flex items-center gap-2 py-2 text-gold"
            href={`tel:${firmInfo.phone.replace(/\s/g, '')}`}
          >
            <Phone className="size-4" />
            {firmInfo.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
