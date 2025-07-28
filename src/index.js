// src/index.js - Punto de entrada de la aplicación AgroCan
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// Crear el root de React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Configuración opcional para medir performance
// Si quieres medir el rendimiento de tu aplicación, puedes usar:
// import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
//
// function sendToAnalytics(metric) {
//   console.log(metric);
// }
//
// getCLS(sendToAnalytics);
// getFID(sendToAnalytics);
// getFCP(sendToAnalytics);
// getLCP(sendToAnalytics);
// getTTFB(sendToAnalytics);