import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { defineCustomElements as defineCalciteElements } from '@esri/calcite-components/dist/loader';

import '@esri/calcite-components/dist/calcite/calcite.css';
import '@arcgis/core/assets/esri/themes/light/main.css';
import './index.css';

defineCalciteElements(window);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
