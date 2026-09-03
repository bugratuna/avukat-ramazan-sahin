'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'rs-cookie-consent'

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[200] border-t border-white/10 bg-navy px-4 py-4 text-navy-foreground shadow-[0_-4px_16px_rgba(0,0,0,0.2)] sm:px-6">
      <div className="container flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-navy-foreground/80">
          Sitemizi kullanırken deneyiminizi iyileştirmek için gerekli teknik verileri saklıyoruz. Detaylar için{' '}
          <Link className="underline hover:text-gold" href="/cerez-politikasi">
            Çerez Politikamızı
          </Link>{' '}
          inceleyebilirsiniz.
        </p>
        <button
          className="shrink-0 rounded-md bg-gold px-5 py-2 text-sm font-medium text-gold-foreground transition-colors hover:bg-gold/90"
          onClick={accept}
          type="button"
        >
          Kabul Et
        </button>
      </div>
    </div>
  )
}
