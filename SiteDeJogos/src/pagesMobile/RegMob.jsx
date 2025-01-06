import React from "react";
import "../estilização/regMobile.css";

function RegMob() {
    return (
        <div className='primeiraTela'>
            <div className='reg'>
                <div className="coluna">
                    <h1 className='registrar'>Registrar</h1>
                    <div className="nome-caixa">
                        <input className='nomeUsuario' type="text" />
                    </div>
                    <div className="email-caixa">
                        <input className='email' type="text" />
                    </div>
                    <div className="cpf-caixa">
                        <input className='cpf' type="text" />
                    </div>
                    <div className="senha-caixa" >
                        <input className='senha' type="text" />
                    </div>
                    <div className="confirmar-caixa" >
                        <input className="confirmarSenha" type="text" />
                    </div>
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

export default RegMob;