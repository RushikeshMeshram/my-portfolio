import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rushikesh Meshram | Portfolio ',
  description: 'Modern portfolio of a frontend developer with 4+ years of experience in React, Next.js, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col min-h-screen overflow-x-hidden">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
