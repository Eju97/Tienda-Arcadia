import React from 'react'
import "./Footer.css"
import instagram from "../Images/instagram.png"
import twitter from "../Images/twitter.png"
import facebook from "../Images/facebook.png"

const Footer = () => {
    return (
            <footer class="container fondoFooter">
                <div class="row">
            <div class="col-lg-12 text-center text-lg-center">
                <h4 class="fw-bold mb-3 mt-5 text-light">Siguenos en nuestras redes</h4>
                <div className="d-flex justify-content-center mt-3">
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="icono de instagram"/></a>
                    <a href="https://twitter.com/home" target="_blank" rel="noreferrer"><img src={twitter} alt="icono de whatsapp"/></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={facebook} alt="icono de facebook"/></a>
                </div>
                <div class="col-12 text-center text-lg-center mb-1">
                <small class="text-white">Tienda Arkadia no se hace responsable de los posibles incidentes</small>
            </div>
            </div>            
                </div>
                <div class="row"/>
            <div class="col-12">
                <hr class="border-top border-light"/>
                </div>
            </footer>
    )
}

export default Footer
