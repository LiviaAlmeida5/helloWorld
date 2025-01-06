import React from "react";
import "../estilização/rodape.css";
import imagem2 from "../imagens/imagem2.png";

function Footer() {
    return (

        <footer className="telaFooter" >
            <div className="encima">
                <div className="imgFooter">
                    <img src={imagem2} alt="" />
                </div>
                <div className="containerss">
                <div className="container1" id="cont1">
                <h1 className="tituloFooter">Game Dame</h1>
                <p className="seuprox"> Seu próximo jogo começa aqui</p>
                </div>
                <div className="container1" id="cont2">
                <h2 className="explore"> Explorar </h2>
                <p className="inicio"> Início</p>
                <p className="pops">Populares</p>
                <p className="cont">Conta</p>
                </div>
                <div className="container1" id="cont3">
                <h2 className="contato">Contato</h2>
                <p className="emailgame">gamegamedame@teste.com</p>
                <p className="numphone">(99) 99999-9999</p>
                <p className="local">Shopping X, Lavras - MG</p>
                </div>
                </div>
            </div>
            <p className="msngfooter">2024 Game Dame | By Emakers Júnior</p>
        </footer>

    );
}

export default Footer