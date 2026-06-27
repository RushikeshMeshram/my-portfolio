'use client'

import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import { BLOG_POSTS_QUERY, BLOG_CATEGORIES_QUERY } from '@/sanity/lib/queries'
import BlogCard from '@/components/BlogCard'
import { BlogGridSkeletonLoader } from '@/components/SkeletonLoaders'
import type { BlogPost } from '@/sanity/lib/types'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData, categoriesData] = await Promise.all([
          client.fetch<BlogPost[]>(BLOG_POSTS_QUERY),
          client.fetch<string[]>(BLOG_CATEGORIES_QUERY),
        ])
        setPosts(postsData || [])
        setCategories((categoriesData || []).filter(Boolean))
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.')
        console.error('Error fetching blog posts:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredPosts = selectedCategory
    ? posts.filter((p) => p.category === selectedCategory)
    : posts

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <div className="text-5xl mb-4">📝</div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Unable to load blog posts
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We`re having trouble loading the latest articles right now.
              Please refresh the page and try again. If the issue persists,
              check back later for new content.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
          Blog
        </h1>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 sm:px-4 py-2 rounded-lg transition text-sm sm:text-base ${selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 rounded-lg transition text-sm sm:text-base ${selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {loading ? (
          <BlogGridSkeletonLoader count={4} />
        ) : filteredPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post._id}
                slug={post.slug.current}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                publishedDate={post.publishedDate}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>No blog posts found</p>
          </div>
        )}
      </div>
    </div>
  )
}
