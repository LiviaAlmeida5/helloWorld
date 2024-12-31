import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Registrar from './componentes/registrar';
import Login from './componentes/Login';
import Recuperar from './componentes/Recuperar';
import NavBar from './usoComum/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recuperar/>}/>
      </Routes>
      </BrowserRouter>
    </div>
   
  )
}

export default App
