import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "./style.module.scss";
import { BsFillCartFill, BsHammer, BsSearch, BsList, BsChevronDown } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <div className="header-top-section clearfix">
                <div className="container">
                    <div className="header-top-left">
                        <ul>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Register</a></li>
                        </ul>
                    </div>
                    <div className="header-top-right">
                        <ul>
                            <li><a href="#"><i className="fa-solid fa-cart-shopping"></i> Cart(0)</a></li>
                            <li><a href="#"><i className="fa-solid fa-gavel"></i> My Bid(0)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-mid-section clearfix">
                <div className="container">
                    <div className="logo"><a href="/"><img src="assets/images/logo.png" alt="" /></a></div>
                    <div className="menu">
                        <Nav>
                            <div className="wrapper">
                                <input type="radio" name="slider" id="menu-btn"></input>
                                <input type="radio" name="slider" id="close-btn"></input>
                                <ul className="nav-links">
                                    <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="#">List of Attorneys / Lawyers</a></li>
                                    <li><a href="#" className="desktop-item">Legal Process</a>
                                        <input type="checkbox" id="showDrop"></input>
                                        <label htmlFor="showDrop" className="mobile-item">Legal Process</label>
                                        <ul className="drop-menu">
                                            <li><a href="#">Free lease agreements</a></li>
                                            <li><a href="#">Adopting A Child</a></li>
                                            <li><a href="#">Association agreement</a></li>
                                            <li><a href="#">Business Contract Template</a></li>
                                            <li><a href="#">Child Maintenance</a></li>
                                            <li><a href="#">Criminal Matter</a></li>
                                            <li><a href="#">Domestic Violence</a></li>
                                            <li><a href="#">Fostering a Child</a></li>
                                            <li><a href="#">Antenuptial contract</a></li>
                                            <li><a href="#">Peace Order</a></li>
                                            <li><a href="#">Legal Agreements Online</a></li>
                                            <li><a href="#">Offer to purchase</a></li>
                                            <li><a href="#">Pro bono attorneys</a></li>
                                            <li><a href="#">Living Will</a></li>
                                            <li><a href="#">Intellectual Property</a></li>
                                            <li><a href="#">VISA Process</a></li>
                                            <li><a href="#">Spousal Maintenance</a></li>
                                            <li><a href="#">Child Maintenance</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">List Your Law Firm</a></li>
                                    <li><a href="#">FREE Legal Agreements</a></li>
                                    <li><a href="/apply">Legal Jobs</a></li>
                                    <li><a href="/tenders">Tenders</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                                <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                            </div>
                        </Nav>
                    </div>
                </div>
            </div>
            <div className="header-bot-section clearfix">
                <div className="container">
                    <div className="header-search">
                        <div className="row">
                            <div className="col-md-4">
                                <label>Search Company / Products:</label>
                            </div>
                            <div className="col-md-4 col-12">
                                <input type="search" name="" placeholder="Enter Company / Products Name" />
                            </div>
                            <div className="col-md-3 col-10">
                                <select>
                                    <option>Select Option</option>
                                </select>
                            </div>
                            <div className="col-md-1 col-2">
                                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header