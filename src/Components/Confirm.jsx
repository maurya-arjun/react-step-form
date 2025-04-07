import React from "react";

const Confirm = ({ nextStep, prevStep, values }) => {
  const handleNextClick = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <div>
        <dl>
          <dt>FirstName</dt>
          <dd> {values.firstName} </dd>
          <dt>LastName</dt>
          <dd> {values.lastName} </dd>
          <dt>Email</dt>
          <dd> {values.email} </dd>
          <dt>Occupation</dt>
          <dd> {values.occupation} </dd>
          <dt>City</dt>
          <dd> {values.city} </dd>
          <dt>Bio</dt>
          <dd> {values.bio} </dd>
        </dl>
      </div>
      <div>
        <button
          onClick={handleNextClick}
          className="p-4 bg-blue-500 text-white rounded-sm cursor-pointer"
        >
          Confim & Continue
        </button>
        <button
          onClick={handlePrevClick}
          className="p-4 bg-blue-500 text-white rounded-sm cursor-pointer"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Confirm;
