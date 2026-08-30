'use client'

import { cn } from '@/utilities/ui'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

/**
 * Gerçek logo dosyası eklenene kadar zarif bir yazı işareti (wordmark)
 * gösterir. `public/logo.png` (veya .svg) eklendiği an otomatik olarak
 * ona geçer — başka bir kod değişikliği gerekmez.
 */
export const Logo = ({ className, loading = 'lazy', priority = 'low' }: Props) => {
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

  return (
    <span className={cn('font-serif text-lg font-normal tracking-tight whitespace-nowrap', className)}>
      Ramazan Şahin
      <span className="block text-[0.65rem] font-sans font-medium uppercase tracking-[0.2em] text-gold">
        Hukuk ve Danışmanlık
      </span>
    </span>
  )
}
