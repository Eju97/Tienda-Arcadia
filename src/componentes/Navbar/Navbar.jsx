import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import logoArkadia from "../Images/logoArkadia.png"
import "./Navbar.css"
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="agrandarFuente">
            
            <div className="container text-center fondoTitulo">
            <Link to={`/`}>
            <img src={logoArkadia} alt="logo" />
            </Link>
            </div>
            

            <ul className="nav justify-content-center barraDeNavegacion navbar-dark  container">
                
                <li className="nav-item">
                    <Link to={`/`}>
                    <a className="nav-link " >INICIO</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/productos`}>
                    <a className="nav-link" href="#">PRODUCTOS</a>
                    </Link>
                </li>
                <li className="nav-item justify-content-end">
                    <Link to={`/cart`}>
                <a className="nav-link" href="#"><CartWidget/></a>
                </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar