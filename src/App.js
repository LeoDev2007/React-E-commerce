import React from 'react';
import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Product from './components/Product'
import Nav from './components/Nav'



function App() {

 
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav />
        <Routes>
            <Route path='*' exact element={<Home/>} />
            <Route path='/Product' element={<Product />} />
        </Routes>
     
     </BrowserRouter>
     
    </div>
  );
}

export default App;
