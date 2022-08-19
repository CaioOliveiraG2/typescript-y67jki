// Import stylesheets
import './style.css';

// Write TypeScript code!
let title: string = 'MyApp';
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${title}</h1>
<hr/>
<p>Parágrafo Qualquer...<p/>`;

console.log('Olá, Mundo!');

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
