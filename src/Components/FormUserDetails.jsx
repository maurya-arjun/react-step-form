import React, { Fragment } from "react";

const FormUserDetails = ({ nextStep, values, handleChange }) => {
  function handleClick(e) {
    e.preventDefault();
    nextStep();
  }

  return (
    <Fragment>
      <div className="firstName">
        <label htmlFor="firstName" className="py-3 lg:hidden">First Name</label>
        <div className="">
            <input
            type="text"
            placeholder="Enter First name"
            className="p-3 outline-1 w-full lg:border-b lg:border-blue-500 lg:outline-0 focus:border-blue-600"
            name="firstName"
            value={values.firstName}
            onChange={(e) => handleChange("firstName", e)}
            />
        </div>
      </div>
      <div className="lastName mt-2">
        <label htmlFor="lastName" className="py-3 lg:hidden">Last Name</label>
        <div className="">
            <input
            type="text"
            placeholder="Enter Last name"
            name="lastName"
            className="p-3 outline-1 w-full lg:outline-0 lg:border-b lg:border-blue-500 focus:border-blue-600"
            value={values.lastName}
            onChange={(e) => handleChange("lastName", e)}
            />
        </div>
      </div>
      <div className="email mt-2">
        <label htmlFor="email" className="py-3 lg:hidden">Email</label>
        <div className="">
            <input
            type="email"
            placeholder="Enter Email"
            className="p-3 outline-1 w-full lg:outline-0 lg:border-b lg:border-blue-500 focus:border-blue-600"
            name="email"
            value={values.email}
            onChange={(e) => handleChange("email", e)}
            />
        </div>
      </div>
      <div className="mt-12 text-center">
        <button
          onClick={handleClick}
          className="p-4 bg-blue-500 text-white rounded-sm cursor-pointer"
        >
          Continue
        </button>
      </div>
    </Fragment>
  );
};

export default FormUserDetails;
