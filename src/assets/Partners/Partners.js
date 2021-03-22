import React from 'react'
import './Partners.css'
import gStore from '../images/gstore.png'
import heel from '../images/heel.png'
import lois from '../images/lois.png'
import mart from '../images/mart.png'
import sam from '../images/sam.png'
import toner from '../images/toner.png'
const Partners = () => {
    return (
        <div className="partners">
            <h1>Trusted by 100s of startups in Nigeria</h1>
            <div className="partner-logos">
                <img src={gStore} alt="gStore" className="part-logo1"/>
                <img src={ heel} alt=" heel" className="part-logo1"/>
                <img src={lois} alt="lois" className="part-logo1"/>
                <img src={ mart} alt=" mart" className="part-logo pt-same-style"/>
                <img src={sam } alt="sam " className="part-logo pt-same-style"/>
                <img src={toner} alt="toner" className="part-logo1 pt-same-style"/>
            </div>
        </div>
    )
}

export default Partners
