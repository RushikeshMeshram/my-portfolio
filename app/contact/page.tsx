import { client } from '@/sanity/lib/client'
import { SITE_CONFIG_QUERY } from '@/sanity/lib/queries'
import ContactForm from '@/components/ContactForm'
import type { SiteConfig } from '@/sanity/lib/types'

export default async function Contact() {
  const siteConfig = await client.fetch<SiteConfig>(SITE_CONFIG_QUERY)

  return (
    <div className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Get In Touch
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-12">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <ContactForm />

        {/* Alternative Contact Methods */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Other Ways to Connect
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            {siteConfig?.email && (
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline break-all">
                  {siteConfig.email}
                </a>
              </div>
            )}
            {siteConfig?.socialLinks && siteConfig.socialLinks.length > 0 && (
              siteConfig.socialLinks.slice(0, 2).map((link) => (
                <div key={link.platform}>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 capitalize">
                    {link.platform}
                  </h3>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Visit Profile
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
