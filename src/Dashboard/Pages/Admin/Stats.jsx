import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function Stats() {
  const [stats, setStats] = useState({});
  const [revenue, setRevenue] = useState(0);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    getStats();
    getRevenue();
  }, []);
  const getStats = async () => {
    const { data } = await axiosSecure("/biodata-stats");
    setStats(data);
  };
  const getRevenue = async () => {
    const { data } = await axiosSecure("/revenue/count");
    setRevenue(data.revenue);
  };
  return (
    <div>
      <div className="">
        <p>Total Users: {stats.count}</p>
      </div>
      <div className="">
        <p>Total Male Users: {stats.maleCount}</p>
      </div>
      <div className="">
        <p>Total Female Users: {stats.femaleCount}</p>
      </div>
      <div className="">
        <p>Total Premium Users: {stats.premiumCount}</p>
      </div>
      <div className="">
        <p>Total Revenue: {revenue}</p>
      </div>
    </div>
  );
}

export default Stats;
