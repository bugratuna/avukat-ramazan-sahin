import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { firmInfo } from '@/endpoints/seed/avukat-data'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy text-navy-foreground">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link className="inline-block" href="/">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-navy-foreground/70">
            Ceza, aile, ticaret, icra-iflas ve daha birçok alanda güvenilir hukuki danışmanlık ve
            dava takibi.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-medium tracking-[0.12em] text-gold uppercase">Menü</h2>
          <nav className="flex flex-col gap-2">
            {navItems.map(({ link }, i) => (
              <CMSLink
                className="text-sm text-navy-foreground/80 hover:text-gold"
                key={i}
                {...link}
                appearance="inline"
              />
            ))}
          </nav>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-medium tracking-[0.12em] text-gold uppercase">
            İletişim
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-navy-foreground/80">
            <li>{firmInfo.address}</li>
            <li>
              <a className="hover:text-gold" href={`tel:${firmInfo.phone.replace(/\s/g, '')}`}>
                {firmInfo.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href={`mailto:${firmInfo.email}`}>
                {firmInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col-reverse items-center justify-between gap-3 py-6 text-xs text-navy-foreground/60 md:flex-row">
          <p>
            © {year} {firmInfo.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <ThemeSelector />
            <Logo className="text-navy-foreground/70" iconOnly />
          </div>
        </div>
      </div>
    </footer>
  )
}
