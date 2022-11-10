import React from 'react'
import './Cardxxx.scss'

const Cardxxx = ({avatar, name, date, ratings, title, content}) => {
  return (
    <div className="cardxxx">
      <div className="cardxxx-box"></div>
      <div>
        <div className="cardxxx-profile">
          <img src={avatar} alt="avatar"/>
          <div>
          <div className="cardxxx-profile-date">{date}</div>
          <div className="cardxxx-profile-name">{name}</div>
          </div>
        </div>
        <div className="cardxxx-content">
          <div className="cardxxx-content-sub">
            <div className="cardxxx-content-sub-rating">
              <img src={ratings} alt="ratings"/>
              <p>Verified order</p>
            </div>
            <div className="cardxxx-content-sub-date">{date}</div>
          </div>
          <div className="cardxxx-content-main">
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardxxx