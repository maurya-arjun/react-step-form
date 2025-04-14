import React, { Fragment, useState } from "react";
import Button from "./Button";

const FormUserDetails = ({ nextStep, values, handleChange }) => {
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { firstName: "", lastName: "", email: "" };

    if (!values.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    } else if (values.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 charachters";
      isValid = false;
    }

    if (!values.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    } else if (values.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 charcters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(values.email)) {
      newErrors.email = "Please enter valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  function handleClick(e) {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  }

  return (
    <Fragment>
      <div className="firstName">
        <label htmlFor="firstName" className="py-3 lg:hidden">
          First Name
        </label>
        <div className="">
          <input
            type="text"
            placeholder="Enter First name"
            className="p-3 w-full lg:border-b lg:border-blue-400 lg:outline-0 focus:border-blue-600 rounded-xl border-gray-500 border focus:outline-0 lg:border-0 lg:rounded-none"
            name="firstName"
            value={values.firstName}
            onChange={(e) => handleChange("firstName", e)}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1 pl-3"> {errors.firstName} </p>
          )}
        </div>
      </div>
      <div className="lastName mt-2">
        <label htmlFor="lastName" className="py-3 lg:hidden">
          Last Name
        </label>
        <div className="">
          <input
            type="text"
            placeholder="Enter Last name"
            name="lastName"
            className="p-3 w-full lg:outline-0 lg:border-b lg:border-blue-400 focus:border-blue-600 rounded-xl border-gray-500 border focus:outline-0 lg:border-0 lg:rounded-none"
            value={values.lastName}
            onChange={(e) => handleChange("lastName", e)}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1 pl-3"> {errors.lastName} </p>
          )}
        </div>
      </div>
      <div className="email mt-2">
        <label htmlFor="email" className="py-3 lg:hidden">
          Email
        </label>
        <div className="">
          <input
            type="email"
            placeholder="Enter Email"
            className="p-3 w-full lg:outline-0 lg:border-b lg:border-blue-400 focus:border-blue-600 rounded-xl border-gray-500 border focus:outline-0 lg:border-0 lg:rounded-none"
            name="email"
            value={values.email}
            onChange={(e) => handleChange("email", e)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 pl-3"> {errors.email} </p>
          )}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Button
          handleClick={handleClick}
          className="px-8 py-3 bg-blue-500 text-white rounded-sm cursor-pointer"
        >
          Next
        </Button>
      </div>
    </Fragment>
  );
};

export default FormUserDetails;
