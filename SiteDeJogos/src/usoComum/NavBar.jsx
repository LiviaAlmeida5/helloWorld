import React from "react";
import "../estilização/barra.css";

function NavBar() {
    return (
        <header className="BarraNavegação" >
            <div className="retangulo1">
                <div className="imgNavbar"></div>
                <a className="lançamentos" href="/principal">Lançamentos</a>
                <div className="traço1" ></div>
                <a className="populares" href="/populares">Populares</a>
                <div className="traço2" ></div>
                <a className="generos" href="#">Gêneros</a>
                <div className="traço3" ></div>
                <a className="promoçoes" href="#">Promoções</a>
                <div className="traço4" ></div>
                <a className="contas" href="#">Contas</a>
                <div className="search" >
                    <div className="BarraPesquisa" ></div>
                </div>
                <div className="lupazinha"></div>
            </div>
        </header>
    );
}

export default NavBar