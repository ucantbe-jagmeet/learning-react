import React, { useContext } from "react";
import { NavBarContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useContext(NavBarContext);
  //   return `Hello world`;
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p> Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
