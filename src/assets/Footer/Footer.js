import React from 'react'
import "./Footer.css"
import ReactCountryFlag from "react-country-flag"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import usFlag from '../svg/Flag_of_the_United_States.svg'
const Footer = () => {
    return (
        <div className="footer">
            <section className="col-1">
                <div className="contacts">
                    <p>+2348166459353 / info@myonlineshop.ng / </p>

                    <div className="mediaIcons-and-country">
                        <div className="fb-icon"><FaFacebookF className="f-icon " /></div>
                        <div className="ig-icon"><FaInstagram className="f-icon " /></div>
                        <select name="" className="select-language" id="">
                            <option  value="">English </option>
                            <option  value="">Deutsch</option>
                            <option  value="">Español</option>
                            <option  value="">Français</option>
                            <option  value="">Italiano</option>
                            <option  value="">Nederlands</option>
                            <option  value="">português</option>
                        </select>
                    </div>
                  
                </div>
            </section>
            <section className="col-2">
                <small className="small">© My Online Shop. 2020. All rights reserved.</small>
                <small className="p1 ">When you visit or interact with our sites, services or tools, we may use cookies for storing information to help provide you with a better,
                faster and safer experience and for marketing purposes.
                </small>
                
            </section>
        </div>
    )
}

export default Footer
