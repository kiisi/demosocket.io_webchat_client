import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../../assets/logo_v2.png'
const Navbar = () => {

  const [click, setClick] = useState(false)

  const openClick = () => {
    setClick(true)
  }
  const closeClick = () => {
    setClick(false)
  }

  return (

    <>
      <div className="nav-wrapper grid-wrapper">
        <nav className="nav max-wrapper">
          <div className="nav-logo">
            <img src={logo} alt="Nav logo" />
          </div>
          <div className="nav-items">
            <div className="nav-items-item nav-items-x nav-items-item-services">Services<span className="material-icons">expand_more</span>
              <div className="nav-items-dropdown nav-items-dropdown-services">
                <div className="nav-items-dropdown-triangle"></div>
                <div className="nav-items-dropdown-item">Essay Writing</div>
                <div className="nav-items-dropdown-item">Research Paper Writing</div>
                <div className="nav-items-dropdown-item">Case Study Writing</div>
                <div className="nav-items-dropdown-item">Dissertation Writing</div>
                <div className="nav-items-dropdown-item">Thesis Writing</div>
                <div className="nav-items-dropdown-item">Essay Examples</div>
                <div className="nav-items-dropdown-item">Editing</div>
                <div className="nav-items-dropdown-item">Other</div>
              </div>
            </div>

            <div className="nav-items-item nav-items-x">Writing Tools<span className="material-icons">expand_more</span>
              <div className="nav-items-dropdown nav-items-dropdown-writing">
                <div className="nav-items-dropdown-triangle"></div>
                <div className="nav-items-dropdown-item">Plagiarism Checker</div>
                <div className="nav-items-dropdown-item">Citation Generators</div>
                <div className="nav-items-dropdown-item">Thesis Generator</div>
                <div className="nav-items-dropdown-item">Conclusion Generator</div>
                <div className="nav-items-dropdown-item">Title Page Maker</div>
                <div className="nav-items-dropdown-item">Essay Title Generator</div>
                <div className="nav-items-dropdown-item">Paraphrasing Tool</div>
              </div>
            </div>


            <div className="nav-items-item">How it Works</div>
            <div className="nav-items-item">Support</div>

            <div className="nav-items-item nav-items-x">About us<span className="material-icons">expand_more</span>
              <div className="nav-items-dropdown nav-items-dropdown-about">
                <div className="nav-items-dropdown-triangle"></div>
                <div className="nav-items-dropdown-item">What is PapersOwl</div>
                <div className="nav-items-dropdown-item">Testimonials</div>
                <div className="nav-items-dropdown-item">Top Writers</div>
                <div className="nav-items-dropdown-item">Rating &amp; Awards</div>
                <div className="nav-items-dropdown-item">FAQ</div>
                <div className="nav-items-dropdown-item">Contacts</div>
                <div className="nav-items-dropdown-item">Referral Program</div>
                <div className="nav-items-dropdown-item">Promo Codes &amp; Discounts</div>
                <div className="nav-items-dropdown-item">Blog</div>
              </div>
            </div>

            <div className="nav-items-order btn-large">LOG IN</div>
            <div className="nav-menu" >
              <span className="material-icons" onClick={openClick}>menu</span>
            </div>
          </div>

        </nav>
      </div>

      <div className={click ? "mobile-nav-bg show-m-nav-bg" : "mobile-nav-bg"} onClick={closeClick}></div>

      <div className={click ? "mobile-nav show-m-nav" : "mobile-nav"}>
        <div className="mobile-nav-close">
        <span className="material-icons" onClick={closeClick}>close</span>
        </div>
        <div className="mobile-nav-items">
          <div className="mobile-nav-items-item">Services <span className="material-icons">chevron_right</span></div>
          <div className="mobile-nav-items-item">Writing Tools <span className="material-icons">chevron_right</span></div>
          <div className="mobile-nav-items-item">How it Works</div>
          <div className="mobile-nav-items-item">Support</div>
          <div className="mobile-nav-items-item">About us <span className="material-icons">chevron_right</span></div>
        </div>

      </div>
    </>
  )
}

export default Navbar