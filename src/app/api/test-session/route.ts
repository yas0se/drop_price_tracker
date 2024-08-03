// src/pages/api/test-session.ts
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { auth } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(auth);
    return NextResponse.json({ session });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to retrieve session' }, { status: 500 });
  }
}
