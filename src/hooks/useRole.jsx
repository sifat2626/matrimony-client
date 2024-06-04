import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

function useRole() {
  const axiosSecure = useAxiosSecure();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const { data } = await axiosSecure("/getRole");
        setRole(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, [axiosSecure]);

  return { role, loading, error };
}

export default useRole;
