import React, { Fragment } from "react";
import Button from "./Button";

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
        <label htmlFor="occupation" className="py-3 lg:hidden">Occupation</label>
        <input
          type="text"
          placeholder="Enter Occupation"
            className="p-3 w-full lg:border-b lg:border-blue-400 lg:outline-0 focus:border-blue-600 rounded-xl border-gray-500 border focus:outline-0 lg:border-0 lg:rounded-none"
          name="occupation"
          value={values.occupation}
          onChange={(e) => handleChange("occupation", e)}
        />
      </div>
      <div className="city mt-2">
        <label htmlFor="city" className="py-3 lg:hidden">City</label>
        <input
          type="text"
          placeholder="Enter City"
            className="p-3 w-full lg:outline-0 lg:border-b lg:border-blue-400 focus:border-blue-600 rounded-xl border-gray-500 border focus:outline-0 lg:border-0 lg:rounded-none"
          name="city"
          value={values.city}
          onChange={(e) => handleChange("city", e)}
        />
      </div>
      <div className="bio mt-2">
        <label htmlFor="bio" className="py-3 lg:hidden">Bio</label>
        <input
          type="bio"
          placeholder="Enter Bio"
            className="p-3 w-full lg:outline-0 lg:border-b lg:border-blue-400 focus:border-blue-600 rounded-xl border-gray-500 border focus:outline-0 lg:border-0 lg:rounded-none"
          name="bio"
          value={values.bio}
          onChange={(e) => handleChange("bio", e)}
        />
      </div>
      <div className="mt-12 text-center space-x-2">
        <Button handleClick={handleNextClick} className="px-8 py-3 bg-blue-500 text-white rounded-sm cursor-pointer">
            Next
        </Button>
        <Button handleClick={handlePrevClick} className="px-8 py-3 bg-blue-500 text-white rounded-sm cursor-pointer">
            Prev
        </Button>
      </div>
    </Fragment>
  );
};

export default FormPersonalDetails;
