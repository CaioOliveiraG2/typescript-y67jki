// Import stylesheets
import './style.css';

// Write TypeScript code!
let title: string = 'Tabata';
document.getElementById('app.title').innerHTML = title;

let counter: number = 21;
let rest: number = 10;
let ciclos: number = 8;

let intervalId = setInterval(() => {
  if (counter >= 1 && ciclos >= 8) {
    counter--;}

  else if (counter <= 1 && ciclos >= 8) {
    rest--;}

  

  
  let counterDiv = document.getElementById('app.counter');
  counterDiv.innerHTML = counter.toString();

  let restDiv = document.getElementById('app.rest');
  restDiv.innerHTML = rest.toString();

  let ciclosDiv = document.getElementById('app.ciclos');
  ciclosDiv.innerHTML = ciclos.toString();
}, 100);

/*{if else (counter >= 19) rest = rest ++;
  let restDiv = document.getElementById('ap.rest');
  restDiv.innerHTML = rest.toString();}*/
