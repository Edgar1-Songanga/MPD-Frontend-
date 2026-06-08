import { stripe } from "@/lib/stripe";

export const billingService = {
  async createCheckoutSession(companyId: string) {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Magestade Platform Pro"
            },
            unit_amount: 5000,
            recurring: {
              interval: "month"
            }
          },
          quantity: 1
        }
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing`,
      metadata: {
        companyId
      }
    });

    return session;
  }
};