import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    // console.log(e.target);
    setValues(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
            labelText="name"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* Email Field */}
        <FormRow
          type="email"
          labelText="Email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* Password Field */}
        <FormRow
          type="password"
          labelText="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );

  return <div>Register</div>;
};

export default Register;
