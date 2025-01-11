import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "../estilização/responsive.css";

function Responsive() {
    var settings = {
        centerPadding: '50px',
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container-responsive">
            <Slider {...settings}>
                    <div style={{marginRight: "10px"}} className="rets1">
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
            </Slider>
        </div>
    );
}

export default Responsive;
