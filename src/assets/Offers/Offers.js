import React, { useState } from 'react'
import './Offers.css'
import mobile from "../svg/icon-9.svg"
import offer from "../svg/icon-2.svg"
import payment from "../svg/icon-5.svg"
import customizable from "../svg/icon-45.svg"
import OfferCustomCard from '../Offer-custom-card/OfferCustomCard'

const Offers = () => {
  
    const [state, setState] = useState(
        [
            {
                icon: mobile,
                altName: "mobile",
                title: "On The Go",
                text: "Because your business deserves attention, we have made it possible to manage your website from your mobile device."
            },
            {
                icon:customizable,
                altName: "customizable",
                title: "Customizable",
                text:"Customize the appearance of your website in a few simple clicks.",
            },
            {
                icon: payment,
                altName: "payment",
                title: "Seamless Payment",
                text: "You can easily accept customer payments on your website using multiple secure methods.",
            },
            {
                icon: offer,
                altName: "offer",
                title: "Offers & Discounts",
                text: "Make your business more attractive by offering sweet deals and discounts. You can do this in a few clicks.",
            }
        ]
    )
    return (
        <div className="offers">
            {
                state && 
                state.map(({...otherprops}) => {
                    return (
                        <OfferCustomCard otherprops={otherprops}/>
                    )
                })
            }
        </div>
    )
}

export default Offers
