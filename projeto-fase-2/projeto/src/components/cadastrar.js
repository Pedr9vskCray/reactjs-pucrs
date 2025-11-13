import axios from "axios";
import React from "react";
import { useState, useRef } from "react";
import "./styles/seriesForm.css"

function SeriesForm(){

    // API url
    const url = "http://localhost:5000/series";

    // function for checking for existing ids
    function check_ids() {
        return axios.get(url)
        .then(response => {
            const data = response.data;
            const ids = data.map(element => element.id);
            return ids; 
        })
        .catch(error => {
            console.error(error);
            return [];
        });
    }

    // function for registering new series
    async function cadastrar(dados) {
        const ids = await check_ids();
        const max_id = Math.max(...ids);
        const current_id = max_id + 1;

        // posting the new series

        axios.post(url, {
            "id": current_id,
            "title": dados.title,
            "seasons": dados.seasons,
            "releaseDate": dados.releaseDate,
            "director": dados.director,
            "production": dados.production,
            "category": dados.category,
            "watchedAt": dados.watchedAt
        })
        .then(() => {
            console.log("New series successfully added.")
        })
        .catch(error => {
            console.log(error)
        })
    }

    // function for collecting data and calling the register function
    const addSerie = (e) => {

        e.preventDefault();
        let serie = {
            "title": titleRef.current.value,
            "seasons": nSeasons.current.value,
            "releaseDate": startDate,
            "director": director.current.value,
            "production": productor.current.value,
            "category": category.current.value,
            "watchedAt": watchDate
        }

        cadastrar(serie);

        {/* Clearing Inputs */}

        titleRef.current.value = ""
        nSeasons.current.value = ""
        director.current.value = ""
        productor.current.value = ""
        category.current.value = ""
        setStartDate("")
        setWatchDate("")
    }

    // série de teste

    const dexter = {
        "title": "Dexter",
        "seasons": 8,
        "releaseDate": "2006-10-01",
        "director": "Marcos Siega",
        "production": "The Colleton Company",
        "category": "Drama/Crime",
        "watchedAt": "2015-06-17"
    }

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

    // form for adding new series
    return (
        <div className="form-div">
          <form onSubmit={addSerie}>
            <label><h1>Cadastrar Séries</h1></label>
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
            <button>Cadastrar Série</button>
            </form>  
        </div>
    )
}

export default SeriesForm;
