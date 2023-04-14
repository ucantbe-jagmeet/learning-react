import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions }) => {
  return (
    <section>
      <div className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
    </section>
  );
};

export default Questions;
