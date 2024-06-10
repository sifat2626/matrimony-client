/* eslint-disable react/prop-types */
function Filter({
  handleSubmit,
  minAge,
  setMinAge,
  maxAge,
  setMaxAge,
  biodataType,
  setBiodataType,
  division,
  setDivision,
}) {
  return (
    <div className="md:w-64 bg-yellow-900 text-black min-h-screen p-4 rounded-md">
      <form onSubmit={handleSubmit}>
        <label htmlFor="age-range" className="font-medium text-white">
          Age range
        </label>
        <div className="flex items-center mt-2 mb-4 gap-2">
          <div className="">
            <input
              type="text"
              name="minAge"
              className="input input-bordered w-full max-w-xs "
              placeholder="min age"
              value={minAge}
              onChange={(e) => setMinAge(e.target.value)}
            />
          </div>
          <p className="text-white font-medium">-</p>
          <div className="">
            <input
              type="text"
              name="maxAge"
              className="input input-bordered w-full max-w-xs "
              placeholder="max age"
              value={maxAge}
              onChange={(e) => setMaxAge(e.target.value)}
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="age-range" className="font-medium text-white">
            Biodata Type
          </label>
          <select
            name="biodataType"
            className="select select-bordered w-full  mt-2"
            value={biodataType}
            onChange={(e) => setBiodataType(e.target.value)}
          >
            <option value="">Biodata type?</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mt-2">
          <label htmlFor="age-range" className="font-medium text-white">
            Permanent Division
          </label>
          <select
            name="division"
            className="select select-bordered w-full  mt-2"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          >
            <option value="">Permanent Division?</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagram">Chattagram</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>
        <div className="">
          <button
            type="submit"
            className="mt-4 bg-white px-4 py-2 rounded-md font-medium w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
