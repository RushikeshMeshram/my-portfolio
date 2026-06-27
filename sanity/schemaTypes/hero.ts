import {defineField, defineType} from 'sanity'
import blockContent from './blockContent'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'e.g., "View My Work" or "Get In Touch"',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
      description: 'e.g., /projects or /contact',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})


