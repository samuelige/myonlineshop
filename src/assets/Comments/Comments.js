import React from 'react'
import "./Comments.css"
import '../GotCovered/GotCovered.css'
import heels from '../images/heel.png'
import leftDotSvg from '../svg/dots-2.svg'
import womanImage from '../images/wom4.jpg'
import rightDotSvg from '../svg/dots-2.svg'

const Comments = () => {
    return (
        <div className="comments got-covered">
            <img src={heels} className="heels" alt="heels "/>
            <p className="your-Design first-pTag">Your design is really good and I </p>
            <p >appreciate the simplicity. More power</p>
            <p>to you guys. Thank you!</p>
            
            <div className="comment-title">
                <h1>Janet Ohanebo</h1>
                <small>CEO</small>
            </div>
        </div>
    )
}

const CommentsImage = () => {
    return (
        <div className="comments-image get-covered-image">
            <img src={leftDotSvg} className="dot-item leftDotSvg" alt="Dot SVG"/>
            <img src={womanImage} className="image-item" alt="About"/>
            <img src={rightDotSvg} className="dot-item rightDotSvg"  alt="Dot SVG"/>
        </div>
    )
}

export { Comments, CommentsImage}
