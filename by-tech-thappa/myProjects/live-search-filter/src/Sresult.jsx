import React from "react";

const Sresult = (props) => {
  const img = `https://source.unsplash.com/400x300/?${props.name}`;
  return (
    <div className="img-div">
      <img src={img} alt="this is image" />
    </div>
  );
};

export default Sresult;
