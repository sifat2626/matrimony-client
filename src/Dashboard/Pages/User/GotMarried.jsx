import { useState, useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const GotMarried = () => {
  const axiosSecure = useAxiosSecure();

  // State variables to hold form inputs and feedback messages
  const [selfBiodataId, setSelfBiodataId] = useState("");
  const [partnerBiodataId, setPartnerBiodataId] = useState("");
  const [coupleImageLink, setCoupleImageLink] = useState("");
  const [review, setReview] = useState("");
  const [message, setMessage] = useState(""); // State variable to hold feedback message

  // State to track if loading existing data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuccessStory = async () => {
      try {
        // Fetch success story for the current user (you might need to adjust the endpoint)
        const response = await axiosSecure.get(
          `/success-story/${selfBiodataId}`
        );
        const successStory = response.data.successStory;

        if (successStory) {
          setSelfBiodataId(successStory.selfBiodataId);
          setPartnerBiodataId(successStory.partnerBiodataId);
          setCoupleImageLink(successStory.coupleImageLink);
          setReview(successStory.review);
        }
      } catch (error) {
        console.error("No existing success story found:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuccessStory();
  }, [selfBiodataId, axiosSecure]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to the backend to create or update the success story
      const response = await axiosSecure.post("/success-story", {
        selfBiodataId,
        partnerBiodataId,
        coupleImageLink,
        review,
      });
      setMessage(response.data.message); // Set success message from response
    } catch (error) {
      setMessage(error.response?.data?.error || "An error occurred"); // Set error message from response
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  return (
    <div>
      <h1>Share Your Success Story</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Self Biodata ID:</label>
          <input
            type="number"
            value={selfBiodataId}
            onChange={(e) => setSelfBiodataId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Partner Biodata ID:</label>
          <input
            type="number"
            value={partnerBiodataId}
            onChange={(e) => setPartnerBiodataId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Couple Image Link:</label>
          <input
            type="text"
            value={coupleImageLink}
            onChange={(e) => setCoupleImageLink(e.target.value)}
          />
        </div>
        <div>
          <label>Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>} {/* Display feedback message */}
    </div>
  );
};

export default GotMarried;
