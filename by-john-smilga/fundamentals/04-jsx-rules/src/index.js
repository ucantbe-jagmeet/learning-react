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
    <>
      <div>
        <h3>Hello People</h3>
        <ul>
          <li>
            <a href="href">Hello WOrld</a>
          </li>
        </ul>
      </div>
      <h2>Hello WOrld</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greet />);
