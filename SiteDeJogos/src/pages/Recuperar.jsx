import React from "react";
import "../estilização/recup.css";

function Recuperar() {
    return (
        <div className='segundaTela'>
            <div className='reg'>
                <div className="coluna3">
                    <h1 className='recuperar'>Recuperar</h1>
                    <input className='email3' type="text" />
                </div>
                <a href="/principal" className='seta3'> </a>
            </div>
            <div className='imagem2'>
            </div>
            <a href="/registrar" className="criarConta2">Criar conta</a>
            <a href="/login" className="fazerLogin">Fazer Login</a>
        </div>
    );
}

export default Recuperar