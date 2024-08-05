import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import cheerio from 'cheerio';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth";
import { auth } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const url = formData.get('url') as string | null;  // Type assertion to handle the possible null value
    console.log("url: ", url);
    console.log("typeof url:", typeof url);

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ message: 'Product URL is required' }, { status: 400 });
    }

    const productData = await scrapeProductData(url);

    const product = await prisma.product.create({
      data: {
        name: productData.name,
        url,
        imageUrl: productData.imageUrl,
      },
    });

    // Record the price history
    await prisma.priceHistory.create({
      data: {
        productId: product.id,
        price: productData.price, // Assuming the price is scraped as well
        date: new Date(),  // Current date
      },
    });

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
    
    await prisma.userProduct.create({
      data: {
        userId: user.id, 
        productId: product.id,
      },
    }
    )

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ message: 'Failed to process request' }, { status: 500 });
  }
}

const scrapeProductData = async (url: string) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const name = $('#productTitle').text().trim() || 'Unknown Product';
    const imageUrl = $('#imgTagWrapperId img').attr('src') || '';
    const price = parseFloat($('.a-price .a-offscreen').text().replace(/[^0-9.]/g, '')) || 0; // Example of extracting price

    return { name, imageUrl, price };
  } catch (error) {
    console.error('Error scraping product data:', error);
    throw new Error('Failed to scrape product data');
  }
};
