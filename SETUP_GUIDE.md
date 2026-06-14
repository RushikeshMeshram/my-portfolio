# Portfolio Setup Guide

## ✅ What's Already Built

Your modern portfolio is **fully functional** with:

- ✨ 7 complete Sanity schemas ready for content
- 📄 7 Next.js pages (home, about, projects, blog, contact + detail pages)
- 🎨 10+ reusable React components
- 🔍 SEO optimization on all pages
- ⚡ ISR (Incremental Static Regeneration) configured
- 🌙 Dark mode support built-in
- 📱 Fully responsive design
- 🖼️ Image optimization ready
- 💾 TypeScript for type safety

## 🚀 Quick Start

### 1. Local Development

```bash
# Start dev server
npm run dev

# Visit:
# Portfolio: http://localhost:3000
# Sanity Studio: http://localhost:3000/studio
```

### 2. Add Content in Sanity Studio

1. Go to http://localhost:3000/studio
2. Click "Site Configuration" to add your info
3. Add Hero section
4. Add About information
5. Add Skills, Experience, Projects, Blog posts

### 3. Deploy to Vercel

```bash
# Push to GitHub first
git add .
git commit -m "Initial portfolio setup"
git push origin main

# Then connect to Vercel:
# 1. Go to vercel.com
# 2. Import your GitHub repo
# 3. Add env variables
# 4. Deploy!
```

## 📋 Required Content Setup

Before going live, add these via Sanity Studio:

### Priority 1 (Must Have)
- [ ] Site Configuration (name, email, bio)
- [ ] Hero section headline
- [ ] At least 1 project
- [ ] Contact email

### Priority 2 (Nice to Have)
- [ ] About section
- [ ] Skills (3+)
- [ ] Work experience
- [ ] Blog post

### Priority 3 (Polish)
- [ ] Profile image
- [ ] Project images
- [ ] Social links
- [ ] Featured projects

## 🔧 Customization Tips

### Change Site Name
1. Edit Sanity Studio → Site Configuration
2. Add your name

### Add Social Links
1. Sanity Studio → Site Configuration
2. Add social media links array
3. Links appear in footer automatically

### Customize Hero Section
1. Sanity Studio → Hero Section
2. Edit headline, subheadline, CTA button
3. Changes live immediately

### Modify Colors
Edit `tailwind.config.ts` and search for colors to customize the blue theme.

### Change Logo
Replace text in Navigation with image or edit branding in `components/Navigation.tsx`

## 📱 Page Details

| Page | Data Source | Update Frequency |
|------|-------------|------------------|
| Home | Sanity (Hero + Projects) | Every 60s (ISR) |
| About | Sanity (About + Skills + Exp) | Every 60s (ISR) |
| Projects | Sanity (All Projects) | Real-time (Client) |
| Blog | Sanity (Posts) | Real-time (Client) |
| Contact | Sanity (siteConfig) | Real-time (Client) |

## 🌐 Going Live Checklist

- [ ] Add all content in Sanity Studio
- [ ] Customize site name, email, social links
- [ ] Add profile image
- [ ] Add at least 3 projects with images
- [ ] Test all pages on mobile
- [ ] Deploy to Vercel
- [ ] Set up custom domain (optional)
- [ ] Configure email for contact form (see below)
- [ ] Add Google Analytics (optional)

## 📧 Contact Form Setup

The contact form currently logs to console. To send emails:

### Option 1: Resend (Recommended)
```bash
npm install resend
```

Update `components/ContactForm.tsx`:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const email = await resend.emails.send({
    from: 'contact@yourdomain.com',
    to: process.env.CONTACT_EMAIL,
    subject: `New message from ${formData.name}`,
    text: formData.message,
  })
  // ...
}
```

### Option 2: SendGrid
- Create SendGrid account
- Get API key
- Use SendGrid Node.js client in contact handler

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [Tailwind Docs](https://tailwindcss.com)
- [Vercel Deploy](https://vercel.com)
- [Resend Email](https://resend.com)

## ❓ Common Questions

### Q: Can I add more pages?
A: Yes! Create new folders in `app/` with `page.tsx` files.

### Q: How do I update content?
A: All via Sanity Studio at `/studio`. Changes auto-sync to portfolio.

### Q: Can I change the design?
A: Absolutely! Modify component files and Tailwind classes.

### Q: How do I add images?
A: Upload in Sanity Studio when creating content. Images auto-optimize.

### Q: How do I add a custom domain?
A: In Vercel dashboard, add domain and follow DNS setup.

## 🎯 Next Steps

1. **Start Dev Server**: `npm run dev`
2. **Open Sanity Studio**: http://localhost:3000/studio
3. **Add Your Content**: Fill in all portfolio information
4. **Test Everything**: Click through all pages
5. **Deploy to Vercel**: Push to GitHub and connect to Vercel
6. **Monitor**: Check Vercel dashboard for analytics

## 📞 Need Help?

- Check PORTFOLIO_README.md for detailed documentation
- Review schema files in `sanity/schemaTypes/` 
- Look at component files for implementation examples
- Check Next.js docs for framework-specific questions

---

**Your portfolio is ready to go! Start adding content now.** 🚀
