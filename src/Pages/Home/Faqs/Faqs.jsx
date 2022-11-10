import React, {useEffect} from 'react'
import './Faqs.scss';
const Faqs = () => {



  useEffect(()=>{
    let faqs_title = document.querySelectorAll(".faqs-accordion-title")

    faqs_title.forEach(ft=>{
      ft.onclick =()=>{

        if(ft.nextElementSibling.classList.contains("active")){
          ft.nextElementSibling.classList.remove("active")
        }else{
          ft.nextElementSibling.classList.add("active")
        }
        
      }
    })

    

  },[])
  return (
    <div className="grid-wrapper max-big-spacing">
        <div className="max-wrapper">
            <div className="max-wrapper-title">Frequently asked questions</div>

            <div className="faqs-accordion">
              <div className="faqs-accordion-title">
                <div className="faqs-accordion-title-pointer"></div>
                <div className="faqs-accordion-title-header">1. Is this legal?</div>
              </div>
              <div className="faqs-accordion-content">
              We hire top universities graduates. They have been helping students all over the world with different types of academic assignments. If you either don't get your assignment or lack time to figure it out, that's what our experts can assist you with. 
              </div>
            </div>
            <div className="faqs-accordion">
              <div className="faqs-accordion-title">
                <div className="faqs-accordion-title-pointer"></div>
                <div className="faqs-accordion-title-header">2. Will your advisor meet my requirements?</div>
              </div>
              <div className="faqs-accordion-content">
                We created a unique system where you can choose an expert on your own. More than 1000 active experts are available for you. They are proficient in different subjects and formatting styles. What is more, you can communicate with your expert directly via chat 24/7 and discuss all the details and revisions (if needed).
              </div>
            </div>
            <div className="faqs-accordion">
              <div className="faqs-accordion-title">
                <div className="faqs-accordion-title-pointer"></div>
                <div className="faqs-accordion-title-header">3. Can I have my money back if I am not satisfied with the outcome?</div>
              </div>
              <div className="faqs-accordion-content">
              Absolutely yes! While working with us, you create an account where you keep your money until you are ready to pay the expert. If you don't get what you expected, you have right not to release the money to your expert. You can either use the money to pay another expert or have it returned to your credit card anytime. 
              </div>
            </div>
            <div className="faqs-accordion">
              <div className="faqs-accordion-title">
                <div className="faqs-accordion-title-pointer"></div>
                <div className="faqs-accordion-title-header">4. What if my deadline is very short? Will your advisor be able to help me?</div>
              </div>
              <div className="faqs-accordion-content">
              Our experts can help you if you have at least 3 hours. We can assure you that they will do their best to meet the deadline. What is more, they get additional notifications if the deadline is approaching and our Support Team makes sure everything is delivered on time.
              </div>
            </div>

            <div className="btn-large faqs-btn">GET HELP</div>

        </div>
    </div>
  )
}

export default Faqs