import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { services } from '@/db/schema';
import { eq } from 'drizzle-orm';

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const service = await db
      .select()
      .from(services)
      .where(eq(services.id, id))
      .limit(1);

    if (!service.length) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(service[0]);
  } catch (error) {
    console.error('Error fetching service:', error);
    return NextResponse.json(
      { error: 'Failed to fetch service' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updatedService = await db
      .update(services)
      .set({
        title: body.title,
        slug: body.slug,
        category: body.category,
        description: body.description,
        longDescription: body.longDescription,
        icon: body.icon,
        features: body.features,
        badge: body.badge,
        price: body.price,
        duration: body.duration,
        isActive: body.isActive,
        sortOrder: body.sortOrder,
        updatedAt: new Date(),
      })
      .where(eq(services.id, id))
      .returning();

    if (!updatedService.length) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedService[0]);
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json(
      { error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    const deletedService = await db
      .delete(services)
      .where(eq(services.id, id))
      .returning();

    if (!deletedService.length) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}