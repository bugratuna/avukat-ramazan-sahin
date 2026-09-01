'use client'

import { cn } from '@/utilities/ui'
import React from 'react'

import { useHeaderTheme } from '@/providers/HeaderTheme'

/**
 * Header sabit (fixed) konumlandırıldığı için sayfa içeriğinin onun
 * altından başlaması gerekiyor. Payload'ın admin bar'ı görünürken
 * (giriş yapılmış düzenleyiciler için) header de aşağı kaydığından,
 * burada da aynı payı ekliyoruz.
 */
export const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { hasAdminBar } = useHeaderTheme()

  return <main className={cn('pt-30 transition-[padding] duration-300', hasAdminBar && 'pt-40')}>{children}</main>
}
