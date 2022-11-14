import React from 'react'
import './Footer.scss'
import privacy from '../../../assets/privacy.svg'

const Footer = () => {
  return (
    <div className="grid-wrapper footer-wrapper max-big-spacing">
      <div className="max-wrapper">
        <div className="footer">
          <div className="footer-privacy">
            <img src={privacy} alt="privacy" />
            <div className="footer-privacy-content">
              <h2>Privacy guarantee</h2>
              <p className="footer-privacy-content-p">We never disclose our customers personal details or credit card information to any third parties. Enter only email to Sign Up</p>
              <p className="footer-privacy-content-c">2022 © PapersOwl.com. All rights reserved</p>
            </div>
          </div>
          <div className="footer-contact">
            <h2>Contact us</h2>
            <div>
              <span class="material-icons"> mail </span>
              <span>support@papersowl.com</span>
            </div>
            <div>
              <span class="material-icons"> call </span>
              <span>+1 (302) 467 1987</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer