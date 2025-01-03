import React from "react";
import "../estilização/rodape.css";

function Footer(){
    return(
      
        <footer>
            <div className="retFooter"> </div>
                <div className="imgFooter"></div>
                <h1 className="tituloFooter">Game Dame</h1>
                <p className="seuprox"> Seu próximo jogo começa aqui</p>
                <h2 className="explore"> Explorar </h2>
                <p className="inicio"> Início</p>
                <p className="pops">Populares</p>
                <p className="cont">Conta</p>
                <h2 className="contato">Contato</h2>
                <p className="emailgame">gamegamedame@teste.com</p>
                <p className="numphone">(99) 99999-9999</p>
                <p className="local">Shopping X, Lavras - MG</p>
                <div className="simbemail"></div>
                <div className="phone" ></div>
                <div className="localidade" ></div>
                <p className="msngfooter">2024 Game Dame | By Emakers Júnior</p>
        </footer>
   
    );
}

export  default Footer