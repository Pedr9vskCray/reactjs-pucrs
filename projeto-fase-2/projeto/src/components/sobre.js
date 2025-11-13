import React from 'react';
import "./styles/sobre.css"


function Sobre(){
    return (
        <div className="home-container">
            <div className="home-background">
                <div className="home-card">
                    <h1 className="home-title">Sobre o Projeto</h1>
                    <p className="home-text">Este é um projeto de gerenciamento de séries assistidas desenvolvido com React para a disciplina Desenvolvimento de Sistemas Frontend.</p>
                    <p className="home-text">Aqui você pode cadastrar, visualizar, editar e excluir séries assistidas.</p>
                    
                </div>
            </div>
        </div>
    );
}

export default Sobre;