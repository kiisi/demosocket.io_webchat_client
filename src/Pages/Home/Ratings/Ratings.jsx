import React from 'react'
import './Ratings.scss'
import owl from '../../../assets/owlsmall.svg'
import star from '../../../assets/star.svg'
import facebook from '../../../assets/facebook.svg'
import ratings from '../../../assets/ratings.svg'
import Cardx from '../../../components/minor/Card/Cardx/Cardx'

const Ratings = () => {
  return (
    <div className="ratings-wrapper grid-wrapper">
        <div className="ratings max-wrapper">
            <Cardx img={owl} text="Papersowl" ratings={ratings} num="4.7" num_two="/5"/>
            <Cardx img={star} text="Trustpilot" ratings={ratings} num="8.9" num_two="/10"/>
            <Cardx img={facebook} text="Facebook" ratings={ratings} num="4.9" num_two="/5"/>
        </div>
    </div>
  )
}

export default Ratings