import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Registrar from "./pages/Registrar";
import Login from './pages/Login';
import Recuperar from './pages/Recuperar';
import Populares from './pages/Populares';
import Administrador from './pages/Administrador';
import Menu from './pagesMobile/Menu';
import Principal from './pages/Principal';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='registrar' element={<Registrar/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='recuperar' element={<Recuperar/>}/>
          <Route path='populares' element={<Populares/>}/>
          <Route path='administrador' element={<Administrador/>}/>
          <Route path='principal' element={<Principal/>}/>
          <Route path='menu' element={<Menu/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
