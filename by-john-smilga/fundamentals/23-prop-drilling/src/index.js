import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const inlineCss = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};

const books = [
  {
    id: 1,
    title: `Grandma's Bag of Stories`,
    author: `Sudha Murty`,
    img: "https://images-eu.ssl-images-amazon.com/images/I/61yB0UFlM3L._AC_UL600_SR600,400_.jpg",
  },
  {
    id: 2,
    title: `Rich dad poor dad`,
    author: `Robert Kiyosaki`,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL600_SR600,400_.jpg",
  },
];

const BookList = () => {
  const someValue = "shakeAndBake";
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
      <SomeComponent someValue={someValue} />
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2 style={inlineCss}> {title.toUpperCase()}</h2>
      <button onClick={displayTitle}> Display Title</button>
      <h4 style={{ color: "#617d98", fontSize: "0.75rem" }}>
        {author.toUpperCase()}
      </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
