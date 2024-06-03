import { useQuery } from "@tanstack/react-query";
import Filter from "../shared/Filter";
import { axiosCommon } from "../hooks/useAxiosCommon";
import Biodata from "../components/Biodata";

function BioDatas() {
  const {
    isPending,
    error,
    data: bioDatas = [],
  } = useQuery({
    queryKey: ["bio-datas"],
    queryFn: async () => {
      const { data } = await axiosCommon("/biodatas");
      return data?.biodatas;
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="flex items-start">
      <div className="">
        <Filter />
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
