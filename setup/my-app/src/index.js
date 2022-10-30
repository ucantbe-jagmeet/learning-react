var React = require('react');
var ReactDOM = require('react-dom');


//by react
// ReactDOM.render('what to show ', 'where to show ', 'callback func');
ReactDOM.render( <h1>HELLO wOrld...(by react)!</h1>, document.getElementById('root') );


//by javaSCript
var h1 = document.createElement('h1');
h1.innerHTML= "HELLO WORLD...(by javascript)";
document.getElementById("root").appendChild(h1);