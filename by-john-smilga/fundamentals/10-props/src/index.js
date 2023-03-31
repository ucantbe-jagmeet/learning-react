import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const inlineCss = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};
const title = `Grandma's Bag of Stories`;
const author = `Sudha Murty`;
const img =
  "https://images-eu.ssl-images-amazon.com/images/I/61yB0UFlM3L._AC_UL600_SR600,400_.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      {/* <Book job="developer" /> */}
      {/* <Book title="random title" number={35} /> */}
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2 style={inlineCss}> {props.title}</h2>
      <h3 style={{ color: "#617d98", fontSize: "0.75rem" }}>
        {props.author.toUpperCase()}
      </h3>
      {/* <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p> */}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
