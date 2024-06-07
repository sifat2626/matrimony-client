/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

function EditBio() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [biodata, setBiodata] = useState({
    biodataType: "",
    name: "",
    profileImage: "",
    dateOfBirth: "",
    height: "",
    weight: "",
    age: "",
    occupation: "",
    race: "",
    fathersName: "",
    mothersName: "",
    permanentDivision: "",
    presentDivision: "",
    expectedPartnerAge: "",
    expectedPartnerHeight: "",
    expectedPartnerWeight: "",
    mobileNumber: "",
  });

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    const fetchBiodata = async () => {
      try {
        const response = await axiosSecure.get(
          `/biodata/byEmail/${user.email}`
        );
        if (response.status === 200) {
          const fetchedBiodata = response.data;
          fetchedBiodata.age = calculateAge(fetchedBiodata.dateOfBirth);
          setBiodata(fetchedBiodata);
        }
      } catch (error) {
        console.error("Error fetching biodata", error);
      }
    };

    fetchBiodata();
  }, [user.email, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosSecure.post("/biodata", biodata);
      console.log("toast");
      toast.success("Biodata updated successfully");
    } catch (error) {
      console.error("Error creating biodata", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBiodata((prevBiodata) => {
      const updatedBiodata = { ...prevBiodata, [name]: value };
      if (name === "dateOfBirth") {
        updatedBiodata.age = calculateAge(value);
      }
      return updatedBiodata;
    });
  };

  return (
    <div>
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="contactEmail"
            value={user.email}
            className="input input-bordered"
            required
            readOnly
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Biodata Type</span>
          </label>
          <select
            name="biodataType"
            className="input input-bordered"
            value={biodata.biodataType}
            onChange={handleChange}
            required
          >
            <option disabled value="">
              Select Biodata Type
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={biodata.name}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Image</span>
          </label>
          <input
            type="text"
            name="profileImage"
            value={biodata.profileImage}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={biodata.dateOfBirth}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Height (cm)</span>
          </label>
          <input
            type="number"
            name="height"
            value={biodata.height}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Weight (kg)</span>
          </label>
          <input
            type="number"
            name="weight"
            value={biodata.weight}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input
            type="number"
            name="age"
            value={biodata.age}
            className="input input-bordered"
            readOnly
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Occupation</span>
          </label>
          <input
            type="text"
            name="occupation"
            value={biodata.occupation}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Race</span>
          </label>
          <select
            name="race"
            className="input input-bordered"
            value={biodata.race}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Race
            </option>
            <option value="Fair">Fair</option>
            <option value="Medium">Medium</option>
            <option value="Brown">Brown</option>
            <option value="Dark">Dark</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Father's Name</span>
          </label>
          <input
            type="text"
            name="fathersName"
            value={biodata.fathersName}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Mother's Name</span>
          </label>
          <input
            type="text"
            name="mothersName"
            value={biodata.mothersName}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Permanent Division</span>
          </label>
          <select
            name="permanentDivision"
            className="input input-bordered"
            value={biodata.permanentDivision}
            onChange={handleChange}
            required
          >
            <option disabled value="">
              Select Permanent Division
            </option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagram">Chattagram</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Present Division</span>
          </label>
          <select
            name="presentDivision"
            className="input input-bordered"
            value={biodata.presentDivision}
            onChange={handleChange}
            required
          >
            <option disabled value="">
              Select Present Division
            </option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagram">Chattagram</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Maymansign">Maymansign</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Expected Partner Age</span>
          </label>
          <input
            type="number"
            name="expectedPartnerAge"
            value={biodata.expectedPartnerAge}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Expected Partner Height (cm)</span>
          </label>
          <input
            type="number"
            name="expectedPartnerHeight"
            value={biodata.expectedPartnerHeight}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Expected Partner Weight (kg)</span>
          </label>
          <input
            type="number"
            name="expectedPartnerWeight"
            value={biodata.expectedPartnerWeight}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={biodata.mobileNumber}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EditBio;
