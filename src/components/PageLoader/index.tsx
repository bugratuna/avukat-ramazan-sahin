'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const SESSION_KEY = 'rs-loader-shown'
const MIN_VISIBLE_MS = 900
const FADE_MS = 500

/**
 * Site ilk açılırken (sekme başına bir kez) görünen kurumsal marka
 * yükleyicisi. Root layout'a monte edildiği için client-side sayfa
 * geçişlerinde tekrar tetiklenmez — sadece gerçek/ilk yüklemede görünür.
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
      const elapsed = Date.now() - start
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed)
      window.setTimeout(() => {
        setFadingOut(true)
        window.setTimeout(() => setMounted(false), FADE_MS)
      }, wait)
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

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy transition-opacity duration-500 ease-out motion-reduce:transition-none ${
        fadingOut ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="animate-[rs-loader-in_0.7s_ease-out_forwards] opacity-0 motion-reduce:animate-none motion-reduce:opacity-100">
        <Image
          alt=""
          className="mx-auto object-contain"
          height={72}
          priority
          src="/logo.png"
          width={55}
        />
      </div>
      <div className="mt-5 h-px w-24 overflow-hidden bg-white/10">
        <div className="h-full w-full origin-left animate-[rs-loader-sweep_1.6s_ease-in-out_infinite] bg-gold motion-reduce:animate-none" />
      </div>
      <p className="mt-4 animate-[rs-loader-in_0.7s_ease-out_0.15s_forwards] text-[0.65rem] font-medium tracking-[0.3em] text-navy-foreground/50 uppercase opacity-0 motion-reduce:animate-none motion-reduce:opacity-100">
        Ramazan Şahin Hukuk Bürosu
      </p>
    </div>
  )
}
