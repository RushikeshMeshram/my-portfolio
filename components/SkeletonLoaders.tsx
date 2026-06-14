export function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  )
}

export function CardSkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  )
}

export function GridSkeletonLoader({ count = 3 }: { count?: number }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeletonLoader key={i} />
      ))}
    </div>
  )
}

export function BlogGridSkeletonLoader({ count = 4 }: { count?: number }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeletonLoader key={i} />
      ))}
    </div>
  )
}
