/* eslint-disable react/prop-types */
function ApprovePremiumRow({ user, index, approvePremium }) {
  const { name, email, _id } = user;

  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {index + 1}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {name}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {email}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <button
          onClick={() => approvePremium(_id)}
          className="text-blue-500 hover:underline"
        >
          Approve
        </button>
      </td>
    </tr>
  );
}

export default ApprovePremiumRow;
