import React from "react";
import "./styles/SeriesForm.css"
import { useRef, useState } from "react";

function SeriesForm(props){

    const serieList = props.serieList
    const setSerieList = props.setSerieList

    {/* onSubmit */}

    const addSerie = (e) => {

        {/* Id */}

        const maxId = serieList.length > 0 ? Math.max(...serieList.map((s) => s.id)) : 0;
        const newId = maxId + 1;

        e.preventDefault();
        let serie = {
            "id": newId,
            "title": titleRef.current.value,
            "seasons": nSeasons.current.value,
            "releasedate": startDate,
            "director": director.current.value,
            "productor": productor.current.value,
            "category": category.current.value,
            "watchdate": watchDate
        }

        setSerieList([...serieList, serie])

        {/* Clearing Inputs */}

        titleRef.current.value = ""
        nSeasons.current.value = ""
        director.current.value = ""
        productor.current.value = ""
        category.current.value = ""
        setStartDate("")
        setWatchDate("")
    }

    {/* References */}

    const titleRef = useRef(null);
    const nSeasons = useRef(null);
    const director = useRef(null);
    const productor = useRef(null);
    const category = useRef(null);

    {/* States */}

    const [startDate, setStartDate] = useState("")
    const [watchDate, setWatchDate] = useState("")

    {/* Handles */}

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    }

    const handleWatchDateChange = (event) => {
        setWatchDate(event.target.value);
    }

    {/* Form */}

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