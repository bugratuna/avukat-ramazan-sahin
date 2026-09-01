import Image from 'next/image'
import React from 'react'

/**
 * Kurumsal yükleme katmanı — hem ilk açılışta (PageLoader) hem de sayfa
 * içi geçişlerde (RouteTransitionLoader) kullanılan ortak görsel.
 */
export const LoaderOverlay: React.FC<{ fadingOut: boolean }> = ({ fadingOut }) => (
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
