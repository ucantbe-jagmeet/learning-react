import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useAppSelector } from "../store";
import { Logo } from ".";
import NavLinks from "./NavLinks";

const BigSidebar: React.FC = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.user);
  return (
    <>
      <Wrapper>
        <div
          className={
            isSidebarOpen
              ? "sidebar-container"
              : " sidebar-container show-sidebar"
          }
        >
          <div className="content">
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

export default BigSidebar;
