import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';  // Importing the styles (optional if you have a separate CSS file)
import App from './App'; // Importing the main App component
import { Provider } from 'react-redux';
import store from './redux/store'; // Import the Redux store

// Rendering the App component into the root DOM element
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
