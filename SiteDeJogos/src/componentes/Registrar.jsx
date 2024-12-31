import "../index.css";

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
      <button className='seta'>
      </button>
    </div>
    <div className='imagem'>
    </div>
    <div className="button-login" >Fazer Login</div>
    </div>
    );
}

export default Registrar;