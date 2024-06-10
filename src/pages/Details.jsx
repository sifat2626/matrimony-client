/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import DetailItem from "../components/DetailItem";
import { axiosCommon } from "../hooks/useAxiosCommon";
import Biodata from "../components/Biodata";
import { setWishlist } from "../utils/localStorage";

function Details() {
  const axiosSecure = useAxiosSecure();
  const [biodata, setBiodata] = useState({});
  const [biodatas, setBiodats] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axiosSecure(`/biodata/${id}`).then((res) => setBiodata(res.data));
    setLoading(false);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    axiosSecure(`/user`).then((res) => setUser(res.data.user));
    setLoading(false);
  }, []);

  useEffect(() => {
    axiosCommon("/biodatas").then((res) => setBiodats(res.data.biodatas));
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="">
      <div className="flex gap-6 justify-center">
        <div className="w-64 p-4">
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
          <div className="text-center mt-2">
            <button
              onClick={() => setWishlist(biodata.biodataId)}
              className="border-2 py-1 inline-block px-4 bg-pink-600 text-white font-semibold text-xl rounded-md"
            >
              Add to Favourites!
            </button>
          </div>
        </div>
        <div className="p-4 m-4 rounded-md bg-yellow-800 text-white  w-2/3">
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
      <div className="mt-12 max-w-[90%] mx-auto">
        <h3 className="text-yellow-800 font-bold text-2xl mb-4">
          Similar Biodata's...
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-6">
          {biodatas
            .filter(
              (bio) =>
                bio.biodataType === biodata.biodataType &&
                bio.biodataId !== biodata.biodataId
            )
            .slice(0, 3)
            .map((biodata) => (
              <Biodata biodata={biodata} key={biodata._id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
