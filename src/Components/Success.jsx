import React from "react";

const Success = () => {

    const handleUpperCase = (stringText) => {
        let text = stringText.split(" ");
        let captilizedText = text.map(word => (
            word.charAt(0).toUpperCase() + word.slice(1)
        ))
        return captilizedText.join(" ");
    }

  return (
    <div>
      <h1 className="text-4xl text-blue-400"> {handleUpperCase('Thank you for your submission')} </h1>
      <p className="text-lg py-2">You will get an email with further instruction</p>
    </div>
  );
};

export default Success;
