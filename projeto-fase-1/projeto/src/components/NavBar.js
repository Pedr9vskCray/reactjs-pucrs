import React from "react";
import "./styles/NavBar.css"

function NavBar(props){
    const paginas = props.paginas

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul className="nav-links">
                    {paginas.map((pagina, index) => (
                        <li key={index}>
                            {pagina}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;