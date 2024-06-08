/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosCommon } from "../hooks/useAxiosCommon";

function Member({ member }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const { email } = member;
  console.log(member);
  useEffect(() => {
    setIsLoading(true);
    axiosCommon(`/biodata/byEmail/${email}`).then((res) => setData(res.data));
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Loading...</p>;

  console.log(member);
  return (
    <div className="col-span-1 bg-yellow-900 p-6 rounded-md text-white">
      <div className="flex justify-center ">
        <h3 className=" text-xl font-semibold inline-block bg-yellow-700 px-4 py-2 rounded-md text-white">
          Biodata No: {data?.biodataId}
        </h3>
      </div>
      <img
        src={data?.profileImage}
        alt=""
        className="w-32 h-32 mx-auto mt-4 mb-8 border-2 rounded-full object-cover object-center"
      />
      <div className="flex flex-col gap-2 mb-8 text-lg font-medium">
        <div className="flex gap-8">
          <h4 className="w-full border-r-4">Type</h4>
          <div className="w-full">
            <p
              className={` ${
                data?.biodataType === "Male"
                  ? "bg-green-200 text-green-600"
                  : "bg-pink-200 text-pink-600"
              } inline-block px-4 rounded-md`}
            >
              {data?.biodataType}
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          <h4 className="w-full border-r-4">Address</h4>
          <p className="w-full">{data?.permanentDivision}</p>
        </div>
        <div className="flex gap-8">
          <h4 className="w-full border-r-4">Age</h4>
          <p className="w-full">{data?.age}</p>
        </div>
        <div className="flex gap-8">
          <h4 className="w-full border-r-4">Occupation</h4>
          <p className="w-full">{data?.occupation}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to={`/details/${data?.biodataId}`}
          className="font-medium text-lg bg-yellow-700 py-2 px-4 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Member;
