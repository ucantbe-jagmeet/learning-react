import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  return (
    <>
      <h1>
        Hey! {fname} {lname}, Welcome to the site{" "}
      </h1>
    </>
  );
};

export default User;
