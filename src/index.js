import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './index.css'; // Global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// Optionally, measure performance
import { reportWebVitals } from './reportWebVitals';
reportWebVitals();
