import React from 'react'
import './Cardx.scss'
const Cardx = ({text, img, ratings, num, num_two}) => {
    return (
        <div className="cardx">
            <img src={img} alt="cardx img" />
            <div className="cardx-main">
                <p>{text}</p>
                <img src={ratings} alt="ratings" />
            </div>
            <div className="cardx-ratings">
                <h1>{num}</h1>
                <span>{num_two}</span>
            </div>
        </div>
    )
}

export default Cardx