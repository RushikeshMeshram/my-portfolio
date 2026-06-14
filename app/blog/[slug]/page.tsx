'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { BLOG_POST_BY_SLUG_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import { SkeletonLoader } from '@/components/SkeletonLoaders'
import type { BlogPost } from '@/sanity/lib/types'

interface BlogDetailProps {
  params: {
    slug: string
  }
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await client.fetch<BlogPost | null>(BLOG_POST_BY_SLUG_QUERY, {
          slug: params.slug,
        })
        setPost(postData)
        if (!postData) {
          setError('Blog post not found')
        }
      } catch (err) {
        setError('Failed to load blog post. Please try again later.')
        console.error('Error fetching blog post:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [params.slug])

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonLoader />
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white dark:bg-gray-900 px-4 sm:px-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">{error || 'Blog post not found'}</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white dark:bg-gray-900 px-4 sm:px-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Blog post not found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Link href="/blog" className="text-blue-600 hover:underline mb-6 sm:mb-8 inline-block">
          ← Back to Blog
        </Link>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 sm:mb-6 text-gray-600 dark:text-gray-400 text-sm">
          {post.category && <span>{post.category}</span>}
          {post.category && <span aria-hidden="true">•</span>}
          <span>
            {new Date(post.publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 break-words">
          {post.title}
        </h1>

        {/* Featured Image */}
        {post.featuredImage && post.featuredImage.asset && (
          <div className="rounded-lg overflow-hidden mb-12">
            <Image
              src={urlFor(post.featuredImage).url()}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none">
          {post.content && <PortableText value={post.content} />}
        </div>
      </div>
    </div>
  )
}
