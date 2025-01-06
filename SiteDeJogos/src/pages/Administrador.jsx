import React from "react";
import "../estilização/admin.css";
import NavBar from "../usoComum/NavBar";

function Administrador (){
    return(
        <div>
            <NavBar/>
            <div className="tela-administrador" >
            <div className="rec" id="rec2">
            <h1 className="titlerec2">Cadastrar Jogo</h1>
            <input className="inserir" type="text" placeholder=" Título do Jogo" />
            <input className="inserir" type="text" placeholder=" Gênero"/>
            <input className="descriçao" type="text" placeholder=" Descrição"/>
            <input className="inserir-imagem" type="text" placeholder=" Inserir Imagem" />
            <button className="cadastrar-se">Cadastrar</button>
            </div>
            <div className="rec" id="rec1">
            <h1 className="titlerec">Remover Jogo</h1>
            <div className="caixinha"></div>
            <input className="inserir5" type="text" placeholder=" Título do jogo ou ID" />
            <button className="cadastrar-se2" >Remover</button>
            </div>
            <div className="rec" id="rec2">
            <h1 className="titlerec2">Editar Jogo</h1>
            <input className="inserir" type="text" placeholder=" Título do Jogo" />
            <input className="inserir" type="text" placeholder=" Gênero" />
            <input className="descriçao" type="text" placeholder=" Descrição" />
            <input className="inserir-imagem" type="text" placeholder=" Inserir Imagem" />
            <button className="cadastrar-se" >Modificar</button>
            </div>
            </div>
            </div>
    );
}

export default Administrador