/* eslint-disable react/prop-types */
function DetailItem({ title, value }) {
  return (
    <div className="flex justify-between mr-24">
      <h5>{title}: </h5>
      <h5>
        <span className="bg-green-200 text-black/80 ml-4 px-2 py-1 rounded-md font-bold">
          {value}
        </span>{" "}
      </h5>
    </div>
  );
}

export default DetailItem;
