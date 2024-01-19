import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';

import store from './store';
import { Provider } from 'react-redux';
import {createRoot} from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
