import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages //
import Home from './pages/Home'
import WebDesign from './pages/WebDesign'
import AppDesign from './pages/AppDesign'
import GraphicDesign from './pages/GraphicDesign'
import Company from './pages/Company'
import Locations from './pages/Locations'
import Contact from './pages/Contact'


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/web-design" element={<WebDesign />}></Route>
      <Route path="/app-design" element={<AppDesign />}></Route>
      <Route path="/graphic-design" element={<GraphicDesign />}></Route>
      <Route path="/company" element={<Company />}></Route>
      <Route path="/locations" element={<Locations />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default Router;
