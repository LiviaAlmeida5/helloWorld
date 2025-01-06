import React from "react";
import "../estilização/princ.css";
import Ret9 from "../imagens/Ret9.jpg"
import NavBar from "../usoComum/NavBar";
import Footer from "../usoComum/Footer";
import Ret13 from "../imagens/Ret13.jpg";
import Ret14 from "../imagens/Ret14.jpg";
import Ret15 from "../imagens/Ret15.jpg";
import Ret16 from "../imagens/Ret16.jpg";
import Ret17 from "../imagens/Ret17.jpg";

function Principal() {
    return (
        <div className="tela-principal">
            <NavBar />
            <div className="parte-cima">
                <div className="tres-imagens">
                    <div className="duas-imagens">
                        <div className="ret9">
                            <div className="desconto-duas-imagens">
                                <div className="desc">
                                    <p>-15%</p>
                                </div>
                                <div className="preços2">
                                    <p>R$ 169,90</p>
                                </div>
                            </div>
                        </div>
                        <div className="ret10">
                            <div className="desconto-duas-imagens">
                                <div className="desc">
                                    <p>-25%</p>
                                </div>
                                <div className="preços2">
                                    <p> R$ 169,90</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ret11">
                        <div className="desconto-uma-imagem">
                            <div className="desc">
                                <p>-40%</p>
                            </div>
                            <div className="preços2">
                                <p> R$ 119,95</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="parte-baixo">
                <h1>Lançamentos</h1>
                <div className="cinco-imagens">
                    <div className="rets1">              
                        <div className="prices">
                            <p>R$ 299,90</p>
                        </div>
                    </div>
                    <div className="rets2">              
                        <div className="prices">
                            <p>R$ 299,90</p>
                        </div>
                    </div>
                    <div className="rets3">              
                        <div className="prices">
                            <p>R$ 299,90</p>
                        </div>
                    </div>
                    <div className="rets4">              
                        <div className="prices">
                            <p>R$ 299,90</p>
                        </div>
                    </div>
                    <div className="rets5">              
                        <div className="prices">
                            <p>R$ 299,90</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    );
}

export default Principal