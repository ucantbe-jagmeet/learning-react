import React from "react";
import ReactDOM from "react-dom/client";

function Greet() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => {
  return <h2> William Shakespear</h2>;
};

const Message = () => {
  return <p>this is message</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greet />);
