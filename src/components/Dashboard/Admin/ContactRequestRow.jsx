/* eslint-disable react/prop-types */
import { FaTrashCan } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";

function ContactRequestRow({ request, index, handleAccept, handleReject }) {
  const { requestTime, userEmail, contactId } = request;

  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {index + 1}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {new Date(requestTime).toLocaleString()}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {userEmail}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {contactId}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <Link to={`/details/${contactId}`}>View Biodata</Link>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <button onClick={() => handleAccept(userEmail, contactId)}>
          <GiConfirmed />
        </button>
        <button onClick={() => handleReject(userEmail, contactId)}>
          <FaTrashCan />
        </button>
      </td>
    </tr>
  );
}

export default ContactRequestRow;
