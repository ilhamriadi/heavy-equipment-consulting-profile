import { pgTable, text, timestamp, boolean, integer } from "drizzle-orm/pg-core";

// About section content
export const about = pgTable("about", {
  id: integer("id").primaryKey().default(1),
  title: text("title").notNull().default("Tentang Perusahaan"),
  description: text("description").notNull(),
  mission: text("mission"),
  vision: text("vision"),
  history: text("history"),
  imageUrl: text("image_url"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Services section
export const services = pgTable("services", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon"),
  imageUrl: text("image_url"),
  isActive: boolean("is_active").default(true),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Gallery images
export const gallery = pgTable("gallery", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: text("title").notNull(),
  description: text("description"),
  imageUrl: text("image_url").notNull(),
  category: text("category").default("general"),
  isActive: boolean("is_active").default(true),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Contact information
export const contact = pgTable("contact", {
  id: integer("id").primaryKey().default(1),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  whatsapp: text("whatsapp"),
  address: text("address"),
  googleMapsUrl: text("google_maps_url"),
  workingHours: text("working_hours"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Site settings and SEO
export const siteSettings = pgTable("site_settings", {
  id: integer("id").primaryKey().default(1),
  siteTitle: text("site_title").notNull().default("Heavy Equipment Consulting"),
  siteDescription: text("site_description").notNull(),
  keywords: text("keywords"),
  logoUrl: text("logo_url"),
  faviconUrl: text("favicon_url"),
  facebookUrl: text("facebook_url"),
  instagramUrl: text("instagram_url"),
  linkedinUrl: text("linkedin_url"),
  youtubeUrl: text("youtube_url"),
  googleAnalyticsId: text("google_analytics_id"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type About = typeof about.$inferSelect;
export type NewAbout = typeof about.$inferInsert;
export type Services = typeof services.$inferSelect;
export type NewServices = typeof services.$inferInsert;
export type Gallery = typeof gallery.$inferSelect;
export type NewGallery = typeof gallery.$inferInsert;
export type Contact = typeof contact.$inferSelect;
export type NewContact = typeof contact.$inferInsert;
export type ContactSubmissions = typeof contactSubmissions.$inferSelect;
export type NewContactSubmissions = typeof contactSubmissions.$inferInsert;
export type SiteSettings = typeof siteSettings.$inferSelect;
export type NewSiteSettings = typeof siteSettings.$inferInsert;