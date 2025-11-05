# Backend Structure Document

This document outlines the backend architecture, hosting solutions, and infrastructure components for the **heavy-equipment-consulting-profile** project. It is written in everyday language to ensure clarity for technical and non-technical readers alike.

## 1. Backend Architecture

**Overall Design**
- Built on Next.js (App Router) which unifies frontend and backend in a single codebase.  
- Uses file-based routing: API routes live alongside your page components under `/app/api`.  
- Leverages React Server Components for data fetching on the server and React Client Components for interactive UI.

**Frameworks & Patterns**
- **Next.js** provides server-side rendering (SSR) and static site generation (SSG) out of the box.  
- **TypeScript** enforces type safety across the stack.  
- **Drizzle ORM** acts as a type-safe layer between Next.js and the database.  
- **NextAuth.js** ("Better Auth") handles authentication and session management.

**Scalability, Maintainability & Performance**
- **Scalability**: Serverless functions auto-scale on Vercel/Netlify, adding capacity as traffic grows.  
- **Maintainability**: Clear separation between API routes (`/app/api/*`), database schema (`/db`), and UI components (`/components`).  
- **Performance**: SSR/SSG ensure fast “first contentful paint” and excellent SEO. Incremental Static Regeneration (ISR) can be enabled for near-real-time updates without full rebuilds.

## 2. Database Management

**Technology Choice**
- **Type**: Relational (SQL).  
- **System**: PostgreSQL.  
- **ORM**: Drizzle ORM for type-safe queries and schema definitions.

**Data Lifecycle**
1. **Definition**: Tables and columns defined in TypeScript using Drizzle’s schema builder.  
2. **Storage**: Hosted on a managed PostgreSQL instance (e.g., Supabase, Heroku Postgres).  
3. **Access**: Next.js API routes use Drizzle queries to read and write data.  
4. **Best Practices**:  
   - Use environment variables for database credentials.  
   - Run migrations on deploy to keep schema in sync.  
   - Proper indexing on foreign keys and searchable fields (e.g., service titles).

## 3. Database Schema

Below is a human-readable summary followed by the SQL schema definition.

**Entity Overview**
- **About**: Holds the company description.  
- **Services**: Lists offered consulting and training services.  
- **Gallery**: Stores image references and captions.  
- **ContactMessages**: Records messages submitted via the contact form.  
- **Users**: Maintains admin user credentials.

**PostgreSQL Schema (SQL)**

```sql
-- About section
CREATE TABLE about (
  id SERIAL PRIMARY KEY,
  heading VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services offered
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Gallery images
CREATE TABLE gallery (
  id SERIAL PRIMARY KEY,
  image_url TEXT NOT NULL,
  caption VARCHAR(200),
  order_index INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact form submissions
CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admin users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(150) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```  

## 4. API Design and Endpoints

The backend exposes RESTful API routes under `/app/api`. Each route handles JSON input/output and is protected as needed.

**Content Routes**
- `GET /api/content/about`  
  Retrieves the company About section.
- `GET /api/content/services`  
  Returns a list of services.
- `GET /api/content/gallery`  
  Fetches gallery images.

**Contact Form Route**
- `POST /api/contact`  
  Accepts `{ name, email, message }`, stores it in the database, and can trigger an email via a service like Nodemailer or Resend.

**Authentication Routes** (via NextAuth.js)
- `POST /api/auth/[...nextauth]`  
  Handles sign-in, sign-out, and session callbacks.

**Admin CMS Routes** (protected)
- `POST /api/content/services`  
  Create a new service entry.  
- `PUT /api/content/services/:id`  
  Update an existing service.  
- `DELETE /api/content/services/:id`  
  Remove a service.
- Similar CRUD routes exist for `about` and `gallery` sections.

## 5. Hosting Solutions

**Primary Platform: Vercel**
- **Serverless Functions**: Automatically hosts Next.js API routes with zero configuration.  
- **CDN**: Global edge network for ultra-fast static assets and images.  
- **Auto-Scaling**: Dynamically scales functions based on demand.  
- **Cost-Effectiveness**: Generous free tier; pay-as-you-go for extra usage.

**Alternative / Containerized**
- **Docker**: Included `Dockerfile` for custom container builds.  
- **Platforms**: Can be deployed on AWS ECS, DigitalOcean App Platform, or Heroku using Docker images.

## 6. Infrastructure Components

**Load Balancing & Edge Delivery**
- Vercel’s edge network automatically balances and routes traffic globally.

**Caching Mechanisms**
- **ISR & Caching Headers**: Set `Cache-Control` headers for static JSON responses.  
- **Image Optimization**: `next/image` serves WebP and resized images from Vercel’s Image CDN.

**Content Delivery Network (CDN)**
- All static assets (CSS, JS, images) are served via Vercel’s global CDN for minimal latency.

**Database Backups & Replication**
- Managed PostgreSQL often includes automated daily backups and read-replicas (depending on provider).

## 7. Security Measures

**Authentication & Authorization**
- NextAuth.js with secure cookies and JWT sessions.  
- Role-based access: only `admin` users can access CMS routes.

**Data Encryption**
- **In Transit**: All traffic over HTTPS/TLS.  
- **At Rest**: Relational databases typically encrypt data on disk by default (managed service feature).

**API Protection**
- CSRF prevention via NextAuth’s built-in measures.  
- Input validation and sanitization on all POST/PUT routes.
- CORS policy allowing only the website’s domain.

**Regulatory Compliance**
- GDPR-friendly: explicit consent via contact form’s terms checkbox (if required).  
- Privacy policy endpoints can be served as static pages.

## 8. Monitoring and Maintenance

**Performance Monitoring**
- **Vercel Analytics**: Insights on page load times and function execution.  
- **Custom Logging**: Use a service like Sentry for error tracking in API routes and client code.

**Database Health**
- Monitor through provider dashboard (e.g., connection count, slow queries).  
- Automated backups and alerts on high CPU or storage usage.

**CI/CD & Deployment**
- **GitHub Actions**: Runs tests and schema migrations on every push.  
- **Preview Environments**: Vercel creates a preview URL for each pull request.

**Maintenance Strategy**
- Apply security patches by updating Next.js and dependencies quarterly.  
- Review logs and analytics monthly to catch anomalies early.  
- Schedule database migrations during off-peak hours.

## 9. Conclusion and Overall Backend Summary

The backend for **heavy-equipment-consulting-profile** is designed to be:
- **Scalable**: Serverless functions and managed databases grow with demand.  
- **Maintainable**: Clear folder structure and type-safe code reduce technical debt.  
- **Secure**: Industry-standard authentication, encryption, and data protection practices.  
- **Performant**: Edge CDN, SSR/SSG, and caching deliver fast page loads and excellent SEO.

Together, these components provide a solid foundation for a professional, content-driven company profile site. Admin users can easily update content via the CMS, and visitors benefit from a fast, reliable experience that ranks well in search engines.