import React from "react";
import { useEffect, useState } from "react";

const useEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [Secondvalue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log(`hello from first useEffect`);
  }, []);
  useEffect(() => {
    console.log(`hello from second useEffect`);
  }, []);

  return (
    <div>
      <h1>value: {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
      <h1>Second value: {value}</h1>
      <button className="btn" onClick={() => setSecondValue(Secondvalue + 1)}>
        Second Value
      </button>
    </div>
  );
};

export default useEffectBasics;
