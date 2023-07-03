import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store";
import { IUserData } from "../../types";
import { FormRow } from "../../components";
import { updateUser } from "../../features/user/userSlice";
import { AnyAction } from "@reduxjs/toolkit";

const Profile: React.FC = () => {
  const { isLoading, user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState<IUserData>({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(
      updateUser({
        name,
        email,
        lastName,
        location,
      }) as unknown as AnyAction
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
            labelText="Name"
          />
          <FormRow
            type="text"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
            labelText="Last Name"
          />
          <FormRow
            type="text"
            name="email"
            value={userData.email}
            handleChange={handleChange}
            labelText="Email"
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
            labelText="Location"
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Save Changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
