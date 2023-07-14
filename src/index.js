import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import CountryPage from './routes/CountryPage';
import HomePage from './routes/HomePage'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/country' element={<CountryPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);