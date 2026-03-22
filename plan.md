# Aaron Wood Portfolio Site - Build Plan

## Overview
Building a clean, modern, professional portfolio site hosted on Vercel with no backend required. The site will be a single-page application with smooth navigation and optimized performance.

### Guiding Priorities
1. **Simplicity**: Keep architecture and dependencies minimal; avoid unnecessary libraries.
2. **Professionalism**: Strong typography, spacing discipline, and consistent visual hierarchy.
3. **Performance**: Lightweight assets, low JavaScript overhead, and strong Core Web Vitals.
4. **SEO**: Semantic HTML, complete metadata, social previews, and crawlability.
5. **Beautiful UI**: Clean but distinctive visuals with intentional color, contrast, and motion.

---

## 🎯 Tech Stack Recommendation

### Primary Stack: **Vite + React + Regular CSS**
**Why this stack?**
- **Fast Development**: Vite offers near-instant dev server startup and fast HMR
- **Perfect for Static Portfolio**: No backend needed, easy static deployment to Vercel
- **Clean Frontend Architecture**: React components keep sections modular and maintainable
- **Styling Control**: Regular CSS gives full control over a custom design system
- **Professional Simplicity**: Minimal tooling overhead while still modern and scalable
- **Deployment**: Works seamlessly with Vercel for automatic deployments

### Complementary Tools
- **TypeScript** (optional but recommended): Type safety for better developer experience
- **React Icons**: Icon library for social links and visual elements
- **react-helmet-async** (optional): Manage page metadata/SEO in React
- **Vercel**: Hosting (automatic deployments from git)

Dependency principle: Start with React + CSS only, then add optional libraries only when they clearly improve quality.

---

## 📁 Project Structure (after initialization)

```
aaron-wood.dev/
├── vite.config.js               # Vite configuration
├── tsconfig.json                # TypeScript configuration
├── package.json
├── .gitignore
├── public/                      # Static assets
│   ├── headshot.jpg            # Your profile photo
│   ├── resume.pdf              # Resume for download
│   └── ...                      # Other static files
├── src/
│   ├── main.tsx                 # App bootstrap
│   ├── App.tsx                  # Main portfolio page composition
│   ├── components/              # Reusable components
│   │   ├── Navbar.tsx           # Sticky navigation bar
│   │   ├── Hero.tsx             # Hero section
│   │   ├── About.tsx            # About me section
│   │   ├── Skills.tsx           # Skills/technologies section
│   │   ├── Projects.tsx         # Projects showcase
│   │   ├── ProjectCard.tsx      # Individual project card
│   │   └── Contact.tsx          # Contact section
│   ├── data/                    # Static content data
│   │   ├── projects.ts          # Project data (name, description, link, image)
│   │   ├── skills.ts            # Skills/tech stack data
│   │   └── social.ts            # Social links data
│   └── styles/
│       ├── globals.css          # Global styles, resets, typography
│       ├── variables.css        # Theme tokens (colors, spacing, shadows)
│       ├── sections.css         # Section-level styling
│       └── animations.css       # Any custom animations
```

---

## 🎨 Design System & Styling Approach

### Color Palette & Typography
- **Primary Color**: One core brand tone (recommended: soft blue, dark blue, or navy)
- **Accent Color**: One interaction color for buttons, active states, links, and highlights
- **Background Colors**: Two subtle background tones that alternate between sections for structure
- **Text Color**: Modern near-charcoal tone (not pure black) for better readability and softer contrast
- **Dark Mode**: Built-in dark theme using CSS variables and a toggle in the navbar
- **Typography**: 
  - Headings: Bold, professional serif or modern sans-serif (e.g., Inter, Poppins)
  - Body: Readable sans-serif with proper line-height

### Design Principles
- **Minimalist**: Only what's necessary; maximum white space
- **Consistent Spacing**: Use a 4px or 8px grid system throughout
- **Intentional Motion**: Use subtle, meaningful transitions; avoid animation noise
- **Responsive First**: Mobile-first design, scales beautifully to desktop
- **Accessibility**: Proper contrast ratios, semantic HTML, focus states
- **Section Rhythm**: Alternate background tones to create clean visual separation
- **Professional UI Language**: Card depth, border radii, and shadows should be subtle and consistent

### Theme Token Baseline
- **Light Mode Tokens**:
  - Primary: soft blue, dark blue, or navy
  - Accent: one interaction color for CTAs and active states
  - Background A / B: two near-neutral tones for section alternation
  - Text: near-charcoal (not pure black)
- **Dark Mode Tokens**:
  - Keep the same brand identity while increasing contrast and reducing glare
  - Ensure links, buttons, and focus states remain clearly distinguishable

---

## 📊 Development Phases

