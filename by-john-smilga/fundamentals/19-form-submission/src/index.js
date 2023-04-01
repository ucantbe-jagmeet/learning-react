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
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleForm = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(`Handle for input`);
  };
  const handleBtn = () => {
    alert(`Handle for button`);
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(`Form Submitted`);
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: "10px" }}
          onChange={handleForm}
        />
      </form>
      <button onChange={handleBtn}>Click Me</button>
    </section>
  );
};

const Book = (props) => {
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
