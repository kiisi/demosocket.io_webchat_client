import React from 'react'
import './Cardxx.scss'

const Cardxx = ({ tutor_img, tutor_name, rating_img, rating_value, orders, reviews }) => {
    return (
        <div className="cardxx">
            <div className="cardxx-img">
                <img src={tutor_img} alt="img" />
            </div>
            <div className="cardxx-title">
                <p>{tutor_name}</p>
                <img src={rating_img} alt="ratings" />
                <p>Success rate - {rating_value}</p>
            </div>
            <div className="cardxx-divider"></div>
            <div className="cardxx-content">
                <div>
                    <p>{orders}</p>
                    <p>Orders</p>
                </div>
                <div>
                    <p>{reviews}</p>
                    <p>Reviews</p>
                </div>
            </div>
            <div className="btn-large cardxx-btn">CONTACT EXPERT</div>
        </div>
    )
}

export default Cardxx