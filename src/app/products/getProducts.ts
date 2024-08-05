
    import { getServerSession } from "next-auth";
    import { prisma } from '@/lib/prisma';
    import { auth } from '@/lib/auth';
    
    export const getProducts = async () => {
      const session = await getServerSession(auth);
      if (!session?.user?.email) {
        throw new Error('User is not authenticated');
      }
    
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      if (!user) {
        throw new Error('User not found');
      }
    
      const userProducts = await prisma.userProduct.findMany({
        where: { userId: user.id }
      });
    
      if (!userProducts.length) {
        throw new Error('No products found for user');
      }
    
      const productPromises = userProducts.map(async (product) => {
        return prisma.product.findUnique({
          where: { id: product.productId }
        });
      });
    
      const products = await Promise.all(productPromises);
    
      return products;
    };
    
    