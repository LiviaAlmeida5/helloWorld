import React from "react";
import "../estilização/barra.css";
import imagem2 from "../imagens/imagem2.png";

function NavBar() {

    function clickMenu(){
        if (rectangle43.barra.display == 'none'){
            rectangle43.barra.display = 'flex'
        } else {
            rectangle43.barra.display ='none'
        }
        return
    }
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
                <a className="pbarra" href="/menu">Contas</a>
                <input className="search" />
                <div className="tres-traços" onClick={clickMenu()}>
                    <div className="um-traço"></div>
                    <div className="um-traço"></div>
                    <div className="um-traço"></div>
                </div>
                </div>
                <div className="linha-de-separaçao"></div>
                <div id="rectangle43">
                <div id="botao-x"> 
                    <a href="/principal"></a>
                </div>
                <ul className="palavras">
                    <li className="menut"><a href="/principal">Lançamentos</a></li>
                    <li className="menut"><a href="/populares">Populares</a></li>
                    <li className="menut"><a href="/administrador">Administrador</a></li>
                    <li className="menut"><a href="#">Promoções</a></li>
                    <li className="menut"><a href="#">Conta</a></li>
                </ul>
                <div className="pesquisar-menu">
                    <input id="pesquisar-menu" type="text" />
                </div>
            </div>
        </header>
    );
}

export default NavBar