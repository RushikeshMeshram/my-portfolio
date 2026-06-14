import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
}

export function generateSEOMetadata({
  title,
  description,
  image,
  url,
}: SEOProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url,
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}
