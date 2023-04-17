import React from "react";
import avatar from "./avatar.png";
export function Person({ name, nickName, images }) {
  // const img = images[0].small.url;
  // const img = images && images[0] && images[0].small && images[0].small.url;
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "100px" }} />

      <h4> {name}</h4>
      {nickName ? <p>NickName : {nickName}</p> : ""}
    </div>
  );
}
