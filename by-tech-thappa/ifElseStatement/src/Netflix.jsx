import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";


const Netflix = () =>
{

  return (
    Sdata.map( (val) =>
    {
           return (
            <Card 
            key = {val.id}
            imgsrc = {val.imgsrc}
            title = {val.title}
            sname = {val.sname}
            link = {val.link}
        />
           );
           
    })
  );

}

 export default Netflix;