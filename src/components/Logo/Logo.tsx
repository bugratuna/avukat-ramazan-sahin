'use client'

import { cn } from '@/utilities/ui'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  /** Sadece işaret/monogram, yazı olmadan (ör. footer köşesi gibi küçük kullanım) */
  iconOnly?: boolean
}

/**
 * Gerçek marka logosundaki köşeli çerçeve + "RŞ" monogramı motifini
 * yeniden üreten işaret. Çerçevenin sol/üst kenarı altın, sağ/alt kenarı
 * beyaz — orijinal logodaki gibi.
 */
const Mark: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    aria-hidden="true"
    className={cn('shrink-0', className)}
    fill="none"
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="rs-gold" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#e7c583" />
        <stop offset="55%" stopColor="#c9a45e" />
        <stop offset="100%" stopColor="#a5793a" />
      </linearGradient>
    </defs>
    {/* çerçeve: sol + üst yarı altın */}
    <path d="M15 5H6v34" stroke="url(#rs-gold)" strokeWidth="1.6" />
    {/* çerçeve: sağ + alt yarı beyaz */}
    <path d="M29 5h9v34h-9" stroke="currentColor" strokeWidth="1.6" />
    <text
      fill="url(#rs-gold)"
      fontFamily="var(--font-serif)"
      fontSize="24"
      fontWeight="600"
      x="22"
      y="29"
      textAnchor="middle"
    >
      R
    </text>
    <text
      fill="url(#rs-gold)"
      fontFamily="var(--font-serif)"
      fontSize="13"
      fontStyle="italic"
      x="27"
      y="35"
      textAnchor="middle"
    >
      Ş
    </text>
  </svg>
)

/**
 * Marka logosu: köşeli çerçeve + "RŞ" işareti + yazı işareti (wordmark).
 * Koyu (lacivert) zeminler üzerinde kullanılmak üzere tasarlandı (header,
 * footer). `public/logo.png` eklenirse (gerçek kurumsal logo dosyası)
 * otomatik olarak onu kullanır — başka bir kod değişikliği gerekmez.
 */
export const Logo = ({ className, loading = 'lazy', priority = 'low', iconOnly = false }: Props) => {
  const [imageFailed, setImageFailed] = useState(false)

  if (!imageFailed) {
    return (
      <span className={cn('relative inline-block h-10 w-[9.5rem]', className)}>
        <Image
          alt="Avukat Ramazan Şahin Hukuk ve Danışmanlık"
          className="object-contain object-left"
          fetchPriority={priority === 'auto' ? undefined : priority}
          fill
          loading={loading}
          onError={() => setImageFailed(true)}
          sizes="152px"
          src="/logo.png"
        />
      </span>
    )
  }

  if (iconOnly) {
    return <Mark className={cn('size-9 text-white', className)} />
  }

  return (
    <span className={cn('inline-flex items-center gap-2.5 text-current', className)}>
      <Mark className="size-10 text-white" />
      <span className="leading-tight whitespace-nowrap">
        <span className="block text-[0.6rem] font-medium tracking-[0.25em] text-gold uppercase">
          Avukat
        </span>
        <span className="block font-serif text-lg leading-none font-semibold">Ramazan Şahin</span>
        <span className="mt-1 block text-[0.6rem] font-sans font-medium tracking-[0.2em] text-gold uppercase">
          Hukuk ve Danışmanlık
        </span>
      </span>
    </span>
  )
}
