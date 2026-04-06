/**
 * Stripe configuration for payment processing
 * 
 * To use Stripe:
 * 1. Install: npm install stripe @stripe/react-stripe-js
 * 2. Get keys from https://dashboard.stripe.com/apikeys
 * 3. Add to .env.local:
 *    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
 *    STRIPE_SECRET_KEY=sk_test_...
 * 4. Implement checkout flow
 */

import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

/**
 * Create a payment session for a product
 */
export async function createCheckoutSession(
  productId: string,
  quantity: number = 1
) {
  // You would implement product-to-Stripe mapping here
  const productMap: Record<string, { priceId: string; name: string }> = {
    umbral: {
      priceId: "price_umbral_800",
      name: "Umbral - Identidad de marca completa",
    },
    territorio: {
      priceId: "price_territorio_1800",
      name: "Territorio - Identidad + presencia digital",
    },
    mundo: {
      priceId: "price_mundo_600",
      name: "Mundo - Solo diseño web",
    },
  };

  const product = productMap[productId];
  if (!product) {
    throw new Error("Product not found");
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: product.priceId,
        quantity,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/cancel`,
  });

  return session;
}

/**
 * Retrieve a payment session
 */
export async function getCheckoutSession(sessionId: string) {
  return await stripe.checkout.sessions.retrieve(sessionId);
}

/**
 * Webhook handler for Stripe events
 */
export async function handleStripeWebhook(
  body: string,
  signature: string
): Promise<Stripe.Event> {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    throw new Error("STRIPE_WEBHOOK_SECRET is not set");
  }

  return stripe.webhooks.constructEvent(body, signature, webhookSecret);
}
