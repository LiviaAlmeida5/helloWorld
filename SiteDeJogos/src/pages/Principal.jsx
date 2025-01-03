import React from "react";
import "../estilização/princ.css";
import Ret9 from "../imagens/Ret9.jpg"
import NavBar from "../usoComum/NavBar";
import Footer from "../usoComum/Footer";

function Principal() {
    return (
        <div className="tela-principal">
            <NavBar />
            <div className="carrossel"></div>
            <div className="rectangle12"></div>
            <div className="rectangle6"></div>
            <div className="rectangle9"></div>
            <div className="rectangle10"></div>
            <div className="rectangle11"></div>
            <div className="grupinho"></div>
            <div className="mini-ret"></div>
            <div className="mini-rect"></div>
            <p className="preco">R$ 149,99</p>
            <p className="desconto" >-25%</p>
            <div className="grupinho2"></div>
            <div className="mini-ret2"></div>
            <div className="mini-rect2"></div>
            <p className="preco2">R$ 149,99</p>
            <p className="desconto2" >-25%</p>
            <div className="grupinho3"></div>
            <div className="mini-ret3"></div>
            <div className="mini-rect3"></div>
            <p className="preco3">R$ 149,99</p>
            <p className="desconto3" >-25%</p>
            <div className="grupo-bolinhas"></div>
            <div className="bolinha1"></div>
            <div className="bolinha2"></div>
            <div className="bolinha3"></div>
            <div className="bolinha4"></div>
            <div className="limite1"></div>
            <div className="limite2"></div>
            <div className="retpop1"></div>
            <div className="retpop2"></div>
            <div className="retpop3"></div>
            <div className="retpop4"></div>
            <div className="retpop5"></div>
            <div className="mini-ret4"></div>
            <div className="mini-ret5"></div>
            <div className="mini-ret6"></div>
            <div className="mini-ret7"></div>
            <div className="mini-ret8"></div>
            <p className="preco4">R$ 149,99</p>
            <p className="preco5">R$ 149,99</p>
            <p className="preco6">R$ 149,99</p>
            <p className="preco7">R$ 149,99</p>
            <p className="preco8">R$ 149,99</p>
            <h1 className="news" >Lançamentos</h1>
            <div className="l1"></div>
            <div className="l2"></div>
            <div className="l3"></div>
            <div className="l4"></div>
            <div className="l5"></div>
            <div className="l6"></div>
            <div className="l7"></div>
            <div className="l8"></div>
            <Footer />
        </div>


    );
}

export default Principal