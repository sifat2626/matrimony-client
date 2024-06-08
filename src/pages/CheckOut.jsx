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
    <div className="">
      <h2 className="text-center mt-8 text-yellow-800 font-bold text-2xl mb-12">
        CheckOut
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 lg:w-1/3 mx-auto border-2 p-4 border-yellow-800 rounded-md"
      >
        <label className="text-gray-500 font-medium">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={user?.email}
          disabled
          className="input input-bordered w-full mb-4 mt-2"
        />
        <label className="text-gray-500 font-medium">Biodata No.</label>
        <input
          type="number"
          name="biodataId"
          defaultValue={biodataId}
          disabled
          className="input input-bordered w-full mb-4"
        />
        <CardElement />
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={!stripe}
            className="bg-yellow-800 mt-6 px-4 py-2 text-white font-medium rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckOut;
