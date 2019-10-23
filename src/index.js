import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import store from './store';
import newMainProduct from './actions/newMainProduct';
// adding to enable async/await with babel
// const babelRegister = require("babel-core/register");
// const babelPolyfill = require("babel-polyfill");

store.dispatch(newMainProduct(1));

ReactDOM.render(<App />, document.getElementById('app'));
