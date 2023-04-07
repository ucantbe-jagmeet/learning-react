import React from "react";
import { useState } from "react";
import data from "../data.js";

const useStateBasics = () => {
  // const [Count, setCount] = useState(0);
  const [people, setPeople] = useState(data);

  return (
    <div>
      {people.map((items) => {
        const { id, name } = items;

        return (
          <>
            <div key={id}>
              <h4>{name}</h4>
              <button
                type="button"
                onClick={() =>
                  setPeople(people.filter((person) => person.id !== id))
                }
              >
                Remove
              </button>
            </div>
          </>
        );
      })}
      <button
        type="button"
        className="btn"
        onClick={() => setPeople([])}
        style={{ marginTop: "2rem" }}
      >
        Clear All
      </button>
    </div>
  );
};

export default useStateBasics;
