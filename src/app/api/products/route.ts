import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import cheerio from 'cheerio';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  if (!url) {
    return NextResponse.json({ message: 'Product URL is required' }, { status: 400 });
  }

  try {
    const productData = await scrapeProductData(url);

    const product = await prisma.product.create({
      data: {
        name: productData.name,
        url,
        imageUrl: productData.imageUrl,
      },
    });

    return NextResponse.json({ url }, { status: 200 });
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

    return { name, imageUrl };
  } catch (error) {
    console.error('Error scraping product data:', error);
    throw new Error('Failed to scrape product data');
  }
};
