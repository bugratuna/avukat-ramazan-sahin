'use client'

import { cn } from '@/utilities/ui'
import React, { useEffect, useRef, useState } from 'react'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { Media } from '@/components/Media'

type MediaResource = NonNullable<NonNullable<ContentBlockProps['columns']>[number]['media']>

export const AnimatedMedia: React.FC<{ direction: 'left' | 'right'; resource: MediaResource }> = ({
  direction,
  resource,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-border shadow-lg transition-all duration-700 ease-out motion-reduce:transition-none',
        visible ? 'translate-x-0 opacity-100' : direction === 'left' ? '-translate-x-16 opacity-0' : 'translate-x-16 opacity-0',
      )}
      ref={ref}
    >
      <Media imgClassName="aspect-[4/3] w-full object-cover" resource={resource} />
    </div>
  )
}
