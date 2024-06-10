/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Biodata({ biodata }) {
  const {
    biodataId,
    biodataType,
    profileImage,
    permanentDivision,
    age,
    occupation,
  } = biodata;
  return (
    <div className="col-span-1 bg-yellow-900 p-6 rounded-md text-white ">
      <div className="flex justify-center ">
        <h3 className=" text-xl font-semibold inline-block bg-yellow-700 px-4 py-2 rounded-md text-white">
          Biodata No: {biodataId}
        </h3>
      </div>
      <img
        src={profileImage}
        alt=""
        className="w-32 h-32 mx-auto mt-4 mb-8 border-2 rounded-full object-cover object-center"
      />
      <div className="flex flex-col gap-2 mb-8 text-lg font-medium">
        <div className="flex gap-8">
          <h4 className="w-full border-r-4">Type</h4>
          <div className="w-full">
            <p
              className={` ${
                biodataType === "Male"
                  ? "bg-green-200 text-green-600"
                  : "bg-pink-200 text-pink-600"
              } inline-block px-4 rounded-md`}
            >
              {biodataType}
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          <h4 className="w-full border-r-4">Address</h4>
          <p className="w-full">{permanentDivision}</p>
        </div>
        <div className="flex gap-8">
          <h4 className="w-full border-r-4">Age</h4>
          <p className="w-full">{age}</p>
        </div>
        <div className="flex gap-8 items-center">
          <h4 className="w-full border-r-4">Occupation</h4>
          <p className="w-full text-sm">{occupation}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to={`/details/${biodataId}`}
          className="font-medium text-lg bg-yellow-700 py-2 px-4 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Biodata;
