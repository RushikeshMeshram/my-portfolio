'use client'

import { ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

export default function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  try {
    return <>{children}</>
  } catch (error) {
    console.error('Error:', error)
    return (
      fallback || (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We encountered an error. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    )
  }
}
