// Open REPL: In the terminal type node
// To run this outside the browser. In the terminal type: $ node index.js.

// use extra package: $ npm init
// $ npm install superheroes

console.log("Hello world")


const superheroes = require('superheroes');
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
var mySupName = superheroes.random();
//=> 'Spider-Ham'

console.log(mySupName)
