import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="agrandarFuente">
            <Link to={`/`}>
            <h1 className="text-center">Tienda Arcadia</h1>
            </Link>
            <ul className="nav justify-content-center navbar-dark bg-dark">

                <li className="nav-item">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <Link to={`/productos`}>
                    <a className="nav-link" href="#">Productos</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sobre Nosotros</a>
                </li>
                <li className="nav-item">                
                    <a className="nav-link" href="#">Contacto</a>                    
                </li>
                <li className="nav-item">
                    <Link to={`/cart`}>
                <a className="nav-link" href="#"><CartWidget/></a>
                </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar