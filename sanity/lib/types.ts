import { type SanityDocument } from 'next-sanity'
import type { PortableTextBlock } from '@portabletext/types'

export interface SiteConfig extends SanityDocument {
  name: string
  title: string
  bio: string
  avatar?: {
    asset?: {
      _id: string
      url: string
    }
  }
  socialLinks?: Array<{
    platform: string
    url: string
  }>
  email?: string
}

export interface Hero extends SanityDocument {
  headline: string
  subheadline: PortableTextBlock[]
  ctaText?: string
  ctaLink?: string
  backgroundImage?: {
    asset?: {
      _id: string
      url: string
    }
  }
}

export interface About extends SanityDocument {
  description: string
  profileImage?: {
    asset?: {
      _id: string
      url: string
    }
  }
  highlights?: string[]
}

export interface Skill extends SanityDocument {
  name: string
  category: string
  proficiency: number
}

export interface Project extends SanityDocument {
  title: string
  slug: { current: string }
  shortIntro?: string
  description?: string
  images?: Array<{
    asset?: {
      _id: string
      url: string
    }
  }>
  technologies?: string[]
  projectLink?: string
  githubLink?: string
  featured?: boolean
  createdDate?: string
}

export interface Experience extends SanityDocument {
  jobTitle: string
  company: string
  startDate: string
  endDate?: string
  description?: string
  companyLogo?: {
    asset?: {
      _id: string
      url: string
    }
  }
}

export interface BlogPost extends SanityDocument {
  title: string
  slug: { current: string }
  excerpt?: string
  content: PortableTextBlock[]
  featuredImage?: {
    asset?: {
      _id: string
      url: string
    }
  }
  category?: string
  publishedDate: string
}
