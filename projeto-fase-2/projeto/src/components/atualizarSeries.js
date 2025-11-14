import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

function AtualizarSerie(){

    // API url
    const url = "http://localhost:5000/series";

    // Receiving the serie to be edited
    const location = useLocation();
    const navigate = useNavigate();
    const serie = location.state?.serie

    // References
    const titleRef = useRef(null);
    const nSeasons = useRef(null);
    const director = useRef(null);
    const productor = useRef(null);
    const category = useRef(null);

    // States
    const [startDate, setStartDate] = useState("")
    const [watchDate, setWatchDate] = useState("")
    
    // Handles
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    }
    
    const handleWatchDateChange = (event) => {
        setWatchDate(event.target.value);
    }

    useEffect(() => {
        if (!serie) return;

        titleRef.current.value = serie.title
        nSeasons.current.value = serie.seasons
        director.current.value = serie.director
        productor.current.value = serie.production
        category.current.value = serie.category
        setStartDate(serie.releaseDate)
        setWatchDate(serie.watchedAt)
    }, []);

    function sendUpdate(){
        const updatedSerie = {
            "id": serie.id,
            "title": titleRef.current.value,
            "seasons": nSeasons.current.value,
            "releaseDate": startDate,
            "director": director.current.value,
            "production": productor.current.value,
            "category": category.current.value,
            "watchedAt": watchDate
        }

        axios.put(url, updatedSerie)
        .then(function () {
            console.log("updated successfully.")
            navigate("/listadeseries")
        })
        .catch(err => console.log(err));
    }

    return(
        <div className="form-div">
          <form onSubmit={(e) => {e.preventDefault(); sendUpdate()}} className="data-form">
            <label><h1>Atualizar Série</h1></label>
            <br/>
            <p>Título:</p>
            <textarea ref={titleRef}></textarea>
            <br/>
            <p>N° de Temporadas:</p>
            <textarea ref={nSeasons}></textarea>
            <br/>
            <p>Data de Lançamento da Temporada:</p>
            <input 
            type="date"
            id="start-date-input"
            value={startDate}
            onChange={handleStartDateChange}
            />
            <br/>
            <p>Diretor:</p>
            <textarea ref={director}></textarea>
            <br/>
            <p>Produtora:</p>
            <textarea ref={productor}></textarea>
            <br/>
            <p>Categoria:</p>
            <textarea ref={category}></textarea>
            <br/>
            <p>Data em que assistiu:</p>
            <input
            type="date"
            id="watch-date-input"
            value={watchDate}
            onChange={handleWatchDateChange}
            />
            <br/>
            <br/>
            <button className="btn-submit">Atualizar Séries</button>
            </form>  
        </div>
    )
}

export default AtualizarSerie;