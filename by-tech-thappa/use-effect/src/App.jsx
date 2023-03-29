//it works when render component renders it component
import React, { useState, useEffect } from "react";

function App() {
  const [Num, setNum] = useState(0);
  const [Nums, setNums] = useState(0);
  useEffect(() => {
    alert("I am Clicked");
  }, [Num]);
  return (
    <>
      <button
        onClick={() => {
          setNum(Num + 1);
        }}
      >
        Click ME {Num}
      </button>
      <br />
      <button
        onClick={() => {
          setNums(Nums + 1);
        }}
      >
        Click ME {Nums}
      </button>
    </>
  );
}

export default App;
