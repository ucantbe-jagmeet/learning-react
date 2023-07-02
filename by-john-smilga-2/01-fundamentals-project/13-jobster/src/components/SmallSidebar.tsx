import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useAppDispatch, useAppSelector } from "../store";
import { toggleSidebar } from "../features/user/userSlice";
import NavLinks from "./NavLinks";

const SmallSidebar: React.FC = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <>
      <Wrapper>
        <div
          className={
            isSidebarOpen
              ? "sidebar-container show-sidebar"
              : "sidebar-container "
          }
        >
          <div className="content">
            <button className="close-btn" onClick={toggle}>
              <FaTimes />
            </button>
            <header>
              <Logo />
            </header>
            <NavLinks />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SmallSidebar;
