'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

import './index.scss'

const baseClass = 'posts-list-filters'

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

const PostsListFilters: React.FC = () => {
  const searchParams = useSearchParams()
  const activeSlug = searchParams.get('where[categories.slug][equals]')

  return (
    <div className={baseClass}>
      {TABS.map(({ categorySlug, href, label }) => (
        <Link
          className={`${baseClass}__tab${activeSlug === categorySlug ? ` ${baseClass}__tab--active` : ''}`}
          href={href}
          key={label}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}

export default PostsListFilters
