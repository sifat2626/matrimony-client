/* eslint-disable react/no-unescaped-entities */

import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function EditBio() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const biodata = {
      contactEmail: user.email, // Use user.email for contactEmail and ensure it matches schema
      biodataType: form.biodataType.value,
      name: form.name.value,
      profileImage: form.profileImage.value,
      dateOfBirth: form.dateOfBirth.value,
      height: parseInt(form.height.value, 10), // Ensure height is a number
      weight: parseInt(form.weight.value, 10), // Ensure weight is a number
      age: parseInt(form.age.value, 10), // Ensure age is a number
      occupation: form.occupation.value,
      race: form.race.value,
      fathersName: form.fathersName.value,
      mothersName: form.mothersName.value,
      permanentDivision: form.permanentDivision.value,
      presentDivision: form.presentDivision.value,
      expectedPartnerAge: parseInt(form.expectedPartnerAge.value, 10) || null, // Ensure expected partner age is a number or null
      expectedPartnerHeight:
        parseInt(form.expectedPartnerHeight.value, 10) || null, // Ensure expected partner height is a number or null
      expectedPartnerWeight:
        parseInt(form.expectedPartnerWeight.value, 10) || null, // Ensure expected partner weight is a number or null
      mobileNumber: form.mobileNumber.value,
    };

    try {
      const result = await axiosSecure.post("/biodata", biodata);
      if (result.status === 200) {
        toast.success("Biodata updated successfully");
        e.target.reset();
      }
    } catch (error) {
      console.error("Error creating biodata", error);
    }
  };

  return (
    <div>
      <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            className="input input-bordered"
            required
            readOnly
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Biodata Type</span>
          </label>
          <select name="biodataType" className="input input-bordered" required>
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
            placeholder="Name"
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
            placeholder="Profile Image URL"
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
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Height (cm)</span>
          </label>
          <input
            type="number"
            name="height"
            placeholder="Height in cm"
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
            placeholder="Weight in kg"
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
            placeholder="Age"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Occupation</span>
          </label>
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Race</span>
          </label>
          <input
            type="text"
            name="race"
            placeholder="Race"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Father's Name</span>
          </label>
          <input
            type="text"
            name="fathersName"
            placeholder="Father's Name"
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
            placeholder="Mother's Name"
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
            required
          >
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
            <span className="label-text">Present Division</span>
          </label>
          <select
            name="presentDivision"
            className="input input-bordered"
            required
          >
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
            placeholder="Expected Partner Age"
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
            placeholder="Expected Partner Height in cm"
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
            placeholder="Expected Partner Weight in kg"
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
            placeholder="Mobile Number"
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
