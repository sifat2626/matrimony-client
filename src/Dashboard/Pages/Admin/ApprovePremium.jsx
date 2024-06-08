import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ApprovePremiumRow from "../../../components/Dashboard/Admin/ApprovePremiumRow";

function ApprovePremium() {
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");

  const {
    isLoading,
    data: { users = [], totalPages = 0 } = { users: [], totalPages: 0 },
    refetch,
  } = useQuery({
    queryKey: ["requestedPremiumUsers", page, pageSize, search],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/all-premium-requests", {
        params: { page, pageSize, search },
      });
      return data;
    },
  });

  const approvePremium = async (id) => {
    await axiosSecure.put(`/update-premium/${id}`, { status: "Premium" }),
      refetch();
    console.log("approved", id);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to the first page on search change
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setPage(1); // Reset to the first page on page size change
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="mt-8">
      <section className="container px-4 mx-auto">
        <div className="flex flex-col mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
            className="p-2 mb-4 border rounded"
          />
          <div className="flex justify-between mb-4">
            <div>
              <label className="mr-2">Page Size:</label>
              <select
                value={pageSize}
                onChange={handlePageSizeChange}
                className="p-2 border rounded"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div>
              <label className="mr-2">Page:</label>
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="p-2 mr-2 border rounded"
              >
                Previous
              </button>
              <span>{page}</span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="p-2 ml-2 border rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Serial No.
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        User Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        User Email
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {users.map((user, i) => (
                      <ApprovePremiumRow
                        key={user._id}
                        index={i}
                        user={user}
                        refetch={refetch}
                        approvePremium={approvePremium}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ApprovePremium;
