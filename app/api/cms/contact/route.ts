import { NextRequest, NextResponse } from 'next/server';
import { db, contact } from '@/db';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const contactInfo = await db.select().from(contact).where(eq(contact.isActive, true));
    return NextResponse.json(contactInfo[0] || null);
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return NextResponse.json({ error: 'Failed to fetch contact info' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, phone, whatsapp, address, googleMapsUrl, workingHours } = body;

    const existing = await db.select().from(contact).where(eq(contact.id, 1));

    if (existing.length > 0) {
      const updated = await db
        .update(contact)
        .set({
          email,
          phone,
          whatsapp,
          address,
          googleMapsUrl,
          workingHours,
          updatedAt: new Date(),
        })
        .where(eq(contact.id, 1))
        .returning();

      return NextResponse.json(updated[0]);
    } else {
      const created = await db
        .insert(contact)
        .values({
          id: 1,
          email,
          phone,
          whatsapp,
          address,
          googleMapsUrl,
          workingHours,
        })
        .returning();

      return NextResponse.json(created[0]);
    }
  } catch (error) {
    console.error('Error updating contact info:', error);
    return NextResponse.json({ error: 'Failed to update contact info' }, { status: 500 });
  }
}