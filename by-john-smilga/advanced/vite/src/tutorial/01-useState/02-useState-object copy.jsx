import React from "react";
import { useState } from "react";

const useStateBasics = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "read Books",
  });

  const displayPerson = () => {
    // setPerson({ name: "John", age: 28, hobby: "Screaming at the computer" });
    // setPerson({ name: "Susan" });
    setPerson({ ...person, name: "Susan" });
  };

  const { name, age, hobby } = person;
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys: {hobby}</h3>
      <button className="btn" type="button" onClick={displayPerson}>
        Show john
      </button>
    </>
  );
};

export default useStateBasics;
