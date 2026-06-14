import { client } from '@/sanity/lib/client'
import { PROJECT_BY_SLUG_QUERY, PROJECT_SLUGS_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { generateSEOMetadata } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/sanity/lib/types'
import type { Metadata } from 'next'

export const revalidate = 60 // ISR

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  const slugs = await client.fetch<Array<{ slug: { current: string } }>>(PROJECT_SLUGS_QUERY)
  return slugs.map(({ slug }) => ({ slug: slug.current }))
}

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params
  const project = await client.fetch<Project | null>(PROJECT_BY_SLUG_QUERY, {
    slug: params.slug,
  })

  if (!project) {
    return generateSEOMetadata({
      title: 'Project Not Found',
      description: 'The project you are looking for could not be found.',
    })
  }

  return generateSEOMetadata({
    title: `${project.title} | Project`,
    description: project.shortIntro || project.description || 'View this project',
  })
}

export default async function ProjectDetail(props: { params: Params }) {
  const params = await props.params
  const project = await client.fetch<Project | null>(PROJECT_BY_SLUG_QUERY, {
    slug: params.slug,
  })

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white dark:bg-gray-900 px-4 sm:px-6">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link href="/projects" className="text-blue-600 hover:underline">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Link href="/projects" className="text-blue-600 hover:underline mb-6 sm:mb-8 inline-block">
          ← Back to Projects
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 break-words">{project.title}</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 break-words">{project.shortIntro}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap break-words">
            {project.description}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 sm:px-6 rounded-lg transition text-sm sm:text-base text-center"
            >
              View Live Project
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-5 sm:px-6 rounded-lg transition text-sm sm:text-base text-center"
            >
              View on GitHub
            </a>
          )}
        </div>

        {/* Images Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {project.images.map((image, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                {image.asset && (
                  <Image
                    src={urlFor(image).url()}
                    alt={`${project.title} ${idx + 1}`}
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
