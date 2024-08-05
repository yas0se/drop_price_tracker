import cron from 'node-cron';
import { prisma } from '@/lib/prisma';
import axios from 'axios';
import cheerio from 'cheerio';

// Fonction pour scraper les prix et enregistrer l'historique
const scrapeAndSavePrices = async () => {
  try {
    // Récupérer tous les produits suivis
    const userProducts = await prisma.userProduct.findMany({
      where: { isActive: true },
      include: { product: true },
    });

    for (const userProduct of userProducts) {
      const { product } = userProduct;

      const productData = await scrapeProductData(product.url);

      await prisma.priceHistory.create({
        data: {
          productId: product.id,
          price: productData.price,
          date: new Date(),  // Date actuelle
        },
      });
    }
  } catch (error) {
    console.error('Error in price scraping job:', error);
  }
};

// Planifier le job pour s'exécuter chaque vendredi à minuit
cron.schedule('0 0 * * 5', scrapeAndSavePrices); // '0 0 * * 5' signifie chaque vendredi à minuit

// Fonction pour scraper les données du produit (réutilisée de votre code)
const scrapeProductData = async (url: string) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const name = $('#productTitle').text().trim() || 'Unknown Product';
    const imageUrl = $('#imgTagWrapperId img').attr('src') || '';
    const price = parseFloat($('.a-price .a-offscreen').text().replace(/[^0-9.]/g, '')) || 0;

    return { name, imageUrl, price };
  } catch (error) {
    console.error('Error scraping product data:', error);
    throw new Error('Failed to scrape product data');
  }
};
