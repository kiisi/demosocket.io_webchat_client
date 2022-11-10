import React from 'react'
import './HowItWorks.scss'
import c1 from '../../../assets/c1.svg';
import c2 from '../../../assets/c2.svg';
import c3 from '../../../assets/c3.svg';

const HowItWorks = () => {
  return (
    <div className="grid-wrapper max-big-spacing">
        <div className="max-wrapper howitworks">
            <h1 className="max-wrapper-title">How It Works</h1>
            <div className="howitworks-content">

                <div className="howitworks-content-card">
                    <img src={c1} alt=""/>
                    <h2>1. Choose an expert</h2>
                    <p>You can choose an expert on your own according to your instructions</p>
                </div>
                <div className="howitworks-content-card">
                    <img src={c2} alt=""/>
                    <h2>2. Communicate directly</h2>
                    <p>Get in touch with your expert 24/7 for any revisions or amendments</p>
                </div>
                <div className="howitworks-content-card">
                    <img src={c3} alt=""/>
                    <h2>3. Pay only if you’re satisfied</h2>
                    <p>You control the money on your balance and decide when to pay the expert</p>
                </div>

            </div>
        </div>
    </div>
  )
}






export default HowItWorks