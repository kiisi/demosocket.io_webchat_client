import React from 'react'
import Cardx from '../../../components/minor/Card/Cardx/Cardx'
import './Feedback.scss'
import owl from '../../../assets/owlsmall.svg'
import star from '../../../assets/star.svg'
import facebook from '../../../assets/facebook.svg'
import ratings from '../../../assets/ratings.svg'
import Cardxxx from '../../../components/minor/Card/Cardxxx/Cardxxx'
import ratingsblue from '../../../assets/ratingsblue.svg'
import verify from '../../../assets/verify.svg'
import steve from '../../../assets/steve.png'
import douglas from '../../../assets/douglas.png'
import jackson from '../../../assets/jackson.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true
    };


    return (

        <>

            <div className="feedback-wrapper grid-wrapper max-big-spacing">
                <div className="max-wrapper">
                    <h1 className="max-wrapper-title">What our current customers say</h1>
                    <div className="feedback-ratings">
                        <Cardx img={owl} text="Papersowl" ratings={ratings} num="4.7" num_two="/5" />
                        <Cardx img={star} text="Trustpilot" ratings={ratings} num="8.9" num_two="/10" />
                        <Cardx img={facebook} text="Facebook" ratings={ratings} num="4.9" num_two="/5" />
                    </div>
                </div>
            </div>


            <div className="feedback-slide-wrapper">
                <Slider {...settings} className="feedback-slide">
                    <Cardxxx avatar={douglas} verify={verify} ratings={ratingsblue} name="Douglas R." title="Wow! exceeded my expectations!" date="April 1, 2022"
                        content="Essay was completed well ahead of schedule. It was very well organized and followed all instructions. Thank you for the fast delivery and service." />
                    <Cardxxx avatar={steve} verify={verify} ratings={ratingsblue} name="Steve P" title="I received a very good service" date="July 29, 2022"
                        content="Prof. Alicia is very professional and I am happy about her work. She helped me a lot and save me a huge amount of time. I will be very happy to contact her for future academic work again." />
                        <Cardxxx avatar={jackson} verify={verify} ratings={ratingsblue} name="Jackson M" title="First of all I'd like to say that he was very friendly" date="July 29, 2022"
                        content="The work was done quickly and well and was to my liking. Also you can see that the writer has a high level of academic ability. I am very satisfied." />
                       
                    
                </Slider>
            </div>

        </>
    )
}

export default Feedback