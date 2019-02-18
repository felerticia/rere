import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// REDUX IMPORTS
import { Provider } from "react-redux";
import Store from "./store";
let store = Store();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
