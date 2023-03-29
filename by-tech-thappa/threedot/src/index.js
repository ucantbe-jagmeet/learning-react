var React = require('react');
var ReactDOM = require('react-dom');


//by react
// ReactDOM.render('what to show ', 'where to show ', 'callback func');
ReactDOM.render( <h1>HELLO wOrld...(by react)!</h1>, document.getElementById('root') );


// ... (three dot) or spread or rest operator is used to concat the values in new elements
// It concate the array 
// it can be use with new objects
// destructuring of array


// first case
const arr = [ 'james', 'shakespere'];
const arr2 = [ 1, ...arr, 'writer', 45];

// second case
var shootingGames = [ 'COD','Far Cry','Resident Evil'];
var racingGames = ['Need For Speed', 'Gran Tursimo', 'Burnout'];
var games = [...shootingGames, ...racingGames];

// console.log(arr);
// console.log(arr2);
// console.log(games);


// third case
// here we split the shooting games into subparts
var shootingGames = [ 'COD','Far Cry','Resident Evil'];
var[first , ...remaining] = shootingGames;  // destructuring occurs here

console.log(first);
console.log(remaining);




