import React, { Fragment } from "react";

const FormUserDetails = ({ nextStep, values, handleChange }) => {
  function handleClick(e) {
    e.preventDefault();
    nextStep();
  }

  return (
    <Fragment>
      <div className="firstName">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="Enter First name"
          name="firstName"
          value={values.firstName}
          onChange={(e) => handleChange("firstName", e)}
        />
      </div>
      <div className="lastName">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Enter Last name"
          name="lastName"
          value={values.lastName}
          onChange={(e) => handleChange("lastName", e)}
        />
      </div>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={values.email}
          onChange={(e) => handleChange("email", e)}
        />
      </div>
      <div>
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
