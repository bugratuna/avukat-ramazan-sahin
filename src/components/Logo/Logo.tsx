import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

// TODO: Büronun gerçek logosu gelince bu metin yerine <img> ile değiştirin.
export const Logo = (props: Props) => {
  const { className } = props

  return (
    <span className={clsx('font-semibold tracking-tight text-lg whitespace-nowrap', className)}>
      Ramazan Şahin Hukuk Bürosu
    </span>
  )
}
