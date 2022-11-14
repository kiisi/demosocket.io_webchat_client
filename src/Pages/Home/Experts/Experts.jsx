import React from 'react'
import './Experts.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jackson from '../../../assets/jackson.jpg'
import perez from '../../../assets/perez.jpg'
import quality from '../../../assets/quality.jpg'
import vincy from '../../../assets/vincy.jpg'
import ratings from '../../../assets/star-2-min.png'
import Cardxx from '../../../components/minor/Card/Cardxx/Cardxx';

const Experts = () => {

    let settings = {
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 945,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className="choose-expert-wrapper grid-wrapper max-big-spacing">
                <div className="max-wrapper">
                    <h1 className="max-wrapper-title choose-expert-title">Choose your expert now</h1>
                    <div className="choose-expert-content">
                        <div className="choose-expert-content-card">
                            <p>Top university graduatesproficient in <span>all assignments</span></p>
                        </div>
                        <div className="choose-expert-content-card">
                            <p>Proficient in <span>40+ subjects </span>
                                (from English to Nursing)</p>
                        </div>
                        <div className="choose-expert-content-card"><p>Familiar with <span>all the formatting
                            styles</span> (MLA, APA, etc.)</p></div>
                    </div>
                </div>
            </div>

            <div className="expert">
                <Slider {...settings} className="expert-slick-slider">
                    <Cardxx tutor_img={perez} tutor_name="Professor Perez" rating_img={ratings} rating_value="99%" orders="509" reviews="353" />

                    <Cardxx tutor_img={quality} tutor_name="Miss Quality" rating_img={ratings} rating_value="95%" orders="72" reviews="53" />

                    <Cardxx tutor_img={jackson} tutor_name="Tutor Jackson" rating_img={ratings} rating_value="96%" orders="221" reviews="154" />

                    <Cardxx tutor_img={vincy} tutor_name="Dr.Vincy Papers" rating_img={ratings} rating_value="100%" orders="149" reviews="119" />

                </Slider>
            </div>

        </>
    )
}

export default Experts

