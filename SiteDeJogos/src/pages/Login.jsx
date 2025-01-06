import React from "react";
import "../estilização/log.css";
import imagem1 from "../imagens/imagem1.png";
import seta from "../imagens/seta.png";

function Login() {
  return (
    <div className='segundaTela'>
      <div className='reg2'>
        <h1 className='login'>Login</h1>
        <input className='caixa' type="text" placeholder=" Email" />
        <input className='caixa' type="text" placeholder=" Senha" />
        <div className="setinha">
          <a href="/principal" className='seta2'>
            <img src={seta} alt="" />
          </a>
        </div>
        <a href="/registrar" className="criarConta">Criar conta</a>
        <a href="/recuperar" className="esqueceuSenha">Esqueceu a senha?</a>
      </div>
      <div className="container-imagem">
        <img src={imagem1} alt="imagem-ilustrativa" />
      </div>
    </div>
  );
}

export default Login;