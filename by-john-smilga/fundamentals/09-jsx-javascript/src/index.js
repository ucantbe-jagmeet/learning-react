import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const inlineCss = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  const title = `Grandma's Bag of Stories`;
  const author = `Sudha Murty`;
  return (
    <article className="book">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/61yB0UFlM3L._AC_UL600_SR600,400_.jpg"
        alt="image"
      />
      <h2 style={inlineCss}> ${title}</h2>
      <h3 style={{ color: "#617d98", fontSize: "0.75rem" }}>
        ${author.toUpperCase()}
      </h3>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
