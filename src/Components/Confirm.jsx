import React from "react";
import Button from "./Button";

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
      <div className="max-w-xl sm:mx-auto sm:p-16 bg-white sm:shadow-md rounded-lg">
        <dl className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <dt className="font-semibold text-gray-700">First Name</dt>
            <dd className="text-gray-900"> {values.firstName} </dd>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <dt className="font-semibold text-gray-700">Last Name</dt>
            <dd className="text-gray-900"> {values.lastName} </dd>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <dt className="font-semibold text-gray-700">Email</dt>
            <dd className="text-gray-900"> {values.email} </dd>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <dt className="font-semibold text-gray-700">Occupation</dt>
            <dd className="text-gray-900"> {values.occupation} </dd>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <dt className="font-semibold text-gray-700">City</dt>
            <dd className="text-gray-900"> {values.city} </dd>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <dt className="font-semibold text-gray-700">Bio</dt>
            <dd className="text-gray-900"> {values.bio} </dd>
          </div>
        </dl>
      </div>
      <div className="mt-12 text-center space-x-2 space-y-2 sm:space-y-0">
        <Button handleClick={handleNextClick} className="px-8 py-3 bg-blue-500 text-white rounded-sm cursor-pointer">
            Confirm & Continue
        </Button>
        <Button handleClick={handlePrevClick} className="px-8 py-3 bg-blue-500 text-white rounded-sm cursor-pointer">
            Prev
        </Button>
      </div>
    </div>
  );
};

export default Confirm;
