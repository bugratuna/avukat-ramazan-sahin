'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const TABS = [
  { categorySlug: null, href: '/admin/collections/posts', label: 'Tümü' },
  {
    categorySlug: 'uzmanlik-alanlari',
    href: '/admin/collections/posts?where[categories.slug][equals]=uzmanlik-alanlari',
    label: 'Faaliyet Alanları',
  },
  {
    categorySlug: 'blog',
    href: '/admin/collections/posts?where[categories.slug][equals]=blog',
    label: 'Makaleler',
  },
]

const containerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '8px',
  marginBottom: '16px',
}

const tabStyle = (active: boolean): React.CSSProperties => ({
  backgroundColor: active ? 'var(--theme-elevation-800)' : 'transparent',
  border: '1px solid var(--theme-elevation-150)',
  borderColor: active ? 'var(--theme-elevation-800)' : 'var(--theme-elevation-150)',
  borderRadius: '20px',
  color: active ? 'var(--theme-elevation-0)' : 'var(--theme-elevation-800)',
  fontSize: '13px',
  padding: '4px 12px',
  textDecoration: 'none',
})

const PostsListFilters: React.FC = () => {
  const searchParams = useSearchParams()
  const activeSlug = searchParams.get('where[categories.slug][equals]')

  return (
    <div style={containerStyle}>
      {TABS.map(({ categorySlug, href, label }) => (
        <Link href={href} key={label} style={tabStyle(activeSlug === categorySlug)}>
          {label}
        </Link>
      ))}
    </div>
  )
}

export default PostsListFilters
