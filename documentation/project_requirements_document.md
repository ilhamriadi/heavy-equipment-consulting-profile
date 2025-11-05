# Project Requirements Document

## 1. Project Overview
This project is a single-page, CMS-powered company profile website for a heavy equipment consulting and training business. It will showcase the company’s About, Services, Gallery, and Contact sections with a modern, interactive design. Administrators can securely log in to update text and images without touching any code.

The site is built for strong SEO performance, fast load times, and a professional look that matches the heavy equipment industry’s brand. Success is measured by: 1) ability to rank on page one of Google for target keywords, 2) non-technical admin can update content easily, and 3) visitors experience sub-2 second page loads on desktop and mobile.

## 2. In-Scope vs. Out-of-Scope

**In-Scope (v1):**
- Single-page public site with the following sections: Home, About, Services, Gallery, Contact.
- Secure admin login and dashboard for content updates (simple one-user flow).
- API routes to read/write content from PostgreSQL via Drizzle ORM.
- Prebuilt UI components (cards, grids, toggles) styled with Tailwind CSS and shadcn/ui.
- Light/dark theme toggle.
- Next.js server-side rendering (SSR) for SEO and static site generation (SSG) for content that doesn’t change often.
- Contact form with email notifications (via Resend or Nodemailer).
- WhatsApp contact button linking to a preset phone number.
- Basic sitemap and JSON-LD schema for SEO.

**Out-of-Scope (v1):**
- Public user registration or multi-role access beyond a single admin.
- Blog, news feed, or extensive CMS features (reserved for future phases).
- E-commerce, payment processing, or subscription handling.
- Advanced analytics integrations (e.g., Google Tag Manager beyond basic tracking).
- Third-party headless CMS platforms (Sanity, Contentful) are optional future enhancements.

## 3. User Flow

A visitor lands on the homepage (/) and sees a hero banner with company name and tagline. Scrolling down, they pass through the About section with a brief company history, the Services section with interactive cards describing consulting and training offerings, and the Gallery showing project photos in a responsive grid. At the bottom, they find a Contact form and a WhatsApp button for quick inquiries. All content is server-rendered to ensure search engines index it fully.

An administrator visits the hidden `/admin` route and logs in using a secure username/password. They arrive at a simple dashboard showing editable fields for each section. The admin edits text, uploads images, and toggles the theme example. Hitting “Save” sends a POST request to the Next.js API, updating the PostgreSQL database via Drizzle ORM. The admin then previews changes instantly on the live site.

## 4. Core Features
- **Authentication**: Single admin login with NextAuth.js (or similar) to secure the CMS.
- **Content API**: Next.js API Routes handling GET and POST for About, Services, Gallery, and Contact data.
- **Database Integration**: Drizzle ORM + PostgreSQL schema for storing structured content and image URLs.
- **Dynamic UI Components**: Reusable cards, grids, forms, and buttons built with Tailwind CSS and shadcn/ui.
- **Theme Toggle**: Light/dark mode stored in local storage and CSS variables.
- **Contact Form**: Frontend form + backend email handler using Resend or Nodemailer.
- **WhatsApp Link**: Persistent floating button linking to a predefined WhatsApp number.
- **SEO Enhancements**: SSR/SSG pages, metadata via Next.js Metadata API, JSON-LD for LocalBusiness and Service.
- **Deployment Pipeline**: Dockerfile, Vercel/Netlify configuration for CI/CD and performance optimization.

## 5. Tech Stack & Tools

**Frontend & Styling**
- Next.js (App Router) with React
- TypeScript for type safety
- Tailwind CSS + shadcn/ui for UI components

**Backend & Data**
- Next.js API Routes
- Drizzle ORM for database queries
- PostgreSQL as the relational database
- NextAuth.js (or equivalent) for authentication

**DevOps & Deployment**
- Docker for containerization
- Vercel or Netlify for hosting
- GitHub Actions (optional) for CI/CD

**Utilities & Libraries**
- next/image for optimized image loading
- Nodemailer or Resend for email delivery
- JSON-LD for structured data

## 6. Non-Functional Requirements
- **Performance**: Time to first byte (TTFB) < 200 ms; Largest Contentful Paint (LCP) < 2.5 s on 3G.
- **SEO**: All sections server-rendered; valid XML sitemap; structured data present.
- **Accessibility**: WCAG 2.1 AA standards—keyboard navigation, alt text on images, proper ARIA labels.
- **Security**: OWASP Top 10 awareness; HTTPS enforced; rate limiting on login and contact endpoints.
- **Maintainability**: TypeScript for compile-time checks; clear folder structure; documented API schema.

## 7. Constraints & Assumptions
- CMS admin is a single trusted user—no multi-tenant or role-based access required.
- PostgreSQL instance is available and accessible from deployment environment.
- Next.js App Router is supported by chosen hosting (Vercel/Netlify).
- Image assets are stored using a public CDN or the same server (bandwidth considerations apply).
- Admin updates are low-frequency; real-time collaboration is not needed.

## 8. Known Issues & Potential Pitfalls
- **Large Image Files**: May slow down page load. Mitigate with next/image optimization and lazy loading.
- **API Rate Limits**: If using third-party email services—implement retry logic and backoff.
- **Cache Invalidation**: After admin updates, ensure SSG pages are invalidated or use On-Demand ISR.
- **Authentication Edge Cases**: Secure token storage and session expiration need careful handling.
- **SEO Overhead**: Too many custom components could bloat HTML. Audit critical CSS and prune unused styles.

---

This document serves as the definitive reference for building, configuring, and deploying the heavy-equipment consulting profile website. All technical design and future sub-documents must follow these requirements without ambiguity.