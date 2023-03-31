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
    title: `Grandma's Bag of Stories`,
    author: `Sudha Murty`,
    img: "https://images-eu.ssl-images-amazon.com/images/I/61yB0UFlM3L._AC_UL600_SR600,400_.jpg",
  },
  {
    title: `Rich dad poor dad`,
    author: `Robert Kiyosaki`,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL600_SR600,400_.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { title, img, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author, children } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2 style={inlineCss}> {title.toUpperCase()}</h2>
      <h4 style={{ color: "#617d98", fontSize: "0.75rem" }}>
        {author.toUpperCase()}
      </h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
