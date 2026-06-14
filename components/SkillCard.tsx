'use client'

interface SkillCardProps {
  name: string
  proficiency: number
  category: string
}

export default function SkillCard({ name, proficiency, category }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow min-w-0">
      <div className="flex justify-between items-start gap-2 mb-2">
        <h3 className="font-semibold text-gray-900 dark:text-white break-words min-w-0">{name}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400 shrink-0">{proficiency}/5</span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{category}</p>
      {/* Proficiency Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${(proficiency / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}
