/* eslint-disable react/prop-types */
import StoryModal from "../../StoryModal";

function SuccessStoryRow({ index, story }) {
  const { selfBiodataId, partnerBiodataId } = story;
  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {index + 1}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {selfBiodataId}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {partnerBiodataId}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <StoryModal story={story} />
      </td>
    </tr>
  );
}

export default SuccessStoryRow;
