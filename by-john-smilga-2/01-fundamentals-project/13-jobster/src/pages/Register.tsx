import React, { useState, useEffect } from "react";
import { FormRow, Logo } from "../components";
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
    if (e.target instanceof HTMLInputElement) {
      console.log(e.target.value);
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>login</h3>
        {/* Name Field */}
        <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
          labelText="Name"
        />

        {/* Email Field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="Email"
        />

        {/* Password Field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="Password"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
