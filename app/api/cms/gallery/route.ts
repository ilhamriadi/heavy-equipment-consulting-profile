import { NextRequest, NextResponse } from 'next/server';
import { db, gallery } from '@/db';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const galleryItems = await db
      .select()
      .from(gallery)
      .where(eq(gallery.isActive, true))
      .orderBy(gallery.sortOrder);
    return NextResponse.json(galleryItems);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, imageUrl, category = 'general', sortOrder = 0 } = body;

    const newGalleryItem = await db
      .insert(gallery)
      .values({
        title,
        description,
        imageUrl,
        category,
        sortOrder,
      })
      .returning();

    return NextResponse.json(newGalleryItem[0], { status: 201 });
  } catch (error) {
    console.error('Error creating gallery item:', error);
    return NextResponse.json({ error: 'Failed to create gallery item' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, description, imageUrl, category, isActive, sortOrder } = body;

    const updated = await db
      .update(gallery)
      .set({
        title,
        description,
        imageUrl,
        category,
        isActive,
        sortOrder,
        updatedAt: new Date(),
      })
      .where(eq(gallery.id, id))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }

    return NextResponse.json(updated[0]);
  } catch (error) {
    console.error('Error updating gallery item:', error);
    return NextResponse.json({ error: 'Failed to update gallery item' }, { status: 500 });
  }
}