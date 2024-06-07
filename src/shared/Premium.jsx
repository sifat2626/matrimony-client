import { useEffect, useState } from "react";
import Member from "../components/Member";
import { axiosCommon } from "../hooks/useAxiosCommon";

function Premium() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axiosCommon("/all-premium-users").then((res) =>
      setUsers(res.data.premiumUsers)
    );
  }, []);
  return (
    <div className="mt-16">
      <h2 className="text-center text-yellow-800 dark:text-white font-bold text-3xl">
        Premium Members
      </h2>
      <div className="max-w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mt-8">
        {users?.slice(0, 6).map((member, i) => (
          <Member member={member} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Premium;
