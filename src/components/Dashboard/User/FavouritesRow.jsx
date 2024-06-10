/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import { FaTrashCan } from "react-icons/fa6";

function FavouritesRow({ id, index, handleDelete }) {
  const [favourite, setFavourite] = useState([]);
  useEffect(() => {
    axiosSecure(`/biodata/${id}`).then((res) => setFavourite(res.data));
  }, []);

  const { biodataId, name, permanentDivision, occupation } = favourite;
  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {index + 1}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {name}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {biodataId}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {permanentDivision}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {occupation}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <button
          onClick={() => {
            handleDelete(biodataId);
          }}
        >
          <FaTrashCan />
        </button>
      </td>
    </tr>
  );
}

export default FavouritesRow;
