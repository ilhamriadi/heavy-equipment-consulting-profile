import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { galleryItems } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const type = searchParams.get('type');

    let query = db
      .select()
      .from(galleryItems)
      .where(eq(galleryItems.isActive, true));

    if (category && category !== 'all') {
      query = query.where(and(
        eq(galleryItems.isActive, true),
        eq(galleryItems.category, category as any)
      ));
    }

    if (type) {
      query = query.where(and(
        eq(galleryItems.isActive, true),
        eq(galleryItems.type, type as any)
      ));
    }

    const items = await query.orderBy(galleryItems.sortOrder);

    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery items' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newGalleryItem = await db.insert(galleryItems).values({
      title: body.title,
      description: body.description,
      category: body.category,
      type: body.type,
      imageUrl: body.imageUrl,
      videoUrl: body.videoUrl,
      thumbnailUrl: body.thumbnailUrl,
      altText: body.altText,
      isActive: body.isActive ?? true,
      sortOrder: body.sortOrder || 0,
    }).returning();

    return NextResponse.json(newGalleryItem[0], { status: 201 });
  } catch (error) {
    console.error('Error creating gallery item:', error);
    return NextResponse.json(
      { error: 'Failed to create gallery item' },
      { status: 500 }
    );
  }
}