import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "../estilização/carrossel.css";

function Carousel() {
    const settings = {
        centerPadding: '2px',
        centerMode: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="tres-imagens">
                    <div className="pra-organizar">
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
                <div className="tres-imagens">
                    <div className="pra-organizar">
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
            </Slider>
        </div>
    );
}
export default Carousel;