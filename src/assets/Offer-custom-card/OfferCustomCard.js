import React from 'react'
import './OfferCustomCard.css'
import mobile from '../svg/icon-45.svg'

const OfferCustomCard = ({otherprops}) => {
    return (
        <div className= "offer-custom-card">
            <img src={otherprops.icon} alt={otherprops.altName} className="offer-icons"/>
            <div className="details">
                <h3 className="title">{otherprops.title} </h3>
                <p className="details-texts">{otherprops.text}</p>
            </div>
        </div>
    )
}

export default OfferCustomCard
