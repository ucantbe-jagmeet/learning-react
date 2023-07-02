import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useAppDispatch, useAppSelector } from "../store";

const SmallSidebar: React.FC = () => {
  return (
    <>
      <Wrapper>
        <div className="sidebar-container show-sidebar">
          <div className="content">
            <button className="close-btn" onClick={() => console.log("toggle")}>
              <FaTimes />
            </button>
            <header>
              <Logo />
            </header>
            <div className="nav-links">Navlinks</div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SmallSidebar;
