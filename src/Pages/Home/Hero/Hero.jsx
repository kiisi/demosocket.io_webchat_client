import React from 'react'
import './Hero.scss'
import hero_image from '../../../assets/pic-min.png'
const Hero = () => {
  return (
    <div className="hero-wrapper grid-wrapper ">
      <div className="hero max-wrapper">
        <div className="hero-content">
          <h1>Drowning in tons of <span>assignments</span>? </h1>
          <h1>We are ready to give you a hand!</h1>
          <div className="btn-large hero-btn">GET HELP NOW</div>
        </div>
        <div className="hero-img">
          <img src={hero_image} alt="Hero"/>
        </div>
      </div>
    </div>
  )
}

export default Hero