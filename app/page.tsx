import { client } from '@/sanity/lib/client'
import { HERO_QUERY, FEATURED_PROJECTS_QUERY } from '@/sanity/lib/queries'
import { generateSEOMetadata } from '@/lib/seo'
import HeroSection from '@/components/HeroSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import type { Metadata } from 'next'
import type { Hero, Project } from '@/sanity/lib/types'

export const revalidate = 60 // ISR: revalidate every 60 seconds

export const metadata: Metadata = generateSEOMetadata({
  title: 'Frontend Developer | Modern Portfolio',
  description: 'Frontend developer with 4+ years of experience in React, Next.js, and modern web technologies. View my projects and experience.',
})

export default async function Home() {
  const [hero, featuredProjects] = await Promise.all([
    client.fetch<Hero | null>(HERO_QUERY),
    client.fetch<Project[]>(FEATURED_PROJECTS_QUERY),
  ])

  const heroData = {
    headline: hero?.headline || 'Frontend Developer',
    subheadline: hero?.subheadline || 'Building beautiful and functional web experiences',
    ctaText: hero?.ctaText || 'View My Work',
    ctaLink: hero?.ctaLink || '/projects',
    backgroundImage: hero?.backgroundImage || undefined,
  }

  return (
    <>
      <HeroSection {...heroData} />
      {featuredProjects && featuredProjects.length > 0 && (
        <FeaturedProjects projects={featuredProjects} />
      )}
    </>
  )
}
