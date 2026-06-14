import { client } from '@/sanity/lib/client'
import { ABOUT_QUERY, SKILLS_QUERY, EXPERIENCES_QUERY } from '@/sanity/lib/queries'
import { generateSEOMetadata } from '@/lib/seo'
import SkillCard from '@/components/SkillCard'
import ExperienceCard from '@/components/ExperienceCard'
import type { Metadata } from 'next'
import type { About, Skill, Experience } from '@/sanity/lib/types'

export const revalidate = 60 // ISR: revalidate every 60 seconds

export const metadata: Metadata = generateSEOMetadata({
  title: 'About Me | Frontend Developer',
  description: 'Learn more about my experience, skills, and professional journey in frontend development.',
})

export default async function AboutPage() {
  const [aboutData, skills, experiences] = await Promise.all([
    client.fetch<About | null>(ABOUT_QUERY),
    client.fetch<Skill[]>(SKILLS_QUERY),
    client.fetch<Experience[]>(EXPERIENCES_QUERY),
  ])

  return (
    <div className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">About Me</h1>
          {aboutData?.description ? (
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl break-words">
              {aboutData.description}
            </p>
          ) : (
            <p className="text-gray-500">About information not yet added. Check back soon!</p>
          )}

          {aboutData?.highlights && aboutData.highlights.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {aboutData.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Skills Section */}
        {skills.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Skills</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {skills.map((skill) => (
                <SkillCard
                  key={skill._id}
                  name={skill.name}
                  proficiency={skill.proficiency}
                  category={skill.category}
                />
              ))}
            </div>
          </section>
        )}

        {/* Experience Section */}
        {experiences.length > 0 && (
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <ExperienceCard
                  key={exp._id}
                  jobTitle={exp.jobTitle}
                  company={exp.company}
                  startDate={exp.startDate}
                  endDate={exp.endDate}
                  description={exp.description}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
