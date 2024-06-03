import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

function CheckOut() {
  const axiosSecure = useAxiosSecure();
  const { biodataId } = useParams();
  const { user } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    // const stripeCardNumber = form.stripeCardNumber.value;
    const result = await axiosSecure.post(`/request/${biodataId}`);
    console.log(result);
  };
  return (
    <div>
      <h2>CheckOut</h2>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
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
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CheckOut;
