import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Button from '../Custom-Button/Button';
import circle from "../svg/circle.svg"
import dots from "../svg/dots-2.svg"
import './PlanCard.css'



const PlanCard = () => {
    return (
        <div className="plan-card">
            <img src={circle}  className="circle-svg" alt="circle svg"/>
    
            <section className="plans">
                <div className="basic-card">
                    <div className="card-hearder">
                        <p>Basic</p>
                        <h1>&#8358;1,250 <span className="month">/mon</span></h1>
                    </div>
                    <div className="categories">
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Upload 50 Products</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Free .com.ng Domain</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Live Chat</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Payment Integration</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Product Support</p>
                        </div>
                    </div>

                    <div className="card-input-section">
                        <select name="" id="" className="select">
                            <option value="">Annually</option>
                            <option value="">Monthly</option>
                        </select>
                        <input type="number" placeholder='1' className="text-input"/>
                        <Button className="card-get-Started" children="Get Started" />
                    </div>
                </div>
                <div className="bigShop-card">
                    <div className="card-hearder">
                        <p>Big <br/> <span>Shop</span> </p>
                        <h1>&#8358;4,170 <span className="month">/mon</span></h1>
                    </div>
                    <div className="categories">
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Upload 200 Products</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Free .com Domain</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Live Chat</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Payment Integration</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Android App (Pay Annually)</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Logo Design (Pay Annually)</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Product Support</p>
                        </div>
                    </div>

                    <div className="card-input-section">
                        <select name="" id="" className="select">
                            <option value="">Annually</option>
                            <option value="">Monthly</option>
                        </select>
                        <input type="number" placeholder='1' className="text-input"/>
                        <Button className="card-get-Started" children="Get Started" />
                    </div>
                </div>

                <div className="customPlan-card">
                    <div className="card-hearder">
                        <p>Custom <br/> <span>Plan</span> </p>
                        <h5>Contact Us For <br/> <span className="price">Price</span> </h5>
                    </div>
                    <div className="categories">
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Unlimited Products</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Free .com</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Live Chat</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Payment Integration</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Mobile Apps</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Logo Design</p>
                        </div>
                        <div className="item">
                            <FaCheckCircle className="checked-icon"/>
                            <p>Choose Your Features & Design</p>
                        </div>
                    </div>
                    <Button className="card-get-Started contact-us"  children="Contact Us" />
                </div>

            </section>
            <img src={dots} className="plan-dotssvg" alt="Dot svg"/>

            <section className="all-plans">
                <div className="all-plans-card">
                    <h2>All plans contain the following</h2>
                    <div className="all-plans-container">
                        <div className="all-plans-list">
                            <div className="item">
                                <FaCheckCircle className="all-checked-icon"/>
                                <p>Product management app</p>
                            </div>
                            <div className="item">
                                <FaCheckCircle className="all-checked-icon"/>
                                <p>Order tracking</p>
                            </div>
                        </div>
                        <div className="all-plans-list">
                            <div className="item">
                                <FaCheckCircle className="all-checked-icon"/>
                                <p>SSL security</p>
                            </div>
                            <div className="item">
                                <FaCheckCircle className="all-checked-icon"/>
                                <p>Multiple storefront templates</p>
                            </div>
                        </div>

                        <div className="allPlans-btn-container">
                            <Button className="all-plans-btn" children="Get Started"/>
                            <FaChevronRight className="arrow-right-icon" />
                        </div>
                    </div>
                </div>
                
                

            </section>
        </div>
    )
}

export default PlanCard
