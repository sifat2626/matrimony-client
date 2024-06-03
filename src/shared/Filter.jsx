function Filter() {
  return (
    <div className="w-64 bg-red-200 min-h-screen">
      <label htmlFor="">Age range</label>
      <div className="flex items-center">
        <div className="">
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </div>
        <p>-</p>
        <div className="">
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </div>
      </div>
      <div className="">
        <select className="select select-bordered w-full max-w-xs">
          <option value={""} selected>
            Biodata type?
          </option>
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
        </select>
      </div>
      <select className="select select-bordered w-full max-w-xs">
        <option value={""} selected>
          Permanent Division?
        </option>
        <option value={"Dhaka"}>Dhaka</option>
        <option value={"Chattagram"}>Chattagram</option>
        <option value={"Rangpur"}>Rangpur</option>
        <option value={"Barisal"}>Barisal</option>
        <option value={"Khulna"}>Khulna</option>
        <option value={"Mymensingh"}>Mymensingh</option>
        <option value={"Sylhet"}>Sylhet</option>
      </select>
    </div>
  );
}

export default Filter;
