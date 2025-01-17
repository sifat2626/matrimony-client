import { useQuery } from "@tanstack/react-query";
import Filter from "../shared/Filter";
import { axiosCommon } from "../hooks/useAxiosCommon";
import Biodata from "../components/Biodata";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BioDatas() {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState(location.search);
  const parsed = queryString.parse(location.search);

  const [biodataType, setBiodataType] = useState(parsed.biodataType || "");
  const [division, setDivision] = useState(parsed.division || "");
  const [minAge, setMinAge] = useState(parsed.minAge || "");
  const [maxAge, setMaxAge] = useState(parsed.maxAge || "");
  const [page, setPage] = useState(parsed.page ? parseInt(parsed.page, 10) : 1);
  const [limit, setLimit] = useState(
    parsed.limit ? parseInt(parsed.limit, 10) : 3
  ); // Default items per page

  const handleSubmit = (e) => {
    e.preventDefault();
    parsed.minAge = minAge;
    parsed.maxAge = maxAge;
    parsed.biodataType = biodataType;
    parsed.division = division;
    parsed.page = page;
    parsed.limit = limit;
    const stringified = queryString.stringify(parsed);
    setSearch(`?${stringified}`);
    navigate(`?${stringified}`);
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

  const handlePageChange = (newPage) => {
    setPage(newPage);
    parsed.page = newPage;
    const stringified = queryString.stringify(parsed);
    setSearch(`?${stringified}`);
    navigate(`?${stringified}`);
  };

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-6 items-start p-4 ">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          {bioDatas.map((biodata) => (
            <Biodata key={biodata._id} biodata={biodata} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className="px-4 py-2 bg-yellow-800 text-white font-medium rounded-md"
        >
          Previous
        </button>
        <span className="px-4 py-2">{`Page ${page}`}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          className="px-4 py-2 bg-yellow-800 text-white font-medium rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BioDatas;
