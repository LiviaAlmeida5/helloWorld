import "../index.css";

function Login(){
    return(
    <div className='segundaTela'>
    <div className='reg2'>
      <div className="coluna2">
      <h1 className='login'>Login</h1>
      <input className='email2' type="text" />
      <input className='senha2' type="text" />
      </div>
      <button className='seta2'>
      </button>
    </div>
    <div className='imagem2'>
    </div>
        <div className="criarConta">Criar conta</div>
        <div className="esqueceuSenha">Esqueceu a senha?</div>
    </div>

    );
}

export default Login;