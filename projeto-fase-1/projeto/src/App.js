import React from "react";
import NavBar from "./components/NavBar";
import SeriesForm from "./components/SeriesForm";
import SeriesList from "./components/SeriesList";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useRef, useState } from "react";
import "./components/styles/Main.css"


{/* NavBar Pages */}
const paginas = [
  <Link to="/">Página Inicial</Link>, 
  <Link to="/sobre">Sobre</Link>, 
  <Link to="/cadastrarseries">Cadastrar Séries</Link>, 
  <Link to="/listarseries">Listar de Séries</Link>
]

{/* Home */}
function Home(){
  return (
    <div className="div-pagina-inicial">
      <h1>Página Inicial</h1>
      <h2>Bem vindo ao projeto CRUD de séries!</h2>
      <p style={{"font-size": "1.2rem"}}>Gerencie séries assistidas de uma forma fácil e intuitiva.</p>
    </div>
  )
}

{/* Sobre */}
function About(){
  return (
    <div className="div-pagina-sobre">
      <h1 style={{"display": "flex", "justify-content": "center", "align-items": "center"}}>Sobre</h1>
      <p style={{"font-size": "1.2rem"}}>Este é um projeto de gerenciamento de séries assistidas desenvolvido com React para a disciplina Desenvolvimento de Sistemas Frontend.</p>
      <p style={{"font-size": "1.2rem"}}>Aqui você pode cadastrar, visualizar, editar e excluir séries assistidas.</p>
    </div>
  )
}

{/* Registrar Séries */}
function RegisterSeries({serieList, setSerieList}){

  return (<SeriesForm serieList={serieList} setSerieList={setSerieList}></SeriesForm>)
}

{/* Listar Séries */}
function ListSeries({serieList, setSerieList}){
  return (<SeriesList serieList={serieList} setSerieList={setSerieList}></SeriesList>)
}

function App(){

  {/* Lista de Séries */}
  const [serieList, setSerieList] = useState([])

  return(
    <BrowserRouter>

    {/* Navegação */}
    <NavBar paginas={paginas}></NavBar>

    {/* Rotas */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/cadastrarseries" element={<RegisterSeries serieList={serieList} setSerieList={setSerieList} />} />
      <Route path="/listarseries" element={<ListSeries serieList={serieList} setSerieList={setSerieList} />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;