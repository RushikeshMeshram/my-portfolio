'use client'

import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface BlogCardProps {
  slug: string
  title: string
  excerpt?: string
  category?: string
  publishedDate: string
  featuredImage?: any
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  publishedDate,
  featuredImage,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl md:hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full flex flex-col">
        {featuredImage?.asset && (
          <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700">
            <Image
              src={urlFor(featuredImage).url()}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-between mb-3">
            {category && (
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {category}
              </span>
            )}
            <span className="text-sm text-gray-500 dark:text-gray-400 shrink-0">
              {new Date(publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 flex-grow line-clamp-3">{excerpt}</p>
        </div>
      </div>
    </Link>
  )
}
