import { Link } from "react-router-dom";

function Biodata({ biodata }) {
  const {
    _id,
    biodataId,
    biodataType,
    profileImage,
    permanentDivision,
    age,
    occupation,
  } = biodata;
  return (
    <div className="border p-4 rounded-md col-span-1">
      <h4>{biodataId}</h4>
      <h5>{biodataType}</h5>
      <div className="">
        <img src={profileImage} alt="" />
      </div>
      <p>{permanentDivision}</p>
      <p>{age}</p>
      <p>{occupation}</p>
      <Link to={`/details/${_id}`}>View Details</Link>
    </div>
  );
}

export default Biodata;
