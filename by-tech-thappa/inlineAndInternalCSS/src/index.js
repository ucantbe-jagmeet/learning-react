import React from "react";
import ReactDOM  from "react-dom";
// import "./index.css";


const img1 = "https://picsum.photos/250/300";
const img2 = "https://picsum.photos/150/300";
const img3 = "https://picsum.photos/400/300";
const link = "https://www.youtube.com/";


const heading1 = {
    color: '#fa9191',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0 2px 4px #e9c5',
    margin: '50px 0'
}
const img_div = {
    display: 'flex',
  justifyContent: 'center'
}

const img = {
    marginLeft: '10px',
    width: '250px',
    height: '300px',
}

ReactDOM.render( 
<>
    <h1 className="heading" style={heading1} >CSS Styling And Properties</h1>
    <div className="img_div" style={img_div}>
       
        <img src={img2} style={img} alt="Random images"/> 
        <img src={img1} style={img} alt="Random images"/> 
        <a href={link} target="_black" > 
             <img src={img3} style={img} alt="Random images"/> 
        </a>
    </div>

</>
,document.getElementById('root'));
