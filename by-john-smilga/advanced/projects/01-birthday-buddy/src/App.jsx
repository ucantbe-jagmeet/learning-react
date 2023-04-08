import { useState } from "react";
import data from "./data.js";
import List from "./list.jsx";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} bithdays today</h3>
          <List people={people} />
          <button
            className="btn btn-block"
            type="button"
            onClick={() => setPeople([])}
          >
            Remove all
          </button>
        </section>
      </main>
    </>
  );
};
export default App;
