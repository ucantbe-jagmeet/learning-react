import { useState, useReducer } from "react";
import data from "../../data.js";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions.jsx";
import reducer from "./reducer.jsx";

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

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
