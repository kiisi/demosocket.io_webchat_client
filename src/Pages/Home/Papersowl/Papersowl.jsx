import React from 'react'
import  message from '../../../assets/messsage.svg'
import  clock from '../../../assets/clock.svg'
import  note from '../../../assets/note.svg'
import  credit_card from '../../../assets/credit_card.svg'
import './Papersowl.scss'
const Papersowl = () => {
    return (
        <div className="grid-wrapper max-big-spacing">
            <div className="max-wrapper">
                <h1 className="max-wrapper-title">With Papersowl</h1>
                <div className="papersowl-content">
                    <div className="papersowl-content-card">
                        <img src={message} alt ="papersowl content card svg"/>
                        <p>Communicate with your expert directly 24/7</p>
                    </div>
                    <div className="papersowl-content-card">
                        <img src={clock} alt ="papersowl content card svg"/>
                        <p>Have all your assignments done on time</p>
                    </div>
                    <div className="papersowl-content-card">
                        <img src={note} alt ="papersowl content card svg"/>
                        <p>Don't pay the expert until you're satisfied</p>
                    </div>
                    <div className="papersowl-content-card">
                        <img src={credit_card} alt ="papersowl content card svg"/>
                        <p>Money-back guarantee is on your side</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Papersowl