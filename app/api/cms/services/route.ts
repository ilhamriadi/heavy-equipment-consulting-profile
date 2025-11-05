import { NextRequest, NextResponse } from 'next/server';
import { db, services } from '@/db';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const servicesList = await db
      .select()
      .from(services)
      .where(eq(services.isActive, true))
      .orderBy(services.sortOrder);
    return NextResponse.json(servicesList);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, icon, imageUrl, sortOrder = 0 } = body;

    const newService = await db
      .insert(services)
      .values({
        title,
        description,
        icon,
        imageUrl,
        sortOrder,
      })
      .returning();

    return NextResponse.json(newService[0], { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, description, icon, imageUrl, isActive, sortOrder } = body;

    const updated = await db
      .update(services)
      .set({
        title,
        description,
        icon,
        imageUrl,
        isActive,
        sortOrder,
        updatedAt: new Date(),
      })
      .where(eq(services.id, id))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json(updated[0]);
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
}