const inlineCss = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
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

export default book;
