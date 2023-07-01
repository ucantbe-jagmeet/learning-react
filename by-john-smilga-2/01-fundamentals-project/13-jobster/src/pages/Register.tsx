import React, { useState, useEffect } from "react";
import { FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { ILoginUser, IRegisterInitialState } from "../types";
import { toast } from "react-toastify";
import { useAppSelector, useAppDispatch } from "../store";
import { loginUser, registerUser } from "../features/user/userSlice";
import { AnyAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register: React.FC = () => {
  const [values, setValues] = useState<IRegisterInitialState>(initialState);
  // const { user, isLoading } = useAppSelector((store) => store.user);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error(`Please Fill Out All Fields`);
      return;
    }
    if (isMember) {
      dispatch(
        loginUser({ email: email, password: password }) as unknown as AnyAction
      );
      return;
    }
    dispatch(
      registerUser({
        name: name,
        email: email,
        password: password,
      }) as unknown as AnyAction
    );
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* Name Field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText="Name"
          />
        )}

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

        <p>
          {values.isMember ? "Not a member yet ?" : " Already a member ?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
