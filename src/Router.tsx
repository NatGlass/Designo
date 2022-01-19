import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages //
import Home from './pages/Home'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default Router;
