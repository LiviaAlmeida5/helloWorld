import React from "react";
import "../index.css";
import NavBar from "../usoComum/NavBar";

function Administrador (){
    return(
        <div>
            <NavBar/>
            <div className="tela-administrador" >
            <div className="rec1"></div>
            <h1 className="titlerec1">Cadastrar Jogo</h1>
            <input className="titulo-do-jogo" type="text" placeholder="titulo do jogo" />
            <input className="genero" type="text" placeholder="Gênero"/>
            <input className="descriçao" type="text" placeholder="Descrição"/>
            <input className="inserir-imagem" type="text" placeholder="Inserir Imagem" />
            <button className="cadastrar-se">Cadastrar</button>
            <div className="rec2"></div>
            <h1 className="titlerec2">Remover Jogo</h1>
            <div className="caixinha"></div>
            <input className="id-jogo" type="text" placeholder="Título do jogo ou ID" />
            <button className="remover-se" >Remover</button>
            <div className="rec3"></div>
            <h1 className="titlerec3">Editar Jogo</h1>
            <input className="titulo-do-jogo2" type="text" placeholder="titulo do jogo" />
            <input className="genero2" type="text" placeholder="Gênero" />
            <input className="descriçao2" type="text" placeholder="Descrição" />
            <input className="inserir-imagem2" type="text" placeholder="Inserir Imagem" />
            <button className="modificar" >Modificar</button>
            </div>
            </div>
    );
}

export default Administrador