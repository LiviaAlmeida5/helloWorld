import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "../estilização/carrossel2.css";

function Carousel2() {
    const settings = {
        centerPadding: '0px',
        centerMode: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <div className="slider-container3">
            <Slider {...settings}>
                <div className="foto1">
                    <div className="desconto-fotos">
                        <div className="desc-fotos">
                            <p>-15%</p>
                        </div>
                        <div className="preços10">
                            <p>R$ 169,90</p>
                        </div>
                    </div>
                </div>
                <div className="foto2">
                    <div className="desconto-fotos">
                        <div className="desc-fotos">
                            <p>-25%</p>
                        </div>
                        <div className="preços10">
                            <p> R$ 169,90</p>
                        </div>
                    </div>
                </div>
                <div className="foto3">
                    <div className="desconto-fotos">
                        <div className="desc-fotos">
                            <p>-25%</p>
                        </div>
                        <div className="preços10">
                            <p> R$ 169,90</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel2;