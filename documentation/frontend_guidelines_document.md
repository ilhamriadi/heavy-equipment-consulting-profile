# Frontend Guideline Document

This document provides a clear overview of the frontend setup for the **heavy-equipment-consulting-profile** project. It covers the architecture, design principles, styling, component organization, state management, routing, performance tips, testing approaches, and a final summary.

## 1. Frontend Architecture

**Framework & Language**  
- Next.js (App Router) with built-in Server-Side Rendering (SSR) & Static Site Generation (SSG)  
- TypeScript for type safety and fewer runtime errors

**UI Libraries**  
- Tailwind CSS (utility-first styling)  
- shadcn/ui (pre-built, accessible React components)

**Authentication & Data**  
- “Better Auth” (e.g., NextAuth.js) for secure admin login  
- API Routes in Next.js for custom endpoints  
- Drizzle ORM + PostgreSQL for type-safe data storage and retrieval

**Deployment & DevOps**  
- Docker for containerized development  
- Optimized deployment targets: Vercel or Netlify

How this supports scalability, maintainability, performance:  
- File-based routing and SSR scales with more pages (e.g., admin panel)  
- TypeScript and Drizzle ORM enforce clear contracts between front and back ends  
- Tailwind’s atomic classes reduce CSS bloat and speed up styling  
- Vercel’s global CDN and Next.js image optimizations boost page load speeds

## 2. Design Principles

1. **Usability**  
   - Clear navigation, consistent UI patterns, obvious calls to action  
2. **Accessibility (a11y)**  
   - Keyboard-navigable components, proper ARIA labels, semantic HTML  
3. **Responsiveness**  
   - Mobile-first breakpoints, fluid grids, touch-friendly buttons  
4. **Consistency**  
   - Shared color palette, typography scale, spacing system  
5. **Performance-First**  
   - Minimal load times, optimized images, reduced JavaScript payloads

These principles guide every section, ensuring the site works for all users on any device.

## 3. Styling and Theming

**Approach**: Tailwind CSS (no separate preprocessor), augmented by CSS variables for theming.  
**Methodology**: Utility-first — classes reflect what they do (e.g., `px-4`, `bg-primary`).

**Visual Style**:  
- Modern flat design with subtle glassmorphism accents on cards and buttons  
- Clean, minimal layouts that highlight content and imagery

**Color Palette**  
- Primary Blue: #1E3A8A  
- Accent Orange: #F97316  
- Neutral Gray (light): #F3F4F6  
- Neutral Gray (dark): #374151  
- Glass White (semi-transparent): rgba(255,255,255,0.2)

**Theming**  
- Defined in `:root` CSS variables (e.g., `--color-primary`, `--bg-glass`)  
- Toggle light/dark mode with a React Context that switches classes on `<html>`

**Typography**  
- Font Family: Inter (system fallback: sans-serif)  
- Headings: bold, 2–3 size scales above body text  
- Body: regular weight, line height ≥1.6 for readability

## 4. Component Structure

**Directory Layout**  
- `/app` — Next.js App Router files and layouts  
- `/components`  
  - `sections/` — page sections like `AboutSection.tsx`, `ServicesSection.tsx`  
  - `ui/` — reusable UI bits: `Button.tsx`, `Card.tsx`, `WhatsAppButton.tsx`

**Guidelines**  
- One component per file, default export  
- Props should be strongly typed with TypeScript interfaces  
- Keep components focused: a section comp or a single UI element  
- Reuse common UI components to avoid duplication  

Benefits of component-based architecture:  
- Easier to test, update, and maintain  
- Clear separation of concerns  
- Improved reusability across pages and future features (e.g., blog)

## 5. State Management

**Local State**  
- React `useState` and `useEffect` for simple toggles, form inputs, and fetch calls

**Global State**  
- React Context for cross-app concerns (theme, auth status)  
- No heavy library required; the app’s scale doesn’t demand Redux

**Data Fetching**  
- Server Components fetch fresh data during SSR/SSG  
- Client Components use `fetch` or custom hooks (e.g., `useSWR`) for on-page updates

## 6. Routing and Navigation

**File-Based Routing**  
- `/app/page.tsx` — main landing page  
- `/app/admin/page.tsx` — admin login/dashboard (protected by auth middleware)

**Linking & Navigation**  
- Next.js `<Link>` for internal nav (prefetching enabled)  
- Nav bar or scroll-spy menu for single-page sections  

**Dynamic Routes**  
- Future-proofed: adding `/app/blog/[slug]/page.tsx` requires no extra router setup

## 7. Performance Optimization

1. **SSR/SSG** — deliver pre-rendered HTML for bots and users  
2. **Image Optimization** — Next.js `<Image>` component auto-resizes & lazy-loads  
3. **Code Splitting** — dynamic `import()` for non-critical scripts and heavy components  
4. **Lazy Loading** — React `lazy()` & `Suspense` for offscreen sections  
5. **Asset Optimization** — SVG icons, compressed PNG/JPEG via build tools  
6. **Caching & CDN** — Vercel’s edge network and HTTP cache headers

These steps keep load times under 2s on mid-range connections, improving user engagement and SEO.

## 8. Testing and Quality Assurance

**Unit Tests**  
- Jest + React Testing Library for isolated component tests

**Integration Tests**  
- Combine multiple components or API routes in Jest; mock Drizzle ORM calls

**End-to-End Tests**  
- Cypress or Playwright scripts to cover user flows: landing, contact form, theme toggle, admin login

**Linting & Formatting**  
- ESLint with TypeScript rules  
- Prettier for consistent code style  
- Husky pre-commit hooks to run `lint-staged`

## 9. Conclusion and Overall Frontend Summary

This frontend setup uses **Next.js + TypeScript** to deliver a fast, SEO-friendly single-page company profile. **Tailwind CSS + shadcn/ui** provide a modern, accessible design system. Components are organized for clarity and reuse, while React hooks and Context handle state simply and effectively. File-based routing and SSR/SSG keep pages performant and extendable. Testing suites ensure reliability, and a clear styling guide guarantees consistency.

Together, these guidelines support the project’s goals: an attractive, CMS-backed, SEO-optimized site that’s easy to maintain and scale as the business grows.