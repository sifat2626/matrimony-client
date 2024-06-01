/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Member({ id }) {
  return (
    <div>
      <h3>member</h3>
      <Link to={`/details/${id}`}>View Details</Link>
    </div>
  );
}

export default Member;
