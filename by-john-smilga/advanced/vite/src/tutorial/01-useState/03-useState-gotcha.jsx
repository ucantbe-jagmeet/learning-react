import React from "react";
import { useState } from "react";

const useStateBasics = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue(value + 1);
    // console.log(value); // here old value will be seen in console log
    setValue((currentState) => {
      const newState = currentState + 1;
      return newState;
    });
    console.log(value);
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
