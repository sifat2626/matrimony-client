/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAxiosCommon from "../hooks/useAxiosCommon";
import Story from "../components/Story";

function SuccessStory() {
  const axiosCommon = useAxiosCommon();
  const [stories, setStories] = useState([]);
  useEffect(() => {
    axiosCommon
      .get("/success-stories")
      .then((res) => setStories(res.data.successStories));
  }, []);
  return (
    <div className="max-w-[90%] mx-auto mt-12">
      <h3 className="text-center font-bold text-yellow-800 text-2xl">
        Success Stories
      </h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
        {stories.map((story) => (
          <Story key={story._id} story={story} />
        ))}
      </div>
    </div>
  );
}

export default SuccessStory;
