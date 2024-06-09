import { useState, useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const GotMarried = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // State variables to hold form inputs and feedback messages
  const [, setBiodata] = useState({});
  const [selfBiodataId, setSelfBiodataId] = useState("");
  const [partnerBiodataId, setPartnerBiodataId] = useState("");
  const [coupleImageLink, setCoupleImageLink] = useState("");
  const [review, setReview] = useState("");
  const [marriageDate, setMarriageDate] = useState(""); // New state for marriage date
  const [rating, setRating] = useState(0); // New state for rating
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBiodata = async () => {
      try {
        const res = await axiosSecure(`/biodata/byEmail/${user.email}`);
        setBiodata(res.data);
        setSelfBiodataId(res.data.biodataId);
      } catch (error) {
        console.error("Error fetching biodata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBiodata();
  }, [user.email, axiosSecure]);

  useEffect(() => {
    const fetchSuccessStory = async () => {
      try {
        if (!selfBiodataId) return;
        const response = await axiosSecure.get(
          `/success-story/${selfBiodataId}`
        );
        const successStory = response.data.successStory;

        if (successStory) {
          setSelfBiodataId(successStory.selfBiodataId);
          setPartnerBiodataId(successStory.partnerBiodataId);
          setCoupleImageLink(successStory.coupleImageLink);
          setReview(successStory.review);
          setMarriageDate(successStory.marriageDate); // Set marriage date
          setRating(successStory.rating); // Set rating
        }
      } catch (error) {
        console.error("No existing success story found:", error);
      } finally {
        setLoading(false);
      }
    };

    if (selfBiodataId) {
      fetchSuccessStory();
    }
  }, [selfBiodataId, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosSecure.post("/success-story", {
        selfBiodataId,
        partnerBiodataId,
        coupleImageLink,
        review,
        marriageDate, // Include marriage date in request
        rating, // Include rating in request
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.error || "An error occurred");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-8">
      <h3 className="text-center text-2xl font-bold text-yellow-800">
        Share Your Success Story
      </h3>
      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full md:w-1/2 mx-auto flex flex-col items-center"
      >
        <div className="w-full mb-4">
          <label className="text-lg font-medium text-yellow-800">
            Self Biodata ID:
          </label>
          <input
            type="number"
            className="input input-bordered block mt-2 w-full"
            value={selfBiodataId}
            disabled
            onChange={(e) => setSelfBiodataId(e.target.value)}
            required
          />
        </div>
        <div className="w-full mb-4">
          <label className="text-lg font-medium text-yellow-800">
            Partner Biodata ID:
          </label>
          <input
            type="number"
            className="input input-bordered block mt-2 w-full"
            value={partnerBiodataId}
            onChange={(e) => setPartnerBiodataId(e.target.value)}
            required
          />
        </div>
        <div className="w-full mb-4">
          <label className="text-lg font-medium text-yellow-800">
            Couple Image Link:
          </label>
          <input
            type="text"
            className="input input-bordered block mt-2 w-full"
            value={coupleImageLink}
            onChange={(e) => setCoupleImageLink(e.target.value)}
          />
        </div>
        <div className="w-full mb-4">
          <label className="text-lg font-medium text-yellow-800">Review:</label>
          <textarea
            className="textarea textarea-bordered block mt-2 w-full"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="w-full mb-4">
          <label className="text-lg font-medium text-yellow-800">
            Marriage Date:
          </label>
          <input
            type="date"
            className="input input-bordered block mt-2 w-full"
            value={marriageDate}
            onChange={(e) => setMarriageDate(e.target.value)}
            required
          />
        </div>
        <div className="w-full mb-4">
          <label className="text-lg font-medium text-yellow-800">Rating:</label>
          <input
            type="number"
            className="input input-bordered block mt-2 w-full"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="5"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-800 mt-4 text-white px-4 py-2 font-semibold rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GotMarried;
