import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log(`render`);
  return (
    <div>
      <h2>CleanUp Function</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log(`heelo`);

    const intId = setInterval(() => {
      // console.log(`heelo from interval`);
    }, 800);
    return () => {
      clearInterval(intId);
      console.log(`cleanup`);
    };
  }, []);

  return <h1>Hello There</h1>;
};

export default CleanupFunction;
