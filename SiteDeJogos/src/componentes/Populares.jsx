import "../index.css";
import NavBar from "../usoComum/NavBar";
import Footer from "../usoComum/Footer";

function Populares() {
    return (
        <div>
        <div className="telaPop" >
            <div className="pop"></div>
            <div className="circle1">
                <p className="1">1º</p>
            </div>
            <div className="priimagem"></div>
            <h3 className="god" > God of War </h3>
            <p className="pgod">Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo o define enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos. É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta.</p>
            <div className="circle2" >
                <p className="2">2º</p>
            </div>
            <h3 className="horizon">Horizon Zero Dawn</h3>
            <p className="phorizon">Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.  </p>
            <div className="segimagem" ></div>
            <div className="circle3">
                <p className="3">3º</p>
            </div>
            <div className="terimagem"></div>
            <h3 className="days">Days Gone</h3>
            <p className="pdays">Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos após uma pandemia mundial devastadora.Entre na pele do antigo motociclista fora da lei Deacon St. John, um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente... ou de formas mais violentas.</p>
        </div>
        <Footer/>
        </div>
    );
}

export default Populares