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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-eu.ssl-images-amazon.com/images/I/61yB0UFlM3L._AC_UL600_SR600,400_.jpg"
      alt="image"
    />
  );
};
const Title = () => {
  const inlineCss = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h2 style={inlineCss}> Grandma's Bag of Stories</h2>;
};

const Author = () => {
  return <h3 style={{ color: "#617d98", fontSize: "0.75rem" }}>Sudha Murty</h3>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
