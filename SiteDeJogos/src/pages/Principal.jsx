import React from "react";
import "../estilização/princ.css";
import NavBar from "../usoComum/NavBar";
import Footer from "../usoComum/Footer";
import cart from "../imagens/cart.png";
import Carousel from "../usoComum/Carousel";
import Responsive from "../usoComum/Responsive";

function Principal() {
    return (
        <div className="tela-principal">
            <NavBar />
            <div className="parte-cima">
                <div className="tres-imagens">
                    <Carousel />
                </div>
            </div>
            <div className="parte-baixo">
                <h1>Lançamentos</h1>
                <div className="cinco-imagens">
                    <Responsive />
                    <div className="lado-direito">
                        <div className="cart">
                            <img src={cart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    );
}

export default Principal