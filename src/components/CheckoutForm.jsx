/* eslint-disable react/prop-types */
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios"; // Assuming you have axios installed

function CheckoutForm({ biodataId }) {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);
    try {
      const { data: clientSecret } = await axios.post(
        "/create-payment-intent",
        {
          amount: 1000, // Example amount, replace with your amount
          email,
          biodataId,
        }
      );

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email,
          },
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          console.log("Payment successful!");
          // Handle post-payment logic here
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="input input-bordered w-full"
      />
      <CardElement className="input input-bordered w-full" />
      {error && <div>{error}</div>}
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Submit"}
      </button>
    </form>
  );
}

export default CheckoutForm;
