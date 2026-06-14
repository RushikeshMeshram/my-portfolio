'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { SITE_CONFIG_QUERY } from '@/sanity/lib/queries'
import type { SiteConfig } from '@/sanity/lib/types'
import Link from 'next/link'

export default function Footer() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null)

  useEffect(() => {
    const fetchConfig = async () => {
      const config = await client.fetch<SiteConfig>(SITE_CONFIG_QUERY)
      setSiteConfig(config)
    }
    fetchConfig()
  }, [])

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400 break-words">{siteConfig?.bio || 'Frontend developer passionate about creating beautiful and functional web experiences.'}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {siteConfig?.socialLinks?.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition capitalize"
                >
                  {link.platform}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteConfig?.name || 'Portfolio'}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
