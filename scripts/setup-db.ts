import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import seed from '../db/seed';

async function setupDatabase() {
  console.log('🚀 Setting up database...');

  try {
    // First, run migrations
    console.log('📋 Running migrations...');
    const db = drizzle(process.env.DATABASE_URL!);

    // Run seed data
    console.log('🌱 Seeding initial data...');
    await seed();

    console.log('✅ Database setup completed successfully!');

  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
}

setupDatabase().catch(console.error);