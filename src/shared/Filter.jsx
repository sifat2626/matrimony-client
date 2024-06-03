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
    <div className="w-64 bg-red-200 min-h-screen">
      <form onSubmit={handleSubmit}>
        <label htmlFor="age-range">Age range</label>
        <div className="flex items-center">
          <div className="">
            <input
              type="text"
              name="minAge"
              className="input input-bordered w-full max-w-xs"
              placeholder="min age"
              value={minAge}
              onChange={(e) => setMinAge(e.target.value)}
            />
          </div>
          <p>-</p>
          <div className="">
            <input
              type="text"
              name="maxAge"
              className="input input-bordered w-full max-w-xs"
              placeholder="max age"
              value={maxAge}
              onChange={(e) => setMaxAge(e.target.value)}
            />
          </div>
        </div>
        <div className="">
          <select
            name="biodataType"
            className="select select-bordered w-full max-w-xs"
            value={biodataType}
            onChange={(e) => setBiodataType(e.target.value)}
          >
            <option value="">Biodata type?</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <select
          name="division"
          className="select select-bordered w-full max-w-xs"
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Filter;
