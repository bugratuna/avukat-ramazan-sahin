import { getCachedGlobal } from '@/utilities/getGlobals'
import { Instagram } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { firmInfo } from '@/endpoints/seed/avukat-data'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

const socialLinks = [{ Icon: Instagram, label: 'Instagram', url: firmInfo.social.instagram }]

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
          <p className="mt-4 max-w-sm text-xs text-navy-foreground/50">
            Kişisel verileriniz 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında
            işlenmektedir. Detaylar için{' '}
            <Link className="underline hover:text-gold" href="/kvkk-aydinlatma-metni">
              KVKK Aydınlatma Metnimizi
            </Link>{' '}
            inceleyebilirsiniz.
          </p>
          <div className="mt-3 flex flex-col gap-1 text-xs">
            <Link className="text-navy-foreground/50 hover:text-gold" href="/kvkk-aydinlatma-metni">
              KVKK Aydınlatma Metni
            </Link>
            <Link className="text-navy-foreground/50 hover:text-gold" href="/cerez-politikasi">
              Çerez Politikası
            </Link>
          </div>
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
            <li>
              <a
                className="hover:text-gold"
                href={firmInfo.mapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {firmInfo.address}
              </a>
            </li>
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
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map(({ Icon, label, url }) => (
              <a
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-navy-foreground/80 transition-colors hover:border-gold hover:text-gold"
                href={url}
                key={label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container grid grid-cols-1 items-center gap-3 py-6 text-xs text-navy-foreground/60 md:grid-cols-[1fr_auto_1fr]">
          <div className="hidden md:block" />
          <p className="text-center">
            <span className="block">
              © {year} {firmInfo.name}. Tüm hakları saklıdır.
            </span>
            <span className="block">
              Bu site{' '}
              <a
                className="hover:text-gold"
                href="https://bugratuna.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Buğra Tuna
              </a>{' '}
              tarafından tasarlanmıştır.
            </span>
          </p>
          <div className="flex items-center justify-center gap-4 md:justify-self-end">
            <ThemeSelector />
            <Logo className="text-navy-foreground/70" iconOnly />
          </div>
        </div>
      </div>
    </footer>
  )
}
