import React from "react";
import "../estilização/recup.css";
import imagem1 from "../imagens/imagem1.png";
import seta from "../imagens/seta.png";

function Recuperar() {
    return (
        <div className='segundaTela'>
            <div className='reg'>
                <h1 className='recuperar' >Recuperar</h1>
                <input className='caixa' type="text" placeholder="E-mail" />
                <div className="setinha">
                    <a href="/principal" className='seta2'>
                        <img src={seta} alt="" />
                    </a>
                </div>
                <a href="/registrar" className="criarConta">Criar conta</a>
                <a href="/login" className="fazerLogin">Fazer Login</a>
            </div>
            <div className="container-imagem">
                <img src={imagem1} alt="imagem-ilustrativa" />
            </div>
        </div>
    );
}

export default Recuperar