### **Phase 1: Foundation & Setup** (1-2 hours)
- [ ] Initialize Vite + React project (TypeScript optional but recommended)
- [ ] Set up project structure
- [ ] Set up global CSS architecture (`variables.css`, `globals.css`, section styles)
- [ ] Define color tokens for light and dark mode using CSS custom properties
- [ ] Add theme toggle approach (class or data attribute) and local persistence
- [ ] Configure basic SEO metadata setup (title/description, Open Graph)
- [ ] Set up fonts (Google Fonts via standard import or self-hosted files)
- [ ] Deploy skeleton to Vercel (verify CI/CD pipeline works)

### **Phase 2: Navigation & Hero Section** (2-3 hours)
- [ ] Build sticky Navbar component with smooth scroll behavior
- [ ] Implement smooth anchor links to page sections
- [ ] Ensure navbar includes clear active/hover/focus states and dark mode toggle
- [ ] Build Hero section (full vh height, centered content)
  - Add headshot image (optimized asset sizing and responsive CSS)
  - Add title, role, tagline
  - Create buttons/links: GitHub, Resume Download, Email
  - Add short bio/statement placeholder
- [ ] Ensure hero composition feels balanced on both mobile and desktop
- [ ] Test responsive behavior on mobile/tablet/desktop
- [ ] Deploy to Vercel

### **Phase 3: Content Sections Structure** (2-3 hours)
- [ ] Build About Me section
  - Clean layout with readable line length and strong section heading hierarchy
  - Optional: add a small portrait/visual element
- [ ] Build Skills/Technologies section
  - Category-based layout (Frontend, Backend, Tools, etc.) OR icon grid
  - Use data file for easy updates
- [ ] Build Projects section skeleton
  - Create ProjectCard component
  - Create Projects container component
  - Integrate project data
  - Ensure cards have consistent heights and clear CTA links
- [ ] Build Contact section
  - Email link
  - Social media icons/links (GitHub, LinkedIn, Twitter, etc.)
  - Optional: contact form (would need backend service like Formspree)
- [ ] Deploy to Vercel

### **Phase 4: Styling & Polish** (2-3 hours)
- [ ] Refine visual hierarchy and spacing
- [ ] Apply finalized color system:
  - One primary color
  - One accent color for interactions
  - Two alternating background colors for section separation
  - Near-charcoal text color for modern readability
- [ ] Implement and polish dark mode styling across all sections/components
- [ ] Add subtle animations/transitions using CSS
  - Fade/slide reveal only where it improves clarity
  - Hover/focus effects on cards and links
  - Smooth scroll behavior
- [ ] Polish visual details (button states, border radii, shadow consistency, section spacing rhythm)
- [ ] Refine mobile responsive design
- [ ] Test on various devices and browsers
- [ ] Deploy to Vercel

### **Phase 5: Performance & SEO Optimization** (1-2 hours)
- [ ] Optimize image assets (compress images, serve modern formats, set responsive dimensions)
- [ ] Remove unused CSS/JS and verify lean production bundle
- [ ] Generate and verify meta tags (Open Graph, Twitter, etc.)
- [ ] Create/update robots.txt and sitemap.xml (manual/static generation)
- [ ] Add semantic landmarks and heading hierarchy validation
- [ ] Add Google Analytics or similar tracking (optional)
- [ ] Test with Lighthouse CI for performance metrics
- [ ] Validate Core Web Vitals targets in production
- [ ] Verify mobile SEO (Google Mobile-Friendly Test)
- [ ] Deploy to Vercel

### **Phase 6: Content Population & Final Testing** (1-2 hours)
- [ ] Add your headshot and ensure proper cropping/quality
- [ ] Upload resume PDF to public folder
- [ ] Populate all text content (about, bio, projects, skills)
- [ ] Add accurate project links and descriptions
- [ ] Add all social media links
- [ ] Full end-to-end testing:
  - All links work (internal anchors, external URLs, resume download)
  - Email link works (mailto:)
  - Responsive design verified
  - No console errors
- [ ] Deploy final version to Vercel

---

## 🔧 Key Technical Decisions

### Component Structure
- **React Functional Components**: Build each section as focused, reusable components
- **Data Management**: Static data in TypeScript files (projects.ts, skills.ts), no database needed

### Styling
- **Regular CSS + CSS Variables**: Centralized theme tokens in `variables.css`
- **Section-Based CSS Files**: Keep styles organized by component/section responsibility
- **Dark Mode Strategy**: Toggle a root theme class or data attribute and swap CSS variables
- **Simplicity Rule**: Prefer straightforward CSS over abstractions unless repetition becomes a real maintenance issue

### Image Optimization
- **Responsive Image Tags**: Use modern formats (WebP/AVIF where possible)
- **Manual Optimization**: Pre-compress assets and use `loading="lazy"` where appropriate
- **Responsive Sizing**: Use CSS and image sizing attributes to avoid layout shifts
- **LCP Priority**: Hero headshot should be optimized for fast Largest Contentful Paint

