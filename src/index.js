import React from 'react';
import ReactDOM from 'react-dom';
import './scssLibs/fonts.css';
import './scssLibs/mediaQueries.css';
import './tailwind.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
