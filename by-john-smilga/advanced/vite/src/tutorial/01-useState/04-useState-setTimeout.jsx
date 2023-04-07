import React from "react";
import { useState } from "react";

const useStateBasics = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setValue((curr) => {
        return curr + 1;
      });
    }, 2000);
  };

  return (
    <>
      <div>
        <h2>{value}</h2>
        <button className="btn" type="button" onClick={handleClick}>
          increase
        </button>
      </div>
    </>
  );
};

export default useStateBasics;
