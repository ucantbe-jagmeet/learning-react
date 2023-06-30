import React, { useState, useEffect } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { IRegisterInitialState } from "../types";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register: React.FC = () => {
  const [values, setValues] = useState<IRegisterInitialState>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (event.target instanceof HTMLInputElement) {
      const inputElement = e.target;
      const value = inputElement.value;
      console.log(value);
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>login</h3>
        {/* Name Field */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={values.name}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
