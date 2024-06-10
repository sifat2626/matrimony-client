import { useEffect, useState } from "react";
import useAxiosCommon from "../hooks/useAxiosCommon";
import useAxiosSecure from "../hooks/useAxiosSecure";

function SuccessCounter() {
  const [stats, setStats] = useState({});
  const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();

  const [count, setCount] = useState(0);
  useEffect(() => {
    axiosCommon("/count/success-stories").then((res) =>
      setCount(res.data.count)
    );
  }, []);

  useEffect(() => {
    getStats();
  }, []);

  const getStats = async () => {
    const { data } = await axiosSecure("/biodata-stats");
    setStats(data);
  };
  console.log(stats);
  return (
    <div className=" bg-yellow-800 py-12 text-white mt-12 flex grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[5%] justify-between">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">{count}</h3>
        <p className="text-xl font-semibold">Successful Marriages</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">{stats.count}</h3>
        <p className="text-xl font-semibold">Total Biodata</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">{stats.maleCount}</h3>
        <p className="text-xl font-semibold">Male Biodata</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">{stats.femaleCount}</h3>
        <p className="text-xl font-semibold">Female Biodata</p>
      </div>
    </div>
  );
}

export default SuccessCounter;
