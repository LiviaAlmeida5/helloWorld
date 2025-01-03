import React from "react";
import "../estilização/log.css";

function Login(){
    return(
    <div className='segundaTela'>
    <div className='reg2'>
      <div className="coluna2">
      <h1 className='login'>Login</h1>
      <input className='email2' type="text" />
      <input className='senha2' type="text" />
      </div>
      <a href="/principal" className='seta2'></a>
    </div>
    <div className='imagem2'>
    </div>
        <a href="/registrar" className="criarConta">Criar conta</a>
        <a href="/recuperar" className="esqueceuSenha">Esqueceu a senha?</a>
    </div>

    );
}

export default Login;