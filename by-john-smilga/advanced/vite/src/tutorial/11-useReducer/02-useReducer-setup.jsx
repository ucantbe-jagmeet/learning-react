import { useState, useReducer } from "react";
import data from "../../data.js";

const defaultState = {
  people: data,
};

const reducer = () => {};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    // setPeople([])
  };
  const resetList = () => {
    // setPeople(data)
  };

  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => removeItem(id)}
              style={{ marginBottom: "2rem" }}
            >
              remove
            </button>
          </div>
        );
      })}
      {state.people.length > 1 ? (
        <button className="btn" style={{ margin: "2rem" }} onClick={clearList}>
          clear items
        </button>
      ) : (
        <button className="btn" style={{ margin: "2rem" }} onClick={resetList}>
          Reset List
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
