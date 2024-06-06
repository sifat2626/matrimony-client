import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useRef } from "react";

function ViewBiodata() {
  const axiosSecure = useAxiosSecure();
  const buttonRef = useRef(null); // Initialize the ref correctly

  const {
    isLoading,
    data: user = {},
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/user`);
      console.log(data.user);
      return data.user;
    },
  });

  const handlePremium = async () => {
    await axiosSecure("/request-premium");
    console.log(buttonRef);
    if (buttonRef.current) {
      // Use current to access the ref
      buttonRef.current.innerText = "Requested";
    }
    refetch();
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <button
        disabled={user.premiumStatus === "Premium"}
        onClick={handlePremium}
        ref={buttonRef} // Correctly attach the ref to the button
      >
        {user.premiumStatus === "Premium" ? "Premium" : "Make Biodata Premium"}
      </button>
    </div>
  );
}

export default ViewBiodata;
