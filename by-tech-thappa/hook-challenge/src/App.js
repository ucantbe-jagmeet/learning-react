import { React, useState, useEffect } from "react";

function App() {
  const [Num, setNum] = useState(0);

  useEffect(() => {
    // var top = document.querySelector("title");
    // top = `You have Clicked ${Num} Times`;
    document.title = `You have Clicked ${Num} Times`;
  });

  return (
    <>
      <h2>Challenge is to change the title name</h2>
      <button
        onClick={() => {
          setNum(Num + 1);
        }}
      >
        Click Me {Num}
      </button>
    </>
  );
}

export default App;
