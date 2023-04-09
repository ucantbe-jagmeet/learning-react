import { useState } from "react";

const ShortCircuitExample = () => {
  //falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("Susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "Default Value"}</h2>
      {text && (
        <div>
          <h2>WhatEver Returns</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* {!text && (
        <div>
          <h2>WhatEver Returns</h2>
          <h2>{name}</h2>
        </div>
      )} */}
      {user && <SomeComponent name={user.name} />}

      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h4>Hello There User {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>Please LOgin</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>SomeComponent Returns</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExample;
