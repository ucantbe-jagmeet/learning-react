import React from "react";
import ReactDOM from "react-dom/client";

// function Greet() {
//   return <h2> My First Component</h2>;
// }

// function Greet() {
//   return React.createElement("h2", {}, `hello world`);
// }

function Greet() {
  return (
    <div>
      <h2>My first Component</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greet />);
