import { FaStar } from "react-icons/fa";

/* eslint-disable react/prop-types */
function Story({ story }) {
  const { marriageDate, rating, coupleImageLink, review } = story;

  return (
    <div className="col-span-1 border-2 border-yellow-800 p-4 rounded-md">
      {coupleImageLink && (
        <img
          src={coupleImageLink}
          alt="Couple"
          className="h-72 w-full object-cover rounded-md"
        />
      )}
      <p className="mt-4 text-yellow-800 font-medium">
        Marriage Date:{" "}
        <span className="text-gray-500 font-semibold">
          {new Date(marriageDate).toLocaleDateString()}
        </span>
      </p>
      <div className="mt-4 text-yellow-800 font-medium flex items-center gap-4">
        <p> Rating: </p>
        <span className="flex gap-2">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} className="text-yellow-500 text-xl" />
          ))}
        </span>
      </div>
      <p className="text-gray-500 font-semibold mt-4">{review}</p>
    </div>
  );
}

export default Story;
