import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortIntro',
      title: 'Short Introduction',
      type: 'string',
      description: 'One-liner summary of the project',
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g., React, Next.js, TypeScript, Tailwind CSS',
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
      description: 'Live project URL',
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage',
    }),
    defineField({
      name: 'createdDate',
      title: 'Created Date',
      type: 'datetime',
    }),
  ],
})
