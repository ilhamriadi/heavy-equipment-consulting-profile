import {
  pgTable,
  text,
  integer,
  boolean,
  timestamp,
  decimal,
  jsonb,
  varchar,
  uuid,
  pgEnum
} from "drizzle-orm/pg-core";

// Enums for content types
export const serviceCategoryEnum = pgEnum("service_category", [
  "consulting",
  "training",
  "maintenance",
  "certification",
  "productivity",
  "supervision"
]);

export const galleryItemTypeEnum = pgEnum("gallery_item_type", [
  "image",
  "video"
]);

export const galleryCategoryEnum = pgEnum("gallery_category", [
  "projects",
  "training",
  "equipment",
  "team"
]);

// Site Content Table - For general site content (hero section, SEO meta, etc.)
export const siteContent = pgTable("site_content", {
  id: uuid("id").primaryKey().defaultRandom(),
  key: varchar("key", { length: 100 }).notNull().unique(),
  title: varchar("title", { length: 255 }),
  subtitle: text("subtitle"),
  description: text("description"),
  content: text("content"),
  imageUrl: varchar("image_url", { length: 500 }),
  metadata: jsonb("metadata"), // For additional structured data
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// About Content Table - For company information
export const aboutContent = pgTable("about_content", {
  id: uuid("id").primaryKey().defaultRandom(),
  companyName: varchar("company_name", { length: 255 }).notNull(),
  tagline: varchar("tagline", { length: 500 }),
  story: text("story").notNull(),
  mission: text("mission").notNull(),
  vision: text("vision").notNull(),
  values: jsonb("values"), // Array of value objects with icon, title, description
  achievements: jsonb("achievements"), // Array of achievement objects with number, label, description
  teamSize: integer("team_size").default(0),
  yearsExperience: integer("years_experience").default(0),
  projectsCompleted: integer("projects_completed").default(0),
  clientsCount: integer("clients_count").default(0),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Services Table - For service offerings
export const services = pgTable("services", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  category: serviceCategoryEnum("category").notNull(),
  description: text("description").notNull(),
  longDescription: text("long_description"),
  icon: varchar("icon", { length: 100 }), // Icon name or emoji
  imageUrl: varchar("image_url", { length: 500 }),
  features: jsonb("features"), // Array of feature strings
  badge: varchar("badge", { length: 50 }), // e.g., "Popular", "Best Seller"
  price: decimal("price", { precision: 10, scale: 2 }), // Optional pricing info
  duration: varchar("duration", { length: 100 }), // e.g., "3 months", "5 days"
  isActive: boolean("is_active").default(true).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Gallery Items Table - For portfolio images and videos
export const galleryItems = pgTable("gallery_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  category: galleryCategoryEnum("category").notNull(),
  type: galleryItemTypeEnum("type").notNull(),
  imageUrl: varchar("image_url", { length: 500 }),
  videoUrl: varchar("video_url", { length: 500 }),
  thumbnailUrl: varchar("thumbnail_url", { length: 500 }),
  altText: varchar("alt_text", { length: 255 }),
  isActive: boolean("is_active").default(true).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Contact Info Table - For company contact information
export const contactInfo = pgTable("contact_info", {
  id: uuid("id").primaryKey().defaultRandom(),
  type: varchar("type", { length: 50 }).notNull(), // phone, email, address, whatsapp
  label: varchar("label", { length: 100 }).notNull(), // e.g., "Main Office", "WhatsApp"
  value: varchar("value", { length: 500 }).notNull(),
  description: varchar("description", { length: 255 }),
  isActive: boolean("is_active").default(true).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Office Locations Table - For multiple office addresses
export const officeLocations = pgTable("office_locations", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(), // e.g., "Jakarta Head Office"
  address: text("address").notNull(),
  phone: varchar("phone", { length: 50 }),
  email: varchar("email", { length: 255 }),
  mapUrl: varchar("map_url", { length: 500 }),
  isActive: boolean("is_active").default(true).notNull(),
  isMainOffice: boolean("is_main_office").default(false).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Testimonials Table - For customer testimonials
export const testimonials = pgTable("testimonials", {
  id: uuid("id").primaryKey().defaultRandom(),
  customerName: varchar("customer_name", { length: 255 }).notNull(),
  customerTitle: varchar("customer_title", { length: 255 }),
  customerCompany: varchar("customer_company", { length: 255 }),
  rating: integer("rating").notNull(), // 1-5 stars
  content: text("content").notNull(),
  imageUrl: varchar("image_url", { length: 500 }),
  isActive: boolean("is_active").default(true).notNull(),
  isFeatured: boolean("is_featured").default(false).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// SEO Settings Table - For dynamic SEO configuration
export const seoSettings = pgTable("seo_settings", {
  id: uuid("id").primaryKey().defaultRandom(),
  page: varchar("page", { length: 100 }).notNull().unique(), // home, about, services, etc.
  metaTitle: varchar("meta_title", { length: 255 }),
  metaDescription: varchar("meta_description", { length: 500 }),
  metaKeywords: text("meta_keywords"),
  ogTitle: varchar("og_title", { length: 255 }),
  ogDescription: varchar("og_description", { length: 500 }),
  ogImage: varchar("og_image", { length: 500 }),
  canonicalUrl: varchar("canonical_url", { length: 500 }),
  robotsTag: varchar("robots_tag", { length: 100 }),
  structuredData: jsonb("structured_data"),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Settings Table - For global site settings
export const settings = pgTable("settings", {
  id: uuid("id").primaryKey().defaultRandom(),
  key: varchar("key", { length: 100 }).notNull().unique(),
  value: text("value"),
  type: varchar("type", { length: 50 }).notNull().default("string"), // string, number, boolean, json
  description: varchar("description", { length: 255 }),
  isPublic: boolean("is_public").default(false).notNull(), // Whether this setting can be accessed publicly
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Contact Form Submissions Table
export const contactSubmissions = pgTable("contact_submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  company: varchar("company", { length: 255 }),
  service: varchar("service", { length: 255 }),
  message: text("message").notNull(),
  status: varchar("status", { length: 50 }).default("new").notNull(), // new, read, replied, closed
  notes: text("notes"), // Admin notes
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Newsletter Subscriptions Table
export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});