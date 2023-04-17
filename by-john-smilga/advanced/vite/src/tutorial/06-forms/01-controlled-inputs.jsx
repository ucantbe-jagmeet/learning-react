import React from "react";

const ControlledInputs = () => {
  return (
    <form className="form">
      <h4>Control</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" name="" id="name" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" name="" id="email" className="form-input" />
      </div>
      <button className="btn btn-block" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ControlledInputs;
