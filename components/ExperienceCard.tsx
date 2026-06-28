"use client";

import { PortableText } from "@portabletext/react";
import { RenderComponents as components } from "@/lib/renderBlock";
interface ExperienceCardProps {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export default function ExperienceCard({
  jobTitle,
  company,
  startDate,
  endDate,
  description,
}: ExperienceCardProps) {
  return (
    <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 pb-6 sm:pb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white wrap-break-word">
        {jobTitle}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 font-medium wrap-break-word">
        {company}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-500">
        {new Date(startDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        })}{" "}
        -{" "}
        {endDate
          ? new Date(endDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })
          : "Present"}
      </p>
      {description && (
        <div className="text-gray-600 dark:text-gray-300 mt-3 wrap-break-word">
          <PortableText value={description} components={components} />
        </div>
      )}
    </div>
  );
}
