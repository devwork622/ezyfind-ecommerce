import React from "react";

const Footer = () => {
    let currentDate = new Date();
let year = currentDate.getFullYear();

    return (
        <>
            <div className="footer-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Quick Links</h4>
                            <ul className="link">
                                <li><a href="#">24/7 Support</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Individual Terms &amp; Conditions</a></li>
                                <li><a href="#">Business Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Get In Touch</h5>
                            <ul>
                                <li className="support"><a href="#">24/7 Support online chat</a></li>
                                <li className="call"><a href="#">011 056 9123</a></li>
                                <li className="mail"><a href="#">info@ezyfind.co.za</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Follow Us On</h5>
                            <ul>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
                                <li><a href="#"><i className="fa-brands fa-google-plus-g"></i> Google+</a></li>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i> Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrights-section clearfix">
                <div className="container">
                    <p>&copy;  {new Date().getFullYear()} www.LawyersEzyFind.co.za All Rights Reserved. Registered under Innovation Evolved (Pty) Ltd </p>
                    <p><a href="www.LawyersEzyFind.co.za">www.LawyersEzyFind.co.za</a> is not responsible for any loss incurred whatsoever by using this services.</p>
                </div>
            </div>            
            <a href="#0" className="cd-top">Top</a>
        </>
    )
}

export default Footer;