'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC<{ hasHeroImage?: boolean }> = ({ hasHeroImage = false }) => {
  /* Arka planda görsel varsa header'ı koyu (saydam) moda al, yoksa varsayılana bırak */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme(hasHeroImage ? 'dark' : null)
  }, [hasHeroImage, setHeaderTheme])
  return <React.Fragment />
}

export default PageClient
