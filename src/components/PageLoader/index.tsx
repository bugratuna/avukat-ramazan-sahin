'use client'

import React, { useEffect, useState } from 'react'

import { LoaderOverlay } from './LoaderOverlay'
import { waitForMediaReady } from './waitForMedia'

const SESSION_KEY = 'rs-loader-shown'
const MIN_VISIBLE_MS = 900
const FADE_MS = 500
const MAX_MEDIA_WAIT_MS = 6000

/**
 * Site ilk açılırken (sekme başına bir kez) görünen kurumsal marka
 * yükleyicisi. Root layout'a monte edildiği için client-side sayfa
 * geçişlerinde tekrar tetiklenmez — bunun için bkz. RouteTransitionLoader.
 */
export const PageLoader: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.sessionStorage.getItem(SESSION_KEY)) return

    setMounted(true)
    const start = Date.now()

    const finish = () => {
      waitForMediaReady(MAX_MEDIA_WAIT_MS).then(() => {
        const elapsed = Date.now() - start
        const wait = Math.max(0, MIN_VISIBLE_MS - elapsed)
        window.setTimeout(() => {
          setFadingOut(true)
          window.setTimeout(() => setMounted(false), FADE_MS)
        }, wait)
      })
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
    }

    window.sessionStorage.setItem(SESSION_KEY, '1')

    return () => window.removeEventListener('load', finish)
  }, [])

  if (!mounted) return null

  return <LoaderOverlay fadingOut={fadingOut} />
}
