'use client'

import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { SanityImageSource } from '@sanity/image-url'

interface ProjectCardProps {
  slug: string
  title: string
  shortIntro?: string
  description?: string
  technologies?: string[]
  image?: SanityImageSource 
}

export default function ProjectCard({
  slug,
  title,
  shortIntro,
  description,
  technologies,
  image,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl md:hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full flex flex-col">
        {image?.asset && (
          <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700">
            <Image
              src={urlFor(image).url()}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-2">
            {shortIntro || description?.substring(0, 100)}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies?.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {technologies && technologies.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
