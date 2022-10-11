import React from "react";
import ReactDOM  from "react-dom";
import "./index.css";


const img1 = "https://picsum.photos/250/300";
const img2 = "https://picsum.photos/150/300";
const img3 = "https://picsum.photos/400/300";
const link = "https://www.youtube.com/";

ReactDOM.render( 
<>
    <h1 className ="heading">CSS Styling And Properties</h1>
    <div className="img_div" >
       
        <img src={img2} alt="Random images"/> 
        <img src={img1} alt="Random images"/> 
        <a href={link} target="_black" > 
             <img src={img3} alt="Random images"/> 
        </a>
    </div>

</>
,document.getElementById('root'));
