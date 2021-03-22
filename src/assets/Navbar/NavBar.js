import React from 'react'
import './NavBar.css'
import mainLogo from '../svg/logomain4a.svg'
import Tabs from '../Tabs/Tabs'
import Button from '../Custom-Button/Button'
import { FaEquals } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="nav-Bar">
            <div className="img-container">
                <img src={mainLogo} className="mainLogo" alt="myonlineshop official logo"/>
                <FaEquals className="dropDownIcon" />
            </div>
            <div className="tabs-and-button-container">
                <Tabs/>
                <div className="get-btn">
                    <Button  className="get-started" children="Get Started"/>
                </div>
            </div>
        </div>
    )
}

export default NavBar
