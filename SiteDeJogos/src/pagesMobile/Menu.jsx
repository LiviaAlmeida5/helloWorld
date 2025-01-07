import React from "react";
import "../estilização/menu.css";

function Menu() {
    return (
        <div className="menu-mobile" >
            <div className="botaozinho-preto"></div>
            <div className="rectangle43">
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
        </div>
    );
}
export default Menu