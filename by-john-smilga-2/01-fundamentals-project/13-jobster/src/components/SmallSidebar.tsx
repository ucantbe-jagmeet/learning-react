import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useAppDispatch, useAppSelector } from "../store";
import { toggleSidebar } from "../features/user/userSlice";
import links from "../utils/links";

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
            <div className="nav-links">
              {links.map((link) => {
                const { text, path, id, icon } = link;
                return (
                  <NavLink
                    key={id}
                    to={path}
                    className={({ isActive }) =>
                      isActive ? " nav-link active" : "nav-link"
                    }
                  >
                    <span className="icon">{icon}</span>
                    {text}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SmallSidebar;
