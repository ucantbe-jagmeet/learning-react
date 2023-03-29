var React = require('react');
var ReactDOM = require('react-dom');


// by react
// ReactDOM.render('what to show ', 'where to show ', 'callback func');
// ReactDOM.render( <h1>HELLO wOrld...(by react)!</h1>, document.getElementById('root') );


// by javaSCript
// var h1 = document.createElement('h1');
// h1.innerHTML= "HELLO WORLD...(by javascript)";
// document.getElementById("root").appendChild(h1);

// ReactDOM.render( <div><h1>HELLO wOrld...(by react)!</h1>
//                  <p>This is React tutorial</p></div>,
//                  document.getElementById('root') );

// ----> render method takes only single jsx element so we enclodes h1 and p tag into div element so render method read it as a single element

// another method to add multiple elements is that we can create an array of elements (this only works in react version 16)

ReactDOM.render( [<h1>HELLO wOrld...(by react)!</h1>,
                 <p>This is React tutorial </p>],
                 document.getElementById('root') );