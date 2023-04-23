import { useState, useCallback } from "react";
import data from "../../data";
import List from "./List";
import slowFunction from "../14-useMemo/slowFunction";
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = slowFunction();
  console.log(value);

  const removePerson = useCallback(
    (id) => {
      const newList = people.filter((person) => person.id !== id);
      setPeople(newList);
    },
    [people]
  );
  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
