// Export all schemas
export * from './auth';
export * from './content';

// Export all tables for easy import
export {
  // Auth tables
  user,
  session,
  account,
  verification,

  // Content tables
  siteContent,
  aboutContent,
  services,
  galleryItems,
  contactInfo,
  officeLocations,
  testimonials,
  seoSettings,
  settings,
  contactSubmissions,
  newsletterSubscriptions
} from './content';

// Export enums
export {
  serviceCategoryEnum,
  galleryItemTypeEnum,
  galleryCategoryEnum
} from './content';