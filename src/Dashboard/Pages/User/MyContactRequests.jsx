import { useQuery } from "@tanstack/react-query";
import MyContactRequestsRow from "../../../components/Dashboard/User/MyContactRequestsRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function MyContactRequests() {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isPending } = useQuery({
    queryKey: ["my-contact-requests"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/requests/user/all");
      return data;
    },
  });

  // Access the 'allRequests' from the data
  const requests = data?.allRequests || [];

  console.log(requests);

  const handleRemove = async (id) => {
    try {
      await axiosSecure.delete(`remove/${id}`);
      refetch();
    } catch (error) {
      console.error("Failed to remove contact:", error);
    }
  };

  if (isPending) return <p>Loading...</p>;

  return (
    <div className="mt-8">
      <section className="container px-4 mx-auto">
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
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Biodata ID
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Mobile No.
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email
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
                    {requests.map((request, i) => (
                      <MyContactRequestsRow
                        key={i}
                        index={i}
                        request={request}
                        handleRemove={handleRemove}
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

export default MyContactRequests;
