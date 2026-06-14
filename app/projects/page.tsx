'use client'

import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import { PROJECTS_QUERY, TECHNOLOGIES_QUERY } from '@/sanity/lib/queries'
import ProjectCard from '@/components/ProjectCard'
import { GridSkeletonLoader } from '@/components/SkeletonLoaders'
import type { Project } from '@/sanity/lib/types'
import { log } from 'console'

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [technologies, setTechnologies] = useState<string[]>([])
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  console.log(projects)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, techsData] = await Promise.all([
          client.fetch<Project[]>(PROJECTS_QUERY),
          client.fetch<string[]>(TECHNOLOGIES_QUERY),
        ])
        setProjects(projectsData || [])
        setTechnologies(techsData || [])
      } catch (err) {
        setError('Failed to load projects. Please try again later.')
        console.error('Error fetching projects:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredProjects = selectedTech
    ? projects.filter((p) => p.technologies?.includes(selectedTech))
    : projects

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Projects are temporarily unavailable
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're having trouble loading the project portfolio right now.
              Please refresh the page or check back in a few minutes.
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
          My Projects
        </h1>

        {/* Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-3 sm:px-4 py-2 rounded-lg transition text-sm sm:text-base ${selectedTech === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              All
            </button>
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3 sm:px-4 py-2 rounded-lg transition text-sm sm:text-base ${selectedTech === tech
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <GridSkeletonLoader count={6} />
        ) : filteredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project._id}
                slug={project.slug.current}
                title={project.title}
                shortIntro={project.shortIntro}
                description={project.description}
                technologies={project.technologies}
                image={project.images?.[0].asset}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>No projects found</p>
          </div>
        )}
      </div>
    </div>
  )
}
