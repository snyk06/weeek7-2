import React from 'react';
import './App.css';
import Nav from './component/nav'; // Assuming the file name is nav.js
import Hero from './component/hero';
import Flight from './component/Flight';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
    <BrowserRouter> 
    <Nav />
    <Routes><Route path="/" element={<Hero />} /> 
    <Route path='/Flight' element={<Flight/>} />
  </Routes>

    </BrowserRouter>
    
    </>
  );
}

export default App;
