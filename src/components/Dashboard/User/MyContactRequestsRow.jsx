/* eslint-disable react/prop-types */
import { FaTrashCan } from "react-icons/fa6";

function MyContactRequestsRow({ request, index, handleRemove }) {
  const { name, biodataId, status, mobileNumber, contactEmail } = request;
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
        {status}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {mobileNumber}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {contactEmail}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <button
          onClick={() => {
            handleRemove(biodataId);
          }}
        >
          <FaTrashCan />
        </button>
      </td>
    </tr>
  );
}

export default MyContactRequestsRow;
