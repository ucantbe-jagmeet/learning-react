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
  return <h2> Grandma's Bag of Stories</h2>;
};

const Author = () => {
  return <h3>Sudha Murty</h3>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
