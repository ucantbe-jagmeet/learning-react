import React from "react";
import { useState } from "react";

const useStateBasics = () => {
  const [Count, setCount] = useState(0);
  const handleClick = () => {
    setCount(Count + 1);
    // setCount("Pants");
  };

  return (
    <div>
      <h4>You Clicked {Count} Times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        {" "}
        click Me
      </button>
    </div>
  );
};

export default useStateBasics;
