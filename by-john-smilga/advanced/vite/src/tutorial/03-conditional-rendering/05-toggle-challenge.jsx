import { useState } from "react";

const toggleChallenge = () => {
  const [Value, setValue] = useState(false);

  const toggleAlert = () => {
    if (Value) {
      setValue(false);
      return;
    }
    setValue(true);
  };

  return (
    <div>
      <h2>Toggle Challenge</h2>
      <button className="btn" onClick={() => setValue(!Value)}>
        {Value ? "add" : "edit"}
      </button>
      {Value ? <Alert /> : <Alert1 />}
      {/* {Value || <Alert1 />} */}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Add Track</div>;
};
const Alert1 = () => {
  return <div className="alert alert-success">Edit Your Track</div>;
};

export default toggleChallenge;
