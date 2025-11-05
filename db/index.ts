import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as authSchema from './schema/auth';
import * as cmsSchema from './schema/cms';

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: { ...authSchema, ...cmsSchema }
});

export * from './schema/auth';
export * from './schema/cms';