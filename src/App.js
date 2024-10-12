// src/App.js
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from "./Router/router";
import { store } from './Redux/Store'
import { Provider } from 'react-redux'
import "./App.css"

function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
