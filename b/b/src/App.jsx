import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './component/jsxfiles/HomePage';
import Contact from './component/jsxfiles/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="extraPage" element={<Contact />}/>
          <Route path="*" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
