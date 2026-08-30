import { cn } from '@/utilities/ui'
import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''
  const hasImage = Boolean(heroImage && typeof heroImage !== 'string')

  const categoryList = categories?.map((category, index) => {
    if (typeof category === 'object' && category !== null) {
      const { title: categoryTitle } = category
      const titleToUse = categoryTitle || 'Untitled category'
      const isLast = index === categories.length - 1
      return (
        <React.Fragment key={index}>
          {titleToUse}
          {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
        </React.Fragment>
      )
    }
    return null
  })

  return (
    <div className={cn('relative flex items-end', hasImage && '-mt-30')}>
      <div
        className={cn(
          'container relative z-10 pb-8 lg:grid lg:grid-cols-[1fr_48rem_1fr]',
          hasImage ? 'text-white' : 'pt-4 text-foreground',
        )}
      >
        <div className="col-span-1 col-start-1 md:col-span-2 md:col-start-2">
          {categoryList && (
            <div className="mb-4 text-sm font-medium tracking-wide text-gold uppercase">
              {categoryList}
            </div>
          )}

          <h1 className="mb-6 font-serif text-3xl leading-tight font-normal md:text-5xl">
            {title}
          </h1>

          <div className="flex flex-col gap-4 md:flex-row md:gap-16">
            {hasAuthors && (
              <div className="flex flex-col gap-1">
                <p className="text-sm text-muted-foreground">Yazar</p>
                <p>{formatAuthors(populatedAuthors)}</p>
              </div>
            )}
            {publishedAt && (
              <div className="flex flex-col gap-1">
                <p className="text-sm text-muted-foreground">Yayın Tarihi</p>
                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
            )}
          </div>
        </div>
      </div>
      {hasImage && (
        <div className="min-h-[80vh] select-none">
          <Media fill priority imgClassName="-z-10 object-cover" resource={heroImage!} />
          <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-linear-to-t from-black to-transparent" />
        </div>
      )}
    </div>
  )
}
