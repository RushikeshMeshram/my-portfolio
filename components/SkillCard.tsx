'use client'

interface SkillCardProps {
  name: string
  proficiency: number
  category: string
}

export default function SkillCard({ name, proficiency, category }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 min-w-0">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate">{name}</h3>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{proficiency}/5</span>
      </div>

      {/* Category */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">{category}</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-500 ease-out"
          style={{ width: `${(proficiency / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

