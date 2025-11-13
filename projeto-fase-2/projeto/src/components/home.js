import React from 'react';
import "./styles/home.css"


function Home(){
    return (
        <div className="home-container">
            <div className="home-background">
                <div className="home-card">
                    <h1 className="home-title">Página Inicial</h1>
                    <p className="home-subtitle"><strong>Bem-vindo ao projeto CRUD de séries!</strong></p>
                    <p className="home-text">Gerencie séries assistidas de uma forma fácil e intuitiva.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;