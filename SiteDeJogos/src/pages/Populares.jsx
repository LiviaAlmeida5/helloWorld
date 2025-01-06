import React from "react";
import "../estilização/pop.css";
import NavBar from "../usoComum/NavBar";
import Footer from "../usoComum/Footer";
import ret9 from "../imagens/ret9.jpg";
import Ret10 from "../imagens/Ret10.jpg";
import Ret11 from "../imagens/Ret11.jpg";

function Populares() {
    return (
        <div className="telaPop">
            <NavBar />
            <div className="sessao-branca-populares" >
                <h1 className="pop">Populares</h1>
                <div className="jogo">
                    <div className="bolinhas">
                        <p className="numbers">1º</p>
                    </div>
                    <div className="container-imagemp">
                              <img src={Ret11} alt="imagem-ilustrativa" />
                          </div>
                    <div className="titulo-texto">
                        <h3 className="title" > God of War </h3>
                        <p className="paragrafos">Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo o define enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos. É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta.</p>
                    </div>
                </div>
                <div className="jogo">
                <div className="bolinhasss">
                            <p className="numbers">2º</p>
                          </div>
                    <div className="container-imagemp">
                              <img src={Ret10} alt="imagem-ilustrativa" />
                          </div>
                          <div className="bolinhas">
                            <p className="numbers">2º</p>
                          </div>
                    <div className="titulo-texto">
                        <h3 className="title">Horizon Zero Dawn</h3>
                        <p className="paragrafos">Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.  </p>
                    </div>
                </div>
                <div className="jogo">
                <div className="bolinhas">
                    <p className="numbers">3º</p>
                </div>
                    <div className="container-imagemp">
                              <img src={ret9} alt="imagem-ilustrativa" />
                          </div>
                    <div className="titulo-texto">
                        <h3 className="title">Days Gone</h3>
                        <p className="paragrafos">Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos após uma pandemia mundial devastadora.Entre na pele do antigo motociclista fora da lei Deacon St. John, um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente... ou de formas mais violentas.</p>
                    </div>
                </div>
            </div>
            <div className="carrinho">
                <div className="circle">
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Populares