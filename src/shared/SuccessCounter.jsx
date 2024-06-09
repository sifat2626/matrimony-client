import { useEffect, useState } from "react";
import useAxiosCommon from "../hooks/useAxiosCommon";

function SuccessCounter() {
  const axiosCommon = useAxiosCommon();
  const [count, setCount] = useState(0);
  useEffect(() => {
    axiosCommon("/count/success-stories").then((res) =>
      setCount(res.data.count)
    );
  }, []);
  return (
    <div className="text-center bg-yellow-800 py-12 text-white mt-12">
      <h3 className="text-2xl font-bold mb-4">{count}</h3>
      <p className="text-xl font-semibold">Successful Marriages</p>
    </div>
  );
}

export default SuccessCounter;
