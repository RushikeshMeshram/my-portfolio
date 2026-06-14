# Modern Portfolio - Next.js + Sanity CMS

A beautiful, modern portfolio website built with **Next.js 16**, **React 19**, and **Sanity CMS**. Perfect for showcasing projects, experience, and blog posts.

## 🚀 Features

- ✨ **Modern Design** - Clean, responsive, and dark mode ready
- 📱 **Mobile Optimized** - Fully responsive across all devices
- 🎯 **SEO Friendly** - Built-in meta tags and Open Graph support
- 🖼️ **Image Optimization** - Fast image loading with Next.js Image
- 📝 **Portable Text** - Rich text editing with Sanity Portable Text
- 🔍 **CMS-Powered** - All content managed through Sanity Studio
- 🌙 **Dark Mode** - Built-in dark mode support
- ⚡ **ISR** - Incremental Static Regeneration for fast updates
- 🎨 **Tailwind CSS** - Beautiful styling with utility-first CSS
- 📊 **Analytics Ready** - Easy to integrate tracking

## 📋 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout with nav/footer
│   ├── page.tsx                # Home page with hero + featured projects
│   ├── about/
│   ├── projects/
│   ├── blog/
│   ├── contact/
│   └── studio/[[...tool]]/     # Sanity Studio
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ProjectCard.tsx
│   ├── BlogCard.tsx
│   ├── SkillCard.tsx
│   ├── ExperienceCard.tsx
│   ├── ContactForm.tsx
│   ├── SkeletonLoaders.tsx
│   └── ErrorBoundary.tsx
├── sanity/
│   ├── schemaTypes/            # All document type schemas
│   │   ├── siteConfig.ts
│   │   ├── hero.ts
│   │   ├── about.ts
│   │   ├── skill.ts
│   │   ├── project.ts
│   │   ├── experience.ts
│   │   └── blog.ts
│   ├── lib/
│   │   ├── client.ts           # Sanity client
│   │   ├── queries.ts          # All GROQ queries
│   │   ├── types.ts            # TypeScript interfaces
│   │   └── image.ts            # Image URL builder
│   ├── structure.ts
│   ├── env.ts
│   └── config.ts
├── lib/
│   └── seo.ts                  # SEO metadata helpers
└── package.json
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Styled Components
- **CMS**: Sanity 5.31.1
- **Database**: Sanity Content Lake
- **Deployment Ready**: Vercel optimized

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone and install dependencies**
   ```bash
   cd portfolio
   npm install
   ```

2. **Set up environment variables**
   
   Create `.env.local`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2026-06-13
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the app**
   - Portfolio: http://localhost:3000
   - Sanity Studio: http://localhost:3000/studio

## 🎨 Content Schema

### Document Types

1. **siteConfig** (singleton)
   - Your name, title, bio, avatar
   - Social links, email

2. **hero** (singleton)
   - Headline, subheadline
   - CTA text and link
   - Background image

3. **about** (singleton)
   - Description, profile image
   - Key highlights

4. **skill** (multiple)
   - Category, name
   - Proficiency level (1-5)

5. **project** (multiple)
   - Title, slug, intro, description
   - Images, technologies
   - Project link, GitHub link
   - Featured flag, creation date

6. **experience** (multiple)
   - Job title, company
   - Start/end dates
   - Description, company logo

7. **blog** (multiple)
   - Title, slug, excerpt
   - Rich text content (Portable Text)
   - Featured image
   - Category, publish date

## 📱 Pages & Routes

| Route | Purpose |
|-------|---------|
| `/` | Home - Hero section + featured projects |
| `/about` | About page with skills and experience |
| `/projects` | All projects with tech filtering |
| `/projects/[slug]` | Individual project detail |
| `/blog` | Blog posts with category filtering |
| `/blog/[slug]` | Individual blog post |
| `/contact` | Contact form |
| `/studio` | Sanity Studio CMS |

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
npm run build
npm start
```

### Environment Variables for Production

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-13
```

## 📝 Content Management

### Adding Content via Sanity Studio

1. Go to `/studio`
2. Create/edit documents for each type
3. Publish changes
4. Portfolio updates automatically (ISR)

### Content Updates Timeline

- **Home Page**: Revalidates every 60 seconds
- **About Page**: Revalidates every 60 seconds
- **Project Detail**: On-demand ISR when updated
- **Blog Pages**: Client-side fetching (real-time)

## 🎯 Features Explained

### Responsive Design
- Mobile-first approach
- Tailwind breakpoints (sm, md, lg)
- Touch-friendly interactions

### Dark Mode
- Built-in with `dark:` Tailwind classes
- System preference detection ready

### Image Optimization
- Sanity image URL builder
- Next.js Image component
- Automatic WebP conversion

### Error Handling
- Error boundaries for graceful failures
- Loading skeleton states
- User-friendly error messages

### Performance
- ISR for static pages
- Client-side rendering for real-time data
- Optimized images with WebP
- Code splitting with dynamic imports

## 🔧 Customization

### Styling

1. **Modify Tailwind colors** in `tailwind.config.ts`
2. **Update component styles** in component files
3. **Add custom CSS** in `globals.css`

### Adding New Pages

1. Create directory under `app/`
2. Add `page.tsx`
3. Fetch Sanity data if needed
4. Update Navigation links

### Adding New Document Types

1. Create schema in `sanity/schemaTypes/`
2. Add to `sanity/schemaTypes/index.ts`
3. Create GROQ query in `sanity/lib/queries.ts`
4. Update pages to use new data

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 🐛 Troubleshooting

### Images not loading?
- Check Sanity CORS settings
- Ensure image assets are properly uploaded
- Verify image URL builder configuration

### Data not updating?
- Check Sanity client configuration
- Verify GROQ query syntax
- Check browser console for errors
- Revalidate ISR if needed

### Build errors?
- Clear `.next` directory: `rm -rf .next`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run build`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## 📧 Support

For issues or questions, check the documentation or create an issue in your repository.

---

**Built with ❤️ using Next.js and Sanity**
