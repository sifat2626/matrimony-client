import { useQuery } from "@tanstack/react-query";
import Filter from "../shared/Filter";
import { axiosCommon } from "../hooks/useAxiosCommon";
import Biodata from "../components/Biodata";
import queryString from "query-string";
import { useEffect, useState } from "react";

function BioDatas() {
  const [search, setSearch] = useState(location.search);
  const parsed = queryString.parse(location.search);

  const [biodataType, setBiodataType] = useState(parsed.biodataType || "");
  const [division, setDivision] = useState(parsed.division || "");
  const [minAge, setMinAge] = useState(parsed.minAge || "");
  const [maxAge, setMaxAge] = useState(parsed.maxAge || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    parsed.minAge = minAge;
    parsed.maxAge = maxAge;
    parsed.biodataType = biodataType;
    parsed.division = division;
    const stringified = queryString.stringify(parsed);
    setSearch(`?${stringified}`);
  };

  const {
    isLoading,
    error,
    data: bioDatas = [],
    refetch,
  } = useQuery({
    queryKey: ["bio-datas", search],
    queryFn: async () => {
      const { data } = await axiosCommon(`/biodatas${search}`);
      return data?.biodatas;
    },
    enabled: false, // Disable automatic refetching
  });

  useEffect(() => {
    refetch();
  }, [search, refetch]);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex items-start">
      <div className="">
        <Filter
          setBiodataType={setBiodataType}
          setDivision={setDivision}
          setMinAge={setMinAge}
          setMaxAge={setMaxAge}
          biodataType={biodataType}
          division={division}
          maxAge={maxAge}
          minAge={minAge}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {bioDatas.map((biodata) => (
          <Biodata key={biodata._id} biodata={biodata} />
        ))}
      </div>
    </div>
  );
}

export default BioDatas;
