'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`
  const hasImage = Boolean(metaImage && typeof metaImage !== 'string')

  return (
    <article
      className={cn(
        'group flex h-full flex-col border-t-2 border-border pt-6 transition-colors hover:border-gold',
        className,
      )}
      ref={card.ref}
    >
      {hasImage && (
        <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden bg-secondary">
          <Media
            className="size-full"
            imgClassName="size-full scale-105 object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-100 group-hover:grayscale-0"
            resource={metaImage!}
            size="33vw"
          />
        </div>
      )}
      {showCategories && hasCategories && (
        <div className="mb-2 text-xs font-medium tracking-[0.12em] text-gold uppercase">
          {categories?.map((category, index) => {
            if (typeof category === 'object') {
              const categoryTitle = category.title || 'Untitled category'
              const isLast = index === categories.length - 1
              return (
                <Fragment key={index}>
                  {categoryTitle}
                  {!isLast && <Fragment>, &nbsp;</Fragment>}
                </Fragment>
              )
            }
            return null
          })}
        </div>
      )}
      {titleToUse && (
        <h3 className="font-serif text-xl leading-snug font-normal">
          <Link href={href} ref={link.ref}>
            {titleToUse}
          </Link>
        </h3>
      )}
      {description && (
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{sanitizedDescription}</p>
      )}
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-gold">
        Devamını Oku
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </article>
  )
}
