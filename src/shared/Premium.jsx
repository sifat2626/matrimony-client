import { useEffect, useState } from "react";
import Member from "../components/Member";
import { axiosCommon } from "../hooks/useAxiosCommon";

function Premium() {
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    const fetchPremiumUsers = async () => {
      try {
        const res = await axiosCommon("/all-premium-users");
        setUsers(res.data.premiumUsers);
      } catch (error) {
        console.error("Error fetching premium users:", error);
      }
    };

    fetchPremiumUsers();
  }, []);

  useEffect(() => {
    if (sortOrder === "ascending") {
      setUsers((prevUsers) => [...prevUsers].sort((a, b) => a.age - b.age));
    } else {
      setUsers((prevUsers) => [...prevUsers].sort((a, b) => b.age - a.age));
    }
  }, [sortOrder]);

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="mt-16">
      <h2 className="text-center text-yellow-800 dark:text-white font-bold text-3xl">
        Premium Members
      </h2>
      <div className="text-center mt-8">
        <label className="text-yellow-800 dark:text-white font-medium">
          Sort by Age:{" "}
        </label>
        <select
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="border-2 border-yellow-800 p-2 rounded-md"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="max-w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mt-8">
        {users.slice(0, 6).map((member, i) => (
          <Member member={member} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Premium;
