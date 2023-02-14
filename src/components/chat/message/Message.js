import React from 'react'
import './Message.css'
const Message = ({ message: { name, user_id, message }, current_uid }) => {

    let isCurrentUser = false

    if (user_id === current_uid) {
        isCurrentUser = true
    }

    console.log(message)

    return (
        isCurrentUser ?
            <div className="row right-align">
                <div className="col s12 m8 16 right">
                    <div className="sentbyme">{name} : {message}</div>
                </div>
            </div>
            :
            <div className="row left-align">
                <div className="col s12 m8 16 left">
                    <div className="opponent">{name} : {message}</div>
                </div>
            </div>

    )
}

export default Message