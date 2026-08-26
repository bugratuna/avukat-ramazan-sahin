'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import { Scale } from 'lucide-react'
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

  return (
    <article
      className={cn(
        'group overflow-hidden rounded-xl border border-border bg-card transition-all hover:cursor-pointer hover:border-gold/60 hover:shadow-lg',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-secondary to-secondary/40">
        {metaImage && typeof metaImage !== 'string' ? (
          <Media
            className="size-full"
            imgClassName="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            resource={metaImage}
            size="33vw"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <Scale className="size-8 text-muted-foreground/40" strokeWidth={1.25} />
          </div>
        )}
      </div>
      <div className="p-5">
        {showCategories && hasCategories && (
          <div className="mb-3 flex flex-wrap gap-2">
            {categories?.map((category, index) => {
              if (typeof category === 'object') {
                const { title: titleFromCategory } = category

                const categoryTitle = titleFromCategory || 'Untitled category'

                return (
                  <Fragment key={index}>
                    <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gold-foreground dark:text-gold">
                      {categoryTitle}
                    </span>
                  </Fragment>
                )
              }

              return null
            })}
          </div>
        )}
        {titleToUse && (
          <h3 className="font-serif text-xl leading-snug font-normal">
            <Link className="hover:text-gold" href={href} ref={link.ref}>
              {titleToUse}
            </Link>
          </h3>
        )}
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{sanitizedDescription}</p>
        )}
      </div>
    </article>
  )
}
