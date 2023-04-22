import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <div className="section">
        <h2>products</h2>
        <Outlet />
      </div>
    </>
  );
};
export default SharedLayout;
