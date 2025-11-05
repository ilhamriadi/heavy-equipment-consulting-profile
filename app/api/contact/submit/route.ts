import { NextRequest, NextResponse } from 'next/server';
import { db, contactSubmissions } from '@/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      );
    }

    const newSubmission = await db
      .insert(contactSubmissions)
      .values({
        name,
        email,
        phone,
        subject,
        message,
      })
      .returning();

    // TODO: Send email notification here
    // For now, we'll just log the submission
    console.log('New contact submission:', newSubmission[0]);

    return NextResponse.json(
      {
        message: 'Contact form submitted successfully',
        submission: newSubmission[0]
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}