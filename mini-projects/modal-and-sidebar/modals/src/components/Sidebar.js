import React from "react";
import Title from "./Title";
import Model from "./Model";

const Sidebar = ({
  isSidebarOpen,
  setSidebarOpen,
  setOpenModel,
  openModel,
  Data,
}) => {
  return (
    <main className="h-screen w-fit  ease-in duration-200 flex ">
      <div
        className={
          isSidebarOpen
            ? "h-screen text-white w-fit rounded-br-lg cursor-pointer bg-green-300 z-10 "
            : "h-screen  text-purple-600  w-fit rounded-br-lg cursor-pointer bg-blue-200 z-10"
        }
        onMouseEnter={() => setSidebarOpen(!isSidebarOpen)}
        onMouseLeave={() => {
          setSidebarOpen(!isSidebarOpen);
          setOpenModel(openModel === false);
        }}
      >
        {Data.map((link) => {
          const { id, icon, text } = link;
          return (
            <>
              <div
                key={id}
                className=" px-2 py-4 text-2xl flex border-r-purple-400 border-2 border-t-0 border-l-0 border-b-0 hover:text-red-400 "
                onClick={() => setOpenModel(!openModel)}
              >
                <p className="mx-2 text-3xl">{icon}</p>
                {isSidebarOpen ? <Title text={text} /> : null}
              </div>
            </>
          );
        })}
      </div>
      {openModel && <Model Data={Data} />}
    </main>
  );
};

export default Sidebar;
