import { useState } from "react";
import data from "./data.js";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

const App = () => {
  const [value, setValue] = useState(0);
  const newData = data.slice(0, value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSelect = (e) => {
    setValue(e.target.value);
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="select-input">Paragraphs</label>
        <select
          name=""
          id="select-input"
          className="select-input"
          value={value}
          onChange={handleSelect}
        >
          {numbers.map((num) => {
            return <option key={num}>{num}</option>;
          })}
        </select>
        <button className="btn">generate</button>
      </form>
      <div className="lorem-text">
        {newData.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </section>
  );
};
export default App;
