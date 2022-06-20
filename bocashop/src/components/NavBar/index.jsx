import React from "react";
import CartWidget from "../CartWidget";
import logoboca from "../../assets/logo-boca.png";


import "./styles.css";

const NavBar = () => {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light Nav">
      <div class="container-fluid">
        <img src={logoboca} alt="logo" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active scrollInicio hvr-grow" id="navColor" href="#" style={{color:'white'}}>Inicio</a>
            </li>
            <li class="nav-item">
              <a target="_blank" class="nav-link hvr-grow" id="navColor" href="pages/tienda.html">Tienda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link scrollcComprar hvr-grow" id="navColor" href="#">Cómo comprar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link scrollContacto hvr-grow" id="navColor" href="#">Contacto</a>
            </li>
          </ul>
        </div>

        <div class="justify-content-right">
            <CartWidget/>
        </div>

      </div>
    </nav>
    
  );
};

export default NavBar;
