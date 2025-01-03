import React from "react";
import "../estilização/reg.css";

function Registrar(){
    return (
<div className='primeiraTela'>
    <div className='reg'>
      <div className="coluna">
      <h1 className='registrar'>Registrar</h1>
      <input className='nomeUsuario' type="text" />
      <input className='email' type="text" />
      <input className='cpf' type="text" />
      <input className='senha' type="text" />
      <input className="confrimarSenha" type="text" />
      </div>
      <a href="/principal" className='seta'>
      </a>
    </div>
    <div className='imagem'>
    </div>
    <a href="/login" className="button-login" >Fazer Login</a>
    </div>
    );
}

export default Registrar;