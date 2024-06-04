import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

function CheckOut() {
  const axiosSecure = useAxiosSecure();
  const { biodataId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    // const stripeCardNumber = form.stripeCardNumber.value;
    try {
      const result = await axiosSecure.post(`/request/${biodataId}`);
      console.log(result);
      // Navigate to the my-contact-requests page after successful submission
      navigate("/dashboard/my-contact-requests");
    } catch (error) {
      console.error("Failed to submit request:", error);
    }
  };

  return (
    <div>
      <h2>CheckOut</h2>
      <form action="" onSubmit={handleSubmit}>
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
        <input
          type="number"
          name="stripeCardNumber"
          defaultValue={4242}
          disabled
          className="input input-bordered w-full"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CheckOut;
