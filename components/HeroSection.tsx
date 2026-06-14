'use client'

import Link from 'next/link'

interface HeroProps {
  headline: string
  subheadline: string
  ctaText?: string
  ctaLink?: string
}

export default function HeroSection({ headline, subheadline, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="min-h-[calc(100dvh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 break-words">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 break-words">
          {subheadline}
        </p>
        {ctaLink && (
          <Link
            href={ctaLink}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition text-sm sm:text-base"
          >
            {ctaText || 'Get Started'}
          </Link>
        )}
      </div>
    </section>
  )
}
