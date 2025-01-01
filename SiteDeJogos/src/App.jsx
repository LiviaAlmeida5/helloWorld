import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Registrar from "./componentes/Registrar";
import Login from './componentes/Login';
import Recuperar from './componentes/Recuperar';
import NavBar from './usoComum/NavBar';
import Footer from './usoComum/Footer';
import Populares from './componentes/Populares';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registrar/>} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
