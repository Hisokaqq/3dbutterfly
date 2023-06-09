import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import logo from './logo-2.png';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<header className="App-header">
    <img className="App-logo" src={logo} alt="logo" />
    </header>
      <div className="canvas-container">
    <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
