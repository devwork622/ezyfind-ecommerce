import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "./style.module.scss";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const storeValue = useSelector((store) => store)

    return (
        <>
            <div className="header-top-section clearfix">
                <div className="container">
                    <div className="header-top-left">
                        <ul>
                            <li><Link to="#">Login</Link></li>
                            <li><Link to="#">Register</Link></li>
                        </ul>
                    </div>
                    <div className="header-top-right">
                        <ul>
                            <li><Link to="#"><i className="fa-solid fa-cart-shopping"></i> Cart({storeValue.CartReducer.count_cart})</Link></li>
                            <li><Link to="#"><i className="fa-solid fa-gavel"></i> My Bid(0)</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-mid-section clearfix">
                <div className="container">
                    <div className="logo"><Link to="/"><img src="assets/images/logo.png" alt="" /></Link></div>
                    <div className="menu">
                        <Nav>
                            <div className="wrapper">
                                <input type="radio" name="slider" id="menu-btn"></input>
                                <input type="radio" name="slider" id="close-btn"></input>
                                <ul className="nav-links">
                                    <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/attorneys">List of Attorneys / Lawyers</Link></li>
                                    <li><Link to="#" className="desktop-item">Legal Process</Link>
                                        <input type="checkbox" id="showDrop"></input>
                                        <label htmlFor="showDrop" className="mobile-item">Legal Process</label>
                                        <ul className="drop-menu">
                                            <li><Link to="#">Free lease agreements</Link></li>
                                            <li><Link to="#">Adopting A Child</Link></li>
                                            <li><Link to="#">Association agreement</Link></li>
                                            <li><Link to="#">Business Contract Template</Link></li>
                                            <li><Link to="#">Child Maintenance</Link></li>
                                            <li><Link to="#">Criminal Matter</Link></li>
                                            <li><Link to="#">Domestic Violence</Link></li>
                                            <li><Link to="#">Fostering a Child</Link></li>
                                            <li><Link to="#">Antenuptial contract</Link></li>
                                            <li><Link to="#">Peace Order</Link></li>
                                            <li><Link to="#">Legal Agreements Online</Link></li>
                                            <li><Link to="#">Offer to purchase</Link></li>
                                            <li><Link to="#">Pro bono attorneys</Link></li>
                                            <li><Link to="#">Living Will</Link></li>
                                            <li><Link to="#">Intellectual Property</Link></li>
                                            <li><Link to="#">VISA Process</Link></li>
                                            <li><Link to="#">Spousal Maintenance</Link></li>
                                            <li><Link to="#">Child Maintenance</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">List Your Law Firm</Link></li>
                                    <li><Link to="#">FREE Legal Agreements</Link></li>
                                    <li><Link to="/apply">Legal Jobs</Link></li>
                                    <li><Link to="/tenders">Tenders</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Contact</Link></li>
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