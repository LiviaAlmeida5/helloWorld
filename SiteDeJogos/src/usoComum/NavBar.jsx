import React from "react";
import "../estilização/barra.css";
import imagem2 from "../imagens/imagem2.png";

function NavBar() {
    return (
        <header className="BarraNavegação" >
            <div className="em-ordem">
                <div className="imgNavbar">
                    <img src={imagem2} alt="" />
                </div>
                <a className="pbarra" href="/principal">Lançamentos</a>
                <div className="traço" ></div>
                <a className="pbarra" href="/populares">Populares</a>
                <div className="traço" ></div>
                <a className="pbarra" href="/administrador">Admin</a>
                <div className="traço" ></div>
                <a className="pbarra" href="/login">Promoções</a>
                <div className="traço" ></div>
                <a className="pbarra" href="#">Contas</a>
                <div className="search" ></div>
                <a href="/menu" className="tres-traços">
                    <div className="um-traço"></div>
                    <div className="um-traço"></div>
                    <div className="um-traço"></div>
                </a>
                </div>
                <div className="linha-de-separaçao"></div>
        </header>
    );
}

export default NavBar