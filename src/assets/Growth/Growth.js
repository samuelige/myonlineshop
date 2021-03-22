import React, { Fragment } from 'react'
import Button from '../Custom-Button/Button'
import "./Growth.css"
import ipad from '../svg/ipad.svg'
import  growthDotsLeft from '../svg/dots-2.svg'
import iphone from '../svg/iphone-x.svg'
import  growthDotsRight from '../svg/dots-2.svg'

const Growth = () => {
    return (
        <div className="growth-and-images-container">
             <div className="growthImage-left">
                <img src={ipad} alt="ipad" className="ipad"/>
                <img src={growthDotsLeft} alt="growthDotsLeft" className="dotItem1"/>
            </div>
            <div className="growth">
                <h1>Ready to growth your <br/> business?</h1>
                <p>set your timer to 3 minutes and start by filling the form 
                below, after a few simple steps you will have yourself a 
                website.
                </p>

                <div className="growth-input">
                    <input type="text" className="enter" placeholder="Enter your business name"/>
                    <Button className="growth-btn" children="Get Started"/>
                </div>
            </div>
            <div className="growthImage-right">
                
            <img src={growthDotsRight} alt="growthDotsRight" className="dotItem2"/>
                <img src={iphone} alt="iphone" className="iphone"/>
               
            </div>
        </div>
    )
}

export default Growth