### Scroll Behavior
- **Smooth Scrolling**: CSS `scroll-behavior: smooth` in globals
- **Anchor Links**: Use IDs on sections and links to anchor IDs
- **Sticky Navbar**: Use CSS `position: sticky` with proper `z-index` management

### SEO & Metadata
- **React Metadata Management**: Use static `index.html` metadata and optionally `react-helmet-async`
- **Open Graph**: Include `og:image`, `og:title`, `og:description` for social sharing
- **Structured Data**: Optional: JSON-LD for rich snippets

### Performance Budgets
- **JavaScript Budget**: Keep shipped JS minimal; avoid heavy animation/UI libraries unless necessary
- **Image Budget**: Compress all large images before commit
- **UX Budget**: Preserve smooth scrolling and interactions on mid-range mobile devices

### SEO Checklist
- One clear `h1` in hero; descending heading hierarchy throughout
- Descriptive title and meta description aligned to portfolio positioning
- Open Graph and Twitter metadata for link previews
- Valid sitemap and robots file
- Meaningful link text for project and contact actions

---

## 📋 Content Checklist (Before Phase 6)

Prepare this content in advance:
- [ ] Professional headshot (high resolution, professional background)
- [ ] Resume PDF
- [ ] Bio/about me text (2-3 paragraphs)
- [ ] About me section content (how you got into tech, philosophy, etc.)
- [ ] Skills list (categorized by frontend, backend, tools, etc.)
- [ ] 3 Project cards with:
  - Project title
  - Brief description (2-3 sentences)
  - Technologies used
  - Live link and/or GitHub repo link
  - Project image/screenshot (optional but recommended)
- [ ] Social links:
  - GitHub URL
  - LinkedIn URL (if applicable)
  - Twitter/X URL (if applicable)
  - Email address

---

## 🚀 Deployment Strategy

### Vercel Configuration
- **Automatic Deployments**: Push to main branch → automatic deployment
- **Preview Deployments**: Each PR gets a preview URL
- **Custom Domain**: Point aaron-wood.dev domain DNS to Vercel
- **Environment Variables**: None needed initially (all static content)

### Domain Setup
- Domain registrar CNAME/nameserver records → Vercel
- Automatic HTTPS certification via Vercel

### Monitoring
- Vercel Analytics: Monitor site performance in production
- Vercel Error Tracking: Catch and track any runtime errors

---

## 🎯 Success Criteria

✅ **Performance**
- Lighthouse score: 90+ on all metrics
- Page load time: < 1 second on 3G
- First Contentful Paint: < 1 second
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Interaction to Next Paint (INP): < 200ms

✅ **Design**
- Clean, minimal aesthetic
- Consistent spacing and typography
- Cohesive light and dark mode experience
- Color system follows: one primary, one accent, two backgrounds, modern text tone
- Fully responsive (tested on iPhone, iPad, desktop)
- Smooth animations and transitions
- Visual polish feels intentional, not generic

✅ **Functionality**
- All links work correctly
- Resume download works
- Email link opens default mail client
- Navbar scroll behavior smooth and sticky

✅ **SEO**
- Meta tags properly configured
- Open Graph tags for social sharing
- Mobile-friendly verified
- Semantic structure passes manual accessibility/SEO inspection

---

## 📈 Future Enhancements (Post-Launch)

Not in initial build, but good to consider:
- Blog section (MDX or markdown-based content with Vite plugin ecosystem)
- Contact form with email delivery (Formspree, SendGrid, etc.)
- Analytics dashboard
- Expanded theme customization beyond light/dark (optional)
- Search functionality (if blog added)
- Testimonials or case studies section
- Lightweight serverless function for contact form submissions (only if needed)

---

## 💡 Why This Approach?

1. **Zero Backend**: Fully static site, no servers to manage
2. **Fast**: Vite build output served via Vercel CDN, minimal JavaScript overhead
3. **Maintainable**: Clean component structure and plain CSS theme system
4. **Scalable**: Easy to add features later (blog, contact form, etc.)
5. **Professional**: Modern tech stack showcases your skills to potential employers
6. **SEO**: Strong metadata and structured content with React/Vite setup
7. **Cost**: Free tier on Vercel for hobby projects

---

## ⏱️ Estimated Total Time
- **Phase 1**: 1-2 hours
- **Phase 2**: 2-3 hours
- **Phase 3**: 2-3 hours
- **Phase 4**: 2-3 hours
- **Phase 5**: 1-2 hours
- **Phase 6**: 1-2 hours
- **Total**: 10-15 hours for a polished, professional portfolio

(Actual time depends on content preparation and design finesse desired)

---
