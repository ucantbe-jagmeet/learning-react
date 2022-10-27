var React = require('react');
var ReactDOM = require('react-dom');


//by react
// ReactDOM.render('what to show ', 'where to show ', 'callback func');
// ReactDOM.render( 
// <div>
//     <h1>HELLO wOrld...(by react)!</h1>
//     <p>This is React tutorial </p>
//     <h2>Fragments</h2>
// </div>, document.getElementById('root') );

// ye jo humne div bnaya hai na ye index.html mei edit ho rha hai 
//hum isko inspection krke dekh skte hai console mei

// toh ek node extra badh rha hai , aur FLEX , grid use krte time dikkat hoti hai ... so hum react. fragment ka use krte hai

ReactDOM.render( 
    <>
        <h1>HELLO wOrld...(by react)!</h1>
        <p>This is React tutorial </p>
        <h2>Fragments</h2>
    </>, document.getElementById('root') );

// fragment is little faster than div because no extra node is created
// React.fragment ka syntactic sugar form bhi hai "empty brackets : <>"