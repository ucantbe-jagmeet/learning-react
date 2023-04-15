import React from "react";

const BtnContainer = ({ jobs, currItem, setCurrItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            className={index === currItem ? "job-btn active-btn" : "job-btn"}
            onClick={() => setCurrItem(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
