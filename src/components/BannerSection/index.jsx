import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./style.module.scss"
import { Link } from 'react-router-dom';

const BannerSection = () => {
    return (
        <div className="banner-section clearfix">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 text-center">
                        <Carousel>
                            <Carousel.Item>
                                <div className="item"><img src="assets/images/slide-01.jpg" alt="" /></div>
                            </Carousel.Item>
                            <Carousel.Item>

                                <div className="item"><img src="assets/images/slide-02.jpg" alt="" /></div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="legal-help">
                            <Carousel>
                                <Carousel.Item>
                                    <div className="item">
                                        <h5>Legal Help</h5>
                                        <ul>
                                            <li className="wh"><Link to="#">What's Hot</Link></li>
                                            <li className="es"><Link to="#">Ending Soon</Link></li>
                                            <li className="gd"><Link to="#">Guide</Link></li>
                                            <li className="wn"><Link to="#">What's New</Link></li>
                                            <li className="ts"><Link to="#">Top Searches</Link></li>
                                            <li className="rb"><Link to="#">Recent Buys</Link></li>
                                        </ul>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="item">
                                        <h5>Most</h5>
                                        <ul>
                                            <li className="wh"><Link to="#">Most Viewed</Link></li>
                                            <li className="es"><Link to="#">Most interactive</Link></li>
                                        </ul>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="item">
                                        <h5>Download</h5>
                                        <ul>
                                            <li className="wh"><Link to="#">Most viewed</Link></li>
                                            <li className="gd"><Link to="#">Frequent downloaded</Link></li>
                                            <li className="es"><Link to="#">Most downloaded</Link></li>
                                        </ul>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-lg-2 order-lg-first col-md-6">
                        <div className="request-a-item">
                            <h3 className='text-request'>Request A Item</h3>
                            <h4>Register</h4>
                            <p>Fill input field</p>
                            <form>
                                <div className="mt-2 mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email address" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputMobile" className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" id="exampleInputMobile" placeholder="Enter mobile no." />
                                </div>
                                <div className="or">
                                    <hr className="left" />
                                    or
                                    <hr className="right" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col-6 text-left"><Link to="#"><img src="assets/images/facebook-login.jpg" alt="" /></Link></div>
                                    <div className="col-6 text-right"><Link to="#"><img src="assets/images/google-plus-login.jpg" alt="" /></Link></div>
                                </div>
                                <button type="submit" className="btn btn-primary">Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSection;