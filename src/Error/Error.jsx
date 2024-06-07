import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
function Error() {
  return (
    <section className="bg-black/20 dark:bg-gray-900 ">
      <div className="flex flex-col justify-center items-center text-center h-screen">
        <p className="text-6xl font-bold text-yellow-900 ">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
          We can’t find that page
        </h1>
        <p className="mt-4 text-xl font-medium">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to={"/"}
          className="bg-yellow-900 text-white px-6 py-2 rounded-md mt-4 font-semibold text-xl"
        >
          Take me home
        </Link>
      </div>
    </section>
  );
}

export default Error;
