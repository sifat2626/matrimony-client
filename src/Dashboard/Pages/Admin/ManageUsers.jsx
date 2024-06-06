import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function ManageUsers() {
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");

  const {
    isLoading,
    data: { users = [], totalPages } = { users: [], totalPages: 0 },
    refetch,
  } = useQuery({
    queryKey: ["users", page, pageSize, search],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/all-users", {
        params: { page, pageSize, search },
      });
      return data;
    },
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(e.target.value);
  };

  const handlePremiumStatusChange = async (id, status) => {
    try {
      await axiosSecure.put(`/update-premium/${id}`, { status });
      refetch();
    } catch (error) {
      console.error("Error updating premium status", error);
    }
  };

  const handleRoleChange = async (id, role) => {
    try {
      await axiosSecure.put(`/update-role/${id}`, { role });
      refetch();
    } catch (error) {
      console.error("Error updating role", error);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
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
                        Premium Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {users.map((user, index) => (
                      <tr key={user._id}>
                        <td className="py-4 px-4 text-sm font-medium text-gray-900 dark:text-white">
                          {(page - 1) * pageSize + index + 1}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-500 dark:text-gray-400">
                          {user.name}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-500 dark:text-gray-400">
                          {user.email}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-500 dark:text-gray-400">
                          <div>
                            <select
                              value={user.premiumStatus}
                              onChange={(e) =>
                                handlePremiumStatusChange(
                                  user._id,
                                  e.target.value
                                )
                              }
                              className="p-2 border rounded"
                            >
                              <option value="Regular">Regular</option>
                              <option value="Premium">Premium</option>
                            </select>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-500 dark:text-gray-400">
                          <div>
                            <select
                              value={user.role}
                              disabled={user.role === "admin"}
                              onChange={(e) =>
                                handleRoleChange(user._id, e.target.value)
                              }
                              className="p-2 border rounded"
                            >
                              <option value="user">User</option>
                              <option value="admin">Admin</option>
                            </select>
                          </div>
                        </td>
                      </tr>
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

export default ManageUsers;
