// Import statements
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './index.css'; // Global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

// Optionally, measure performance
import { reportWebVitals } from './reportWebVitals';

// Create root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// Measure performance
reportWebVitals();
