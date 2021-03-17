import React from 'react'
import Button from '../Custom-Button/Button'
import './GotCovered.css'
import leftDotSvg from '../svg/dots-2.svg'
import aboutImage from '../images/aboutx.jpg'
import rightDotSvg from '../svg/dots-2.svg'

const GotCovered = () => {
    return (
        <div className="got-covered">
            <h1>We've Got You </h1>
            <h1>Covered</h1>
            <p className='first-pTag'>It doesn't matter what you sell, with </p>
            <p>this platform you can get a website</p>
            <p>faster than you can prepare breakfast.</p>
                
            <Button className="start-now" children="Start Now"/>
        </div>
    )
}

const GotCoveredImage = () => {
    return (
        <div className="get-covered-image">
            <img src={leftDotSvg} className="dot-item leftDotSvg" alt="Dot SVG"/>
            <img src={aboutImage} className="image-item" alt="About"/>
            <img src={rightDotSvg} className="dot-item rightDotSvg"  alt="Dot SVG"/>
            
        </div>
    )
}

export {GotCovered, GotCoveredImage}
