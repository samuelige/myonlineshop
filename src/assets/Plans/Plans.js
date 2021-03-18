import React from 'react'

import { BsToggleOn } from "react-icons/bs";

import './Plans.css'
import arrow from '../svg/arrow.svg'
import PlanCard from '../plan-custom-card/PlanCard';

const Plans = () => {
    return (
        <div className="plans">
            <h1>Choose a Plan</h1>
            <p>Get all our amazing tools and features at little cost.</p>
            
            <div className="arrow-and-text">
                <img src={arrow} className="arrow-svg"  alt="arrow svg"/>
                <p>Save up to 17%</p>
            </div>
            <div className="subscription">
               <p>Monthly</p> 
               <BsToggleOn className="toggle-icon" />
               <p>Annual</p>
            </div>
            <PlanCard />

            
        </div>
    )
}

export default Plans
