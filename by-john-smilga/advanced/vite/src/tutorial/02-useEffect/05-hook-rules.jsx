import React from "react";
import { useEffect, useState } from "react";

const Example = () => {
  const [Condition, setCondition] = useState(true);

  // if condition will fail , use State will be of no use -> dont place hooks inside of if condition
  if (condition) {
    const [state, setstate] = useState(false);
  }

  // dont place use State after this condition
  if (condition) {
    return <h3>Example</h3>;
  }
  // this will also fail, create-react-app will throw bunch of errors in this case
  // if you have multiple returns , dont place useEffect after there returns

  useEffect(() => {
    console.log(`hello there`);
  }, []);

  return <h3>Example</h3>;
};

export default Example;
