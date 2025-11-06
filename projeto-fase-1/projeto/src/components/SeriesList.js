import React from "react";
import { useRef, useState } from "react";
import "./styles/SeriesList.css"

function SeriesList(props){

    const serieList = props.serieList
    const setSerieList = props.setSerieList

    const [editingId, setEditingId] = useState(null);
    const [editedSerie, setEditedSerie] = useState({});


    {/* Deletar Serie */}
    const handleDelete = (id) => {
        setSerieList(serieList.filter((serie) => serie.id !== id));
    };

    {/* Entrar na Edição */}
    const handleEdit = (serie) => {
        setEditingId(serie.id);
        setEditedSerie({ ...serie });
    };

    {/* Atualiza os Campos */}
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedSerie((prev) => ({ ...prev, [name]: value }));
    };

    {/* Salvamento */}
    const handleSave = () => {
        const updatedList = serieList.map((s) =>
        s.id === editingId ? editedSerie : s
        );
        setSerieList(updatedList);
        setEditingId(null);
    };

    return (
        <div className="series-list">
            <h1>Lista de Séries</h1>
            <br/>
            {serieList.map((serie) => (
              <div key={serie.id} className="single-serie-div">
                {editingId === serie.id ? (
                  <>
                    <input
                      name="title"
                      value={editedSerie.title}
                      onChange={handleChange}
                    />
                    <input
                      name="seasons"
                      value={editedSerie.seasons}
                      onChange={handleChange}
                    />
                    <input
                      type="date"
                      name="releasedate"
                      value={editedSerie.releasedate}
                      onChange={handleChange}
                    />
                    <input
                      name="director"
                      value={editedSerie.director}
                      onChange={handleChange}
                    />
                    <input
                      name="productor"
                      value={editedSerie.productor}
                      onChange={handleChange}
                    />
                    <input
                      name="category"
                      value={editedSerie.category}
                      onChange={handleChange}
                    />
                    <input
                      type="date"
                      name="watchdate"
                      value={editedSerie.watchdate}
                      onChange={handleChange}
                    />

                    <button onClick={handleSave}>Salvar</button>
                    <button onClick={() => setEditingId(null)}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <span>- {serie.id} </span>
                    <span>- {serie.title} </span>
                    <span>- {serie.seasons} </span>
                    <span>- {serie.releasedate} </span>
                    <span>- {serie.director} </span>
                    <span>- {serie.productor} </span>
                    <span>- {serie.category} </span>
                    <span>- {serie.watchdate} </span>

                    <button className="btn-edit" onClick={() => handleEdit(serie)}>Editar</button>
                    <button className="btn-delete" onClick={() => handleDelete(serie.id)}>Excluir</button>
                  </>
                )}
              </div>
            ))}
        </div>
    )
}

export default SeriesList;