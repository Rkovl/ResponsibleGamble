import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import store from './conponents/slice/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

import App from './App';
import Sport from './conponents/SingleSport'
import BasicLayout from './conponents/layout/BasicLayout';
import Sports from './conponents/ManySports'

const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      
        <Router>
        <BasicLayout>
          <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/sport" element={<Sport />}/>
          <Route path="/sports" element={<Sports />}/>
          </Routes>
        </BasicLayout>
        </Router>
      

    </PersistGate>
  </Provider>
);

