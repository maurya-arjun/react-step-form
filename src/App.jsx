import { Fragment, useState } from "react";
import Header from "./Components/Header";
import UserForm from "./Components/UserForm";

function App() {
    const [step, setStep] = useState(1);

  return (
    <Fragment>
      <div className="mx-auto mt-32 hidden sm:block">
        <div className="w-full mx-auto max-w-lg">
            <Header step={step} />
        </div>
      </div>
      <div className="mx-5 lg:mx-auto rounded-lg mt-28 sm:mt-15 lg:w-2/3 lg:max-w-2xl p-15 font-serif shadow-2xl">
        <UserForm step={step} setStep={setStep} />
      </div>
    </Fragment>
  );
}

export default App;
