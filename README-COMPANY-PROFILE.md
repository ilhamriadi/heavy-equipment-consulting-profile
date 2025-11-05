# HeavyEquip Pro - Company Profile Website

A modern, responsive company profile website for HeavyEquip Pro - a heavy equipment consulting and training company in Indonesia.

## 🚀 Features

### ✅ Completed Features

1. **Single-Page Company Profile Website**
   - **Home Section**: Hero area with company branding, statistics, and CTA buttons
   - **About Section**: Company story, mission, vision, values, and achievements
   - **Services Section**: Comprehensive service offerings with categories and features
   - **Gallery Section**: Project portfolio with filtering functionality
   - **Contact Section**: Contact form, office locations, and WhatsApp integration

2. **Modern UI/UX Design**
   - Responsive design with Tailwind CSS
   - Dark mode support
   - Smooth animations and transitions
   - Professional color scheme (orange/amber theme)
   - Mobile-friendly navigation

3. **WhatsApp Integration**
   - Floating WhatsApp button for easy contact
   - Direct WhatsApp chat functionality
   - No API required - uses WhatsApp Web link

4. **SEO Optimization**
   - Complete metadata setup (title, description, keywords)
   - Open Graph tags for social sharing
   - Twitter Card support
   - JSON-LD structured data for LocalBusiness
   - XML sitemap
   - robots.txt configuration

5. **Content Management System (CMS)**
   - **Dashboard**: Overview with stats and quick actions
   - **Services Management**: Add, edit, delete services
   - **Content Management**: Update hero, about, contact info
   - **Contact Submissions**: View and manage contact form submissions
   - **Gallery Management**: Upload and organize project images

6. **Database Schema**
   - PostgreSQL with Drizzle ORM
   - Comprehensive schema for all content types
   - Type-safe database operations
   - Seed data for initial setup

7. **API Endpoints**
   - RESTful API for content management
   - Contact form submission handling
   - Services and gallery data retrieval
   - Input validation with Zod

## 🏗️ Technical Stack

- **Frontend**: Next.js 15.5.0 with App Router
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL with Drizzle ORM
- **Icons**: Lucide React
- **Authentication**: Better Auth (integrated)
- **Deployment**: Docker ready

## 📁 Project Structure

```
├── app/
│   ├── api/                    # API routes
│   │   ├── services/          # Services CRUD
│   │   ├── contact/           # Contact form
│   │   └── gallery/           # Gallery items
│   ├── dashboard/             # CMS admin interface
│   │   ├── page.tsx          # Dashboard overview
│   │   ├── services/         # Services management
│   │   └── content/          # Content management
│   ├── components/
│   │   ├── sections/         # Page sections
│   │   │   ├── HomeSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/               # shadcn/ui components
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   └── robots.txt
├── components/
├── db/
│   ├── schema/                # Database schemas
│   │   ├── auth.ts
│   │   ├── content.ts
│   │   └── index.ts
│   ├── index.ts
│   └── seed.ts               # Database seeding
├── public/
│   ├── logo.svg
│   └── robots.txt
└── scripts/
    └── setup-db.ts           # Database setup script
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (warning: some packages require Node.js 20+)
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd heavy-equipment-consulting-profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Configure your database URL and other environment variables.

4. **Set up the database**
   ```bash
   npm run db:up          # Start PostgreSQL (if using Docker)
   npm run db:setup       # Run migrations and seed data
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📚 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run build:turbo` - Build with Turbopack
- `npm run start` - Start production server
- `npm run db:setup` - Set up database (migrations + seeding)
- `npm run db:seed` - Run database seeding only
- `npm run db:studio` - Open Drizzle Studio
- `npm run db:up` - Start PostgreSQL with Docker
- `npm run db:down` - Stop PostgreSQL

## 🎨 Content Management

### Accessing the CMS

1. Navigate to `/dashboard` in your browser
2. Sign in with your credentials (Better Auth integration)
3. Manage your website content through the intuitive dashboard

### What You Can Manage

- **Services**: Add/edit service offerings, pricing, and descriptions
- **Content**: Update hero section, about us, contact information
- **Gallery**: Upload project images and organize them
- **SEO**: Modify meta titles, descriptions, and keywords
- **Contact Messages**: View and respond to customer inquiries

## 🌐 SEO Features

The website is built with SEO best practices:

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Meta Tags**: Complete title, description, and keyword optimization
- **Structured Data**: JSON-LD for LocalBusiness schema
- **Social Sharing**: Open Graph and Twitter Card tags
- **Sitemap**: Automatic XML sitemap generation
- **Performance**: Optimized images and fast loading

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive layouts for tablets
- **Desktop**: Enhanced experience for larger screens
- **Touch Interactions**: Touch-friendly buttons and navigation

## 🔧 Customization

### Branding

- Update company name in `app/layout.tsx`
- Replace logo in `public/logo.svg`
- Customize colors in Tailwind configuration
- Update contact information in CMS

### Adding New Sections

1. Create new section component in `components/sections/`
2. Import and add to main page
3. Update navigation menu
4. Add corresponding CMS management if needed

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Docker Deployment

```bash
docker build -t heavyequip-pro .
docker run -p 3000:3000 heavyequip-pro
```

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For support and maintenance:

- **Email**: info@heavyequip-pro.com
- **Phone**: +62 812-3456-7890
- **WhatsApp**: +62 812-3456-7890

---

**Built with ❤️ for HeavyEquip Pro - Your Trusted Heavy Equipment Consulting Partner**