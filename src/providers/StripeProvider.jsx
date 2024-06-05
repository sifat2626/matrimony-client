/* eslint-disable react/prop-types */
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Your Stripe public key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

function StripeProvider({ children }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}

export default StripeProvider;
