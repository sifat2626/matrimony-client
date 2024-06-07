import { FaRegIdCard, FaUpload } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";

function HowItWorks() {
  return (
    <div className="mb-4 bg-job py-8">
      <h3 className="text-center mt-16 mb-12 font-bold text-3xl text-yellow-900">
        How It Works
      </h3>
      <div className="bg-yellow-900 py-16 ">
        <div className=" flex justify-center ">
          <div className="bg-white p-2 border-8 border-yellow-200 hover:border-yellow-400 duration-300">
            <FaRegIdCard className="text-4xl" />
          </div>
          <div className="flex items-center">
            <p className="w-16 md:w-32 border-t-8"></p>
          </div>
          <div className="bg-white p-2 border-8 border-yellow-200 hover:border-yellow-400 duration-300">
            <FaUpload className="text-4xl" />
          </div>
          <div className="flex items-center">
            <p className="w-16 md:w-32 border-t-8"></p>
          </div>
          <div className="bg-white p-2 border-8 border-yellow-200 hover:border-yellow-400 duration-300">
            <GiLovers className="text-4xl" />
          </div>
        </div>
        <div className="flex justify-center px-2 md:gap-8 pt-4 font-semibold text-lg text-center text-white -ml-4">
          <div className="">
            <p>Register Your Account</p>
          </div>
          <div className="">
            <p>Upload Your Biodata</p>
          </div>
          <div className="">
            <p>Find Your Match</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
