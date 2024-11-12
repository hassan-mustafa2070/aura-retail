// pages/api/checkout.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Retry function for Prisma operations
const retryPrismaOperation = async (operation, retries = 5, delay = 2000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === retries - 1) throw error; // Throw error if last attempt fails
      console.error(`Attempt ${i + 1} failed: Retrying in ${delay / 1000} seconds...`);
      await new Promise(res => setTimeout(res, delay)); // Wait for `delay` ms before retrying
    }
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      email,
      firstName,
      secondName,
      country,
      province,
      city,
      area,
      address,
      apartment,
      mobile,
      secondNumber,
      postalCode,
      paymentMethod,
      totalAmount,
      totalQuantity,
      cartItems,
    } = req.body;

    try {
      // Wrap the Prisma order creation in retry logic
      const order = await retryPrismaOperation(() =>
        prisma.order.create({
          data: {
            email,
            firstName,
            secondName,
            country,
            province,
            city,
            area,
            address,
            apartment,
            mobile,
            secondNumber,
            postalCode,
            paymentMethod,
            totalAmount: parseFloat(totalAmount),
            totalQuantity: parseInt(totalQuantity),
            cartItems: {
              create: cartItems.map((item) => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
              })),
            },
          },
        })
      );

      res.status(200).json({ message: 'Order created successfully', order });
    } catch (error) {
      console.error("Error creating order: ", error);
      res.status(500).json({ message: 'Failed to create order', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
