import React from 'react'
import './Banner.css'
import Button from '../Custom-Button/Button'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>Launch Your <span>Fashion</span> Business</h1>
                <p className="ban-first-pTag">Customers will only buy from you if you have a lovely concept and a professional e-commerce</p>
                <p className="ban-second-pTag">website. Get it in the next 3 minutes</p>
            </div>
            <div className="input-fields">
                <input type="text"  placeholder="Name of your business"/>
                <input type="email"  placeholder="Email"/>
                <Button className='build-website' children="Build My Free Website"/>
            </div>
        </div>
    )
}

export default Banner
