import React from "react";
import { useState } from 'react'
import "../estilização/barra.css";
import imagem2 from "../imagens/imagem2.png";
import sanduiche from "../imagens/sanduiche.png";
import x from "../imagens/x.png";

function NavBar() {
    const[click, setClick]=useState(false);

    const menuClick=()=>{
        setClick(!click);
    }

    return (
        <header className="BarraNavegação" >
            <div id={click?'rectangle43' : 'retangulo-barra'}>
                <div className="imgNavbar">
                    <img src={imagem2} alt="" />
                </div>
                <button id="botao-y" onClick={menuClick}>
                    <img src={x} alt="" />
                </button>
                <ul className="palavras">
                    <li className="menut"><a href="/principal">Lançamentos</a></li>
                    <li className="menut"><a href="/populares">Populares</a></li>
                    <li className="menut"><a href="/administrador">Administrador</a></li>
                    <li className="menut"><a href="/login">Promoções</a></li>
                    <li className="menut"><a href="#">Conta</a></li>
                </ul>
                <div className="pesquisar-menu">
                    <input className="pesquisar-menus" type="text" />
                </div>
                <button id="botao-x" onClick={menuClick}>
                    <img src={sanduiche} alt="" />
                </button>
            </div>
        </header>
    );
}

export default NavBar