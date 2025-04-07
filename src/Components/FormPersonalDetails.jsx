import React, { Fragment } from "react";

const FormPersonalDetails = ({ nextStep, prevStep, values, handleChange }) => {
  const handleNextClick = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Fragment>
      <div className="occupation">
        <label htmlFor="occupation">Occupation</label>
        <input
          type="text"
          placeholder="Enter Occupation"
          name="occupation"
          value={values.occupation}
          onChange={(e) => handleChange("occupation", e)}
        />
      </div>
      <div className="city">
        <label htmlFor="city">City</label>
        <input
          type="text"
          placeholder="Enter City"
          name="city"
          value={values.city}
          onChange={(e) => handleChange("city", e)}
        />
      </div>
      <div className="bio">
        <label htmlFor="bio">Bio</label>
        <input
          type="bio"
          placeholder="Enter bio"
          name="bio"
          value={values.bio}
          onChange={(e) => handleChange("bio", e)}
        />
      </div>
      <div>
        <button
          onClick={handleNextClick}
          className="p-4 bg-blue-500 text-white rounded-sm cursor-pointer"
        >
          Continue
        </button>
        <button
          onClick={handlePrevClick}
          className="p-4 bg-blue-500 text-white rounded-sm cursor-pointer"
        >
          Back
        </button>
      </div>
    </Fragment>
  );
};

export default FormPersonalDetails;
