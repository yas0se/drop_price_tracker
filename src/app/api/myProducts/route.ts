import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth";
import { auth } from '@/lib/auth';


export async function GET() {
  try {
    console.log("GET /api/products");
    const session = await getServerSession(auth);
    if (!session?.user?.email) {
      return NextResponse.json({ message: 'User is not authenticated' }, { status: 401 });
    }
    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      if (!user) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
      }

    const products = await prisma.userProduct.findMany({
        where:{userId: user.id}
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ message: 'Failed to fetch products' }, { status: 500 });
  }
}
