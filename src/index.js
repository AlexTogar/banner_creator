import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from './components/App';
import './style.css';


ReactDOM.render(<App />, document.querySelector('#root'));
console.log(ReactDOMServer.renderToString(<App />));
