import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = ( {step, setStep} ) => {
    
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  // Proceed to next step
  const nextStep = () => {
    setStep((step) => step + 1);
  };

  // Go back to previous step
  const prevStep = () => {
    setStep((step) => step - 1);
  };

  // Handle input change
  const handleChange = (input, e) => {
    const value = e.target.value;
    switch (input) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "occupation":
        setOccupation(value);
        break;
      case "city":
        setCity(value);
        break;
      case "bio":
        setBio(value);
        break;
      default:
        break;
    }
  };

  const values = { firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 4:
      return <Success />;
    default:
      break;
  }
};

export default UserForm;
