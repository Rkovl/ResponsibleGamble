import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import store from './slice/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './App';
import BasicLayout from './conponents/layout/BasicLayout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>

      <BasicLayout>
        <Router>
          <Routes>
          <Route path="/" element={<App />}/>
          </Routes>
        </Router>
      </BasicLayout>

    </React.StrictMode>
  </Provider>
);

