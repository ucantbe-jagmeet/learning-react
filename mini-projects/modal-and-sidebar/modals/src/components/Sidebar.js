import React, { useEffect } from "react";
import Title from "./Title";
import Model from "./Model";

const Sidebar = ({
  isSidebarOpen,
  setSidebarOpen,
  setOpenModel,
  openModel,
  Data,
  modelData,
  setModelData,
}) => {
  const handleEvent = (link) => {
    setModelData(link);
    setOpenModel(!openModel);
  };

  useEffect(() => {}, [modelData]);

  return (
    <main className="h-screen w-fit  ease-in duration-200 flex ">
      <div
        className={
          isSidebarOpen
            ? "h-screen text-white w-fit rounded-br-lg cursor-pointer bg-green-300 z-10 "
            : "h-screen  text-green-300 w-fit rounded-br-lg cursor-pointer bg-yellow-600 z-10"
        }
        onMouseEnter={() => setSidebarOpen(!isSidebarOpen)}
        onMouseLeave={() => {
          setSidebarOpen(!isSidebarOpen);
          setOpenModel(openModel === 0);
        }}
      >
        {Data.map((link) => {
          const { id, icon, text } = link;
          return (
            <>
              <div
                key={id}
                className=" px-2 py-4 text-2xl flex border-r-purple-400 border-2 border-t-0 border-l-0 border-b-0 hover:text-red-400 "
                onClick={() => handleEvent(link)}
              >
                <p className="mx-2 text-3xl">{icon}</p>
                {isSidebarOpen ? <Title text={text} /> : null}
              </div>
            </>
          );
        })}
      </div>
      {openModel && <Model modelData={modelData} />}
    </main>
  );
};

export default Sidebar;
