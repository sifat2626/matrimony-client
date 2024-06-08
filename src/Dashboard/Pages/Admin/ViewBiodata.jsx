import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useRef, useState } from "react";
import DetailItem from "../../../components/DetailItem";
import { Link } from "react-router-dom";

function ViewBiodata() {
  const axiosSecure = useAxiosSecure();
  const [biodata, setBiodata] = useState({});
  const [biodataLoading, setBiodataLoading] = useState(true);
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

  useEffect(() => {
    setBiodataLoading(true);
    axiosSecure(`biodata/byEmail/${user.email}`).then((res) =>
      setBiodata(res.data)
    );
    setBiodataLoading(false);
  }, []);

  const handlePremium = async () => {
    await axiosSecure("/request-premium");
    console.log(buttonRef);
    if (buttonRef.current) {
      // Use current to access the ref
      buttonRef.current.innerText = "Requested";
    }
    refetch();
  };

  if (isLoading || biodataLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex flex-col gap-6 justify-center">
        <div className="w-64 p-4 mx-auto">
          <img
            src={biodata.profileImage}
            alt=""
            className="w-64 h-64 object-cover object-center rounded-md"
          />
          <div className="text-center mt-4">
            <h4 className="border-2 py-1 inline-block px-4 bg-yellow-800 text-white font-semibold text-xl rounded-md">
              {biodata.name}
            </h4>
            <h4></h4>
          </div>
          {user.premiumStatus !== "Premium" ? (
            <div className="text-center mt-4">
              <Link
                to={`/checkout/${biodata?.biodataId}`}
                className="border-2 py-1 inline-block px-4 bg-green-800 text-white font-semibold text-xl rounded-md"
              >
                Request Contact
              </Link>
            </div>
          ) : (
            <div className="text-center mt-4 font-medium text-xl">
              <h4> {biodata.contactEmail}</h4>
              <h4>{biodata.mobileNumber}</h4>
            </div>
          )}
        </div>
        <div className="p-4 m-4 rounded-md bg-yellow-800 text-white  w-full">
          <div className="flex justify-center">
            <h4 className="text-center mb-8 bg-green-200 text-green-600 px-2 py-1 rounded-md font-bold inline-block">
              Biodata No. {biodata.biodataId}
            </h4>
          </div>
          <div className="flex gap-8">
            <div className="w-full flex flex-col gap-2">
              <DetailItem title={"Name"} value={biodata.name} />
              <DetailItem
                title={"Date of Birth"}
                value={new Date(biodata.dateOfBirth).toLocaleDateString()}
              />
              <DetailItem title={"Height"} value={biodata.height} />
              <DetailItem title={"Occupation"} value={biodata.occupation} />
              <DetailItem title={"Father's name"} value={biodata.fathersName} />
              <DetailItem
                title={"Present division"}
                value={biodata.presentDivision}
              />
              <DetailItem
                title={"Expected partner height"}
                value={biodata.expectedPartnerHeight}
              />
              <DetailItem
                title={"Expected partner age"}
                value={biodata.expectedPartnerAge}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between mr-24">
                <h3>Biodata Type: </h3>
                <span
                  className={`${
                    biodata.biodataType === "Male"
                      ? "bg-green-200 text-green-600 px-2 py-1 rounded-md font-bold"
                      : "bg-red-200 text-red-600 px-2 py-1 rounded-md font-bold"
                  } ml-4`}
                >
                  {biodata.biodataType}
                </span>{" "}
              </div>
              <DetailItem title={"Age"} value={biodata.age} />
              <DetailItem title={"Weight"} value={biodata.weight} />
              <DetailItem title={"Skin tone"} value={biodata.race} />
              <DetailItem title={"Mother's name"} value={biodata.mothersName} />
              <DetailItem
                title={"Permanent division"}
                value={biodata.permanentDivision}
              />
              <DetailItem
                title={"Expected partner weight"}
                value={biodata.expectedPartnerWeight}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          disabled={user.premiumStatus === "Premium"}
          onClick={handlePremium}
          ref={buttonRef} // Correctly attach the ref to the button
          className="px-4 py-2 bg-yellow-800 text-white font-medium rounded-md "
        >
          {user.premiumStatus === "Premium"
            ? "Premium"
            : "Make Biodata Premium"}
        </button>
      </div>
    </div>
  );
}

export default ViewBiodata;
