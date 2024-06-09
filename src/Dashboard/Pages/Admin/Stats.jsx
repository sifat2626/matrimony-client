import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Pie, PieChart, Cell, Tooltip, Legend } from "recharts";

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

  const data01 = [
    { name: "Total Users", value: stats.count || 0 },
    { name: "Male Users", value: stats.maleCount || 0 },
    { name: "Female Users", value: stats.femaleCount || 0 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="flex flex-col items-center">
      <h3 className="mt-8 text-yellow-800 font-semibold text-2xl">
        Admin Dashboard
      </h3>
      <PieChart width={400} height={400}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      <div className="mt-4 text-center">
        <p className="text-yellow-800 font-medium mb-2">
          Total Premium Users: <span className="">{stats.premiumCount}</span>
        </p>
        <p className="text-yellow-800 font-medium">
          Total Revenue: $ {revenue}
        </p>
      </div>
    </div>
  );
}

export default Stats;
