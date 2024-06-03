import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";

function Details() {
  const axiosSecure = useAxiosSecure();
  const [biodata, setBiodata] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axiosSecure(`/biodata/${id}`).then((res) => setBiodata(res.data));
    setLoading(false);
  }, [id]);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h5>{biodata?.name}</h5>
      <Link to={`/checkout/${biodata?.biodataId}`}>Request Contact</Link>
    </div>
  );
}

export default Details;
