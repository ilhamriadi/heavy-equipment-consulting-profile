import { NextRequest, NextResponse } from 'next/server';
import { db, about } from '@/db';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const aboutContent = await db.select().from(about).where(eq(about.isActive, true));
    return NextResponse.json(aboutContent[0] || null);
  } catch (error) {
    console.error('Error fetching about content:', error);
    return NextResponse.json({ error: 'Failed to fetch about content' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, mission, vision, history, imageUrl } = body;

    const existing = await db.select().from(about).where(eq(about.id, 1));

    if (existing.length > 0) {
      const updated = await db
        .update(about)
        .set({
          title,
          description,
          mission,
          vision,
          history,
          imageUrl,
          updatedAt: new Date(),
        })
        .where(eq(about.id, 1))
        .returning();

      return NextResponse.json(updated[0]);
    } else {
      const created = await db
        .insert(about)
        .values({
          id: 1,
          title,
          description,
          mission,
          vision,
          history,
          imageUrl,
        })
        .returning();

      return NextResponse.json(created[0]);
    }
  } catch (error) {
    console.error('Error updating about content:', error);
    return NextResponse.json({ error: 'Failed to update about content' }, { status: 500 });
  }
}