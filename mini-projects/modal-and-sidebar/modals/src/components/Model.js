import React from "react";
const Model = ({ modelData }) => {
  const { id, icon, text } = modelData;
  return (
    <>
      <div className=" absolute h-screen w-full bg-indigo-200 flex justify-center items-center opacity-50">
        <div
          className=" relative h-52 w-96 bg-white rounded-lg  flex justify-evenly items-center"
          key={id}
        >
          <p className="text-6xl rounded-full p-3 bg-yellow-600 text-white">
            {icon}
          </p>
          <p className="text-3xl">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Model;
