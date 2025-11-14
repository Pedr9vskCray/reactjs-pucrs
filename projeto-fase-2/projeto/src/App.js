import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useRef, useState } from "react";
import NavBar from "./components/navBar";
import Home from "./components/home";
import Sobre from "./components/sobre"
import SeriesForm from "./components/cadastrar";
import ListaSeries from "./components/listarSeries";
import AtualizarSerie from "./components/atualizarSeries";

{/* NavBar Pages */}
const paginas = [
  {"path": "/", "text": "Home"},
  {"path": "/sobre", "text": "Sobre"},
  {"path": "/cadastrarseries", "text": "Cadastrar"},
  {"path": "/listadeseries", "text": "Lista de Séries"}
]

{/* API Url */}
const url = "http://localhost:5000/series";

function App(){
  return (



    <BrowserRouter>

    {/* Navegação */}
    <NavBar paginas={paginas}></NavBar>

    {/* Rotas */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/cadastrarseries" element={<SeriesForm />} />
      <Route path="/listadeseries" element={<ListaSeries />} />
      <Route path="/atualizarserie" element={<AtualizarSerie />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;