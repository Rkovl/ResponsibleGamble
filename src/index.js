import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import store from './conponents/slice/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './App';
import Sport from './conponents/SingleSport'
import BasicLayout from './conponents/layout/BasicLayout';
import Sports from './conponents/ManySports'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>

      
        <Router>
        <BasicLayout>
          <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/sport" element={<Sport />}/>
          <Route path="/sports" element={<Sports />}/>
          </Routes>
        </BasicLayout>
        </Router>
      

    </React.StrictMode>
  </Provider>
);

