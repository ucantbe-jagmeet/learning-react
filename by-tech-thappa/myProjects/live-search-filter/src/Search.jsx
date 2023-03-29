import { React, useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [Img, setImg] = useState();

  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="search and enter..."
          value={Img}
          onChange={inputEvent}
        />
        {Img === "" ? null : <Sresult name={Img} />}
      </div>
    </>
  );
};

export default Search;
