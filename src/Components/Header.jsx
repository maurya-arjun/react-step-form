import React from "react";

const Header = ( {step} ) => {
  return (
    <div className="flex items-center justify-center space-x-6">
      <div className="flex flex-col items-center">
        <p className={`w-11 h-11 shrink-0 grow-0 ${step === 1 ? 'bg-blue-600' : 'bg-blue-400'} rounded-full flex justify-center items-center text-white`}>
          1
        </p>
        <p className="mt-2 text-sm text-center whitespace-nowrap">
          User Details
        </p>
      </div>
      <div className={`h-0.5 w-24 ${step === 2 ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
      <div className="flex flex-col items-center">
        <p className={`w-11 h-11 shrink-0 grow-0 ${step === 2 ? 'bg-blue-600' : 'bg-blue-400'} rounded-full flex justify-center items-center text-white`}>
          2
        </p>
        <p className="mt-2 text-sm text-center whitespace-nowrap">
          Personal Details
        </p>
      </div>
      <div className={`h-0.5 w-24 ${step === 3 ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
      <div className="flex flex-col items-center">
        <p className={`w-11 h-11 shrink-0 grow-0 ${step === 3 ? 'bg-blue-600' : 'bg-blue-400'} rounded-full flex justify-center items-center text-white`}>
          3
        </p>
        <p className="mt-2 text-sm text-center whitespace-nowrap">Confirm</p>
      </div>
    </div>
  );
};

export default Header;
