import React from "react";
import { useState } from "react";
import data from "../data.js";

const useStateBasics = () => {
  // const [Count, setCount] = useState(0);
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    console.log(data);
  };

  return (
    <div>
      {people.map((items) => {
        const { id, name } = items;

        return (
          <>
            <div key={id}>
              <h4>{name}</h4>
              <button type="button" onClick={handleClick}>
                Remove
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default useStateBasics;
