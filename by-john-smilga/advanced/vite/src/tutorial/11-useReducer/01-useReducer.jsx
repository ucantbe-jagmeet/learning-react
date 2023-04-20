import { useState } from "react";
import data from "../../data.js";

const ReducerBasics = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
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
      {people.length > 1 ? (
        <button
          className="btn"
          style={{ margin: "2rem" }}
          onClick={() => setPeople([])}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ margin: "2rem" }}
          onClick={() => setPeople(data)}
        >
          Reset List
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
