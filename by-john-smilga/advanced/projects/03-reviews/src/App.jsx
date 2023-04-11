import people from "./data.js";
import { useState } from "react";
import { FaBeer } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  console.log(name);
  return (
    <h2>
      Reviews Starter
      <FaBeer className="beer" />
    </h2>
  );
};
export default App;
