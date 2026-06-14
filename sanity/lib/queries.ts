import { groq } from 'next-sanity'

// Site Configuration
export const SITE_CONFIG_QUERY = groq`*[_type == "siteConfig"][0]{
  _id,
  name,
  title,
  bio,
  avatar,
  socialLinks,
  email,
}`

// Hero Section
export const HERO_QUERY = groq`*[_type == "hero"][0]{
  _id,
  headline,
  subheadline,
  ctaText,
  ctaLink,
  backgroundImage,
}`

// About Section
export const ABOUT_QUERY = groq`*[_type == "about"][0]{
  _id,
  description,
  profileImage,
  highlights,
}`

// Skills
export const SKILLS_QUERY = groq`*[_type == "skill"] | order(category asc, name asc){
  _id,
  name,
  category,
  proficiency,
}`

export const SKILLS_BY_CATEGORY_QUERY = groq`*[_type == "skill" && category == $category] | order(name asc){
  _id,
  name,
  category,
  proficiency,
}`

// Projects
export const PROJECTS_QUERY = groq`*[_type == "project"] | order(createdDate desc){
  _id,
  title,
  slug,
  shortIntro,
  description,
  images,
  technologies,
  projectLink,
  githubLink,
  featured,
  createdDate,
}`

export const FEATURED_PROJECTS_QUERY = groq`*[_type == "project" && featured == true] | order(createdDate desc)[0...3]{
  _id,
  title,
  slug,
  shortIntro,
  description,
  images,
  technologies,
  projectLink,
  githubLink,
  featured,
  createdDate,
}`

export const PROJECT_BY_SLUG_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  shortIntro,
  description,
  images,
  technologies,
  projectLink,
  githubLink,
  featured,
  createdDate,
}`

export const PROJECT_SLUGS_QUERY = groq`*[_type == "project"]{
  slug,
}`

// Experiences
export const EXPERIENCES_QUERY = groq`*[_type == "experience"] | order(startDate desc){
  _id,
  jobTitle,
  company,
  startDate,
  endDate,
  description,
  companyLogo,
}`

// Blog
export const BLOG_POSTS_QUERY = groq`*[_type == "blog"] | order(publishedDate desc){
  _id,
  title,
  slug,
  excerpt,
  content,
  featuredImage,
  category,
  publishedDate,
}`

export const BLOG_POST_BY_SLUG_QUERY = groq`*[_type == "blog" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  content,
  featuredImage,
  category,
  publishedDate,
}`

export const BLOG_SLUGS_QUERY = groq`*[_type == "blog"]{
  slug,
}`

export const BLOG_POSTS_BY_CATEGORY_QUERY = groq`*[_type == "blog" && category == $category] | order(publishedDate desc){
  _id,
  title,
  slug,
  excerpt,
  content,
  featuredImage,
  category,
  publishedDate,
}`

export const BLOG_CATEGORIES_QUERY = groq`*[_type == "blog"].category | unique()`

// Technologies
export const TECHNOLOGIES_QUERY = groq`*[_type == "project"].technologies[] | unique() | sort()`
