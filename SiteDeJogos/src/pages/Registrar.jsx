import React from "react";
import "../estilização/reg.css";
import imagem1 from "../imagens/imagem1.png";
import seta from "../imagens/seta.png";

function Registrar() {
  return (
    <div className='primeiraTelas'>
      <div className='reg'>
        <h1 className='registrar'>Registrar</h1>
        <input className='caixa' type="text" placeholder="Nome de Usuário" />
        <input className='caixa' type="text" placeholder="E-mail" />
        <input className='caixa' type="text" placeholder="CPF" />
        <input className='caixa' type="text" placeholder="Senha" />
        <input className="caixa" type="text" placeholder="Confirmar Senha" />
        <div className="setinha">
          <a href="/principal" className='seta2'>
            <img src={seta} alt="" />
          </a>
        </div>
        <a href="/login" className="button-login" >Fazer Login</a>
      </div>
      <div className="container-imagem">
        <img src={imagem1} alt="imagem-ilustrativa" />
      </div>
    </div>
  );
}

export default Registrar;