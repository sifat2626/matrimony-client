import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

function CheckOut() {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { biodataId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      // Create a payment intent on the server
      const { data: paymentIntent } = await axiosSecure.post(
        "/create-payment-intent",
        {
          amount: 500,
          email: user.email,
          biodataId,
        }
      );

      // Confirm the payment on the client
      const result = await stripe.confirmCardPayment(
        paymentIntent.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              email: user.email,
            },
          },
        }
      );

      if (result.error) {
        console.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          // Call your backend API after successful payment
          await axiosSecure.post(`/request/${biodataId}`);
          // Navigate to the my-contact-requests page
          navigate("/dashboard/my-contact-requests");
        }
      }
    } catch (error) {
      console.error("Failed to process payment:", error);
    }
  };

  return (
    <div>
      <h2>CheckOut</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          defaultValue={user?.email}
          disabled
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="biodataId"
          defaultValue={biodataId}
          disabled
          className="input input-bordered w-full"
        />
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CheckOut;
