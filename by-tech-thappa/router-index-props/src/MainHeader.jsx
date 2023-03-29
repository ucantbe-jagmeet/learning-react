import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const MainHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainHeader;
