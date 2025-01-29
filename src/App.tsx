import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteLayout } from 'common/RouteLayout';
import { TradePage } from 'pages/TradePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<RouteLayout/>} >
        <Route path="/trade" element={<TradePage />} />
        <Route path="/trade/:type" element={<TradePage />} />
        <Route path="/pools" element={<div>pools</div>} />


        <Route path='/' element={<Navigate to='/trade' replace />} />
        <Route path='*' element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
