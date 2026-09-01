'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

import { LoaderOverlay } from '@/components/PageLoader/LoaderOverlay'

const MIN_VISIBLE_MS = 400
const MAX_WAIT_MS = 5000
const FADE_MS = 400
const SAFETY_TIMEOUT_MS = 8000

/**
 * Sayfa içi (client-side) gezinmelerde görünen geçiş katmanı. Bir bağlantıya
 * tıklanır tıklanmaz hemen belirir (linkleri dinleyerek), yeni sayfanın
 * görselleri de dahil tamamen hazır olana kadar kalır — böylece kullanıcı
 * içeriğin veya fotoğrafların geç/aşamalı yüklendiğini fark etmez.
 */
export const RouteTransitionLoader: React.FC = () => {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)
  const isFirstPath = useRef(true)
  const showStartRef = useRef(0)
  const cleanupRef = useRef<() => void>(() => {})

  // Bağlantıya tıklanır tıklanmaz (Next.js RSC verisini getirmeden önce)
  // katmanı hemen göster.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

      const anchor = (e.target as HTMLElement)?.closest?.('a')
      if (!anchor) return
      if (anchor.hasAttribute('download') || anchor.target === '_blank') return

      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return

      let url: URL
      try {
        url = new URL(href, window.location.href)
      } catch {
        return
      }
      if (url.origin !== window.location.origin) return
      if (url.pathname === window.location.pathname) return

      showLoader()
      // Yönlendirme hiç gerçekleşmezse (ör. engellenirse) katmanın sonsuza
      // kadar takılı kalmaması için güvenlik zaman aşımı.
      const safety = window.setTimeout(() => hideLoader(), SAFETY_TIMEOUT_MS)
      cleanupRef.current = () => window.clearTimeout(safety)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showLoader = () => {
    showStartRef.current = Date.now()
    setFadingOut(false)
    setVisible(true)
  }

  const hideLoader = () => {
    const elapsed = Date.now() - showStartRef.current
    const wait = Math.max(0, MIN_VISIBLE_MS - elapsed)
    window.setTimeout(() => {
      setFadingOut(true)
      window.setTimeout(() => setVisible(false), FADE_MS)
    }, wait)
  }

  // Pathname değiştiğinde (yeni sayfa DOM'a girdiğinde) görsellerin
  // yüklenmesini bekleyip katmanı kaldır.
  useEffect(() => {
    cleanupRef.current?.()

    if (isFirstPath.current) {
      isFirstPath.current = false
      return
    }

    // Tıklama dinleyicisi kaçırıldıysa (ör. programatik router.push) yine de göster.
    if (!visible) showLoader()

    let cancelled = false

    const raf = window.requestAnimationFrame(() => {
      const imgs = Array.from(document.querySelectorAll('img'))
      const pending = imgs.filter((img) => !img.complete)

      const imagesReady =
        pending.length === 0
          ? Promise.resolve()
          : Promise.race([
              Promise.all(
                pending.map(
                  (img) =>
                    new Promise<void>((resolve) => {
                      img.addEventListener('load', () => resolve(), { once: true })
                      img.addEventListener('error', () => resolve(), { once: true })
                    }),
                ),
              ),
              new Promise<void>((resolve) => window.setTimeout(resolve, MAX_WAIT_MS)),
            ])

      imagesReady.then(() => {
        if (!cancelled) hideLoader()
      })
    })

    return () => {
      cancelled = true
      window.cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  if (!visible) return null

  return <LoaderOverlay fadingOut={fadingOut} />
}
