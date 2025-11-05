import { NextRequest, NextResponse } from 'next/server';
import { db, siteSettings } from '@/db';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const settings = await db.select().from(siteSettings).where(eq(siteSettings.isActive, true));
    return NextResponse.json(settings[0] || null);
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return NextResponse.json({ error: 'Failed to fetch site settings' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      siteTitle,
      siteDescription,
      keywords,
      logoUrl,
      faviconUrl,
      facebookUrl,
      instagramUrl,
      linkedinUrl,
      youtubeUrl,
      googleAnalyticsId
    } = body;

    const existing = await db.select().from(siteSettings).where(eq(siteSettings.id, 1));

    if (existing.length > 0) {
      const updated = await db
        .update(siteSettings)
        .set({
          siteTitle,
          siteDescription,
          keywords,
          logoUrl,
          faviconUrl,
          facebookUrl,
          instagramUrl,
          linkedinUrl,
          youtubeUrl,
          googleAnalyticsId,
          updatedAt: new Date(),
        })
        .where(eq(siteSettings.id, 1))
        .returning();

      return NextResponse.json(updated[0]);
    } else {
      const created = await db
        .insert(siteSettings)
        .values({
          id: 1,
          siteTitle,
          siteDescription,
          keywords,
          logoUrl,
          faviconUrl,
          facebookUrl,
          instagramUrl,
          linkedinUrl,
          youtubeUrl,
          googleAnalyticsId,
        })
        .returning();

      return NextResponse.json(created[0]);
    }
  } catch (error) {
    console.error('Error updating site settings:', error);
    return NextResponse.json({ error: 'Failed to update site settings' }, { status: 500 });
  }
}