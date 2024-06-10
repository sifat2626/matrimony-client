import { useEffect, useState } from "react";
import useAxiosCommon from "../hooks/useAxiosCommon";
import useAxiosSecure from "../hooks/useAxiosSecure";
import CountUp from "react-countup";

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
      <div className="text-center text-2xl font-medium">
        <CountUp
          start={0}
          end={count}
          delay={2}
          duration={3}
          enableScrollSpy
          redraw={true}
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
        <p className="text-xl font-semibold mt-4">Successful Marriages</p>
      </div>
      <div className="text-center text-2xl font-medium">
        <CountUp
          start={0}
          end={stats.count}
          delay={2}
          duration={3}
          enableScrollSpy
          redraw={true}
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
        <p className="text-xl font-semibold mt-4">Total Biodata</p>
      </div>
      <div className="text-center text-2xl font-medium">
        <CountUp
          start={0}
          end={stats.maleCount}
          delay={2}
          duration={3}
          enableScrollSpy
          redraw={true}
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
        <p className="text-xl font-semibold mt-4">Male Biodata</p>
      </div>
      <div className="text-center text-2xl font-medium">
        <CountUp
          start={0}
          end={stats.femaleCount}
          delay={2}
          duration={3}
          enableScrollSpy
          redraw={true}
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
        <p className="text-xl font-semibold mt-4">Female Biodata</p>
      </div>
    </div>
  );
}

export default SuccessCounter;
