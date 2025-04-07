import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="p-4 bg-blue-500 text-white rounded-sm cursor-pointer">
        {children}
      </button>
    </div>
  );
};

export default Button;
