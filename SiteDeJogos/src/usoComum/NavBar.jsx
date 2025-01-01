import "../index.css";

function NavBar() {
    return (
        <header className="BarraNavegação" >
            <div className="retangulo1">
                <div className="imgNavbar"></div>
                <link className="lançamentos" href="#">Lançamentos</link>
                <div className="traço1" ></div>
                <link className="populares" href="#">Populares</link>
                <div className="traço2" ></div>
                <link className="generos" href="#">Gêneros</link>
                <div className="traço3" ></div>
                <link className="promoçoes" href="#">Promoçãoes</link>
                <div className="traço4" ></div>
                <link className="conta" href="#">Contas</link>
                <div className="search" >
                    <div className="BarraPesquisa" > </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar