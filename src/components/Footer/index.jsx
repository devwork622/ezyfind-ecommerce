import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {    

    return (
        <>
            <div className="footer-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Quick Links</h4>
                            <ul className="link">
                                <li><Link to="#">24/7 Support</Link></li>
                                <li><Link to="#">Features</Link></li>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Individual Terms &amp; Conditions</Link></li>
                                <li><Link to="#">Business Terms &amp; Conditions</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Get In Touch</h5>
                            <ul>
                                <li className="support"><Link to="#">24/7 Support online chat</Link></li>
                                <li className="call"><Link to="#">011 056 9123</Link></li>
                                <li className="mail"><Link to="#">info@ezyfind.co.za</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Follow Us On</h5>
                            <ul>
                                <li><Link to="#"><i className="fa-brands fa-facebook-f"></i> Facebook</Link></li>
                                <li><Link to="#"><i className="fa-brands fa-google-plus-g"></i> Google+</Link></li>
                                <li><Link to="#"><i className="fa-brands fa-twitter"></i> Twitter</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrights-section clearfix">
                <div className="container">
                    <p>&copy;  {new Date().getFullYear()} www.LawyersEzyFind.co.za All Rights Reserved. Registered under Innovation Evolved (Pty) Ltd </p>
                    <p><Link to="www.LawyersEzyFind.co.za">www.LawyersEzyFind.co.za</Link> is not responsible for any loss incurred whatsoever by using this services.</p>
                </div>
            </div>                       
        </>
    )
}

export default Footer;