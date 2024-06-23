import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};

export const POST = async (request: any) => {
  const { products, userId, userEmail } = await request.json();

  const data: ICartProduct[] = products;

  let activeProducts = await getActiveProducts();
  try {
    for (const product of data) {
      const stripeProduct = activeProducts.find(
        (stripeProduct: any) =>
          stripeProduct?.name?.toLowerCase() == product?.title?.toLowerCase()
      );
      if (stripeProduct == undefined) {
        await stripe.products.create({
          name: product.title,
          default_price_data: {
            unit_amount: Number(product.price) * 100,
            currency: "usd",
          },
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
  activeProducts = await getActiveProducts();
  let stripeItems: any = [];

  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (prod: any) => prod?.name?.toLowerCase() == product?.title?.toLowerCase()
    );

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.selectedQuantity,
      });
    }
  }
  if (stripeItems.length === 0) {
    throw new Error("No valid items to purchase");
  }
  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    customer_email: userEmail,
    payment_intent_data: {
      metadata: {
        id: userId,
      },
    },
    success_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/checkOut`,
  });

  return NextResponse.json({ url: session.url });
};
