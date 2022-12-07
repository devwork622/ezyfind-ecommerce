import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./style.module.scss"

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
                                            <li className="wh"><a href="#">What's Hot</a></li>
                                            <li className="es"><a href="#">Ending Soon</a></li>
                                            <li className="gd"><a href="#">Guide</a></li>
                                            <li className="wn"><a href="#">What's New</a></li>
                                            <li className="ts"><a href="#">Top Searches</a></li>
                                            <li className="rb"><a href="#">Recent Buys</a></li>
                                        </ul>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="item">
                                        <h5>Most</h5>
                                        <ul>
                                            <li className="wh"><a href="#">Most Viewed</a></li>
                                            <li className="es"><a href="#">Most interactive</a></li>
                                        </ul>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="item">
                                        <h5>Download</h5>
                                        <ul>
                                            <li className="wh"><a href="#">Most viewed</a></li>
                                            <li className="gd"><a href="#">Frequent downloaded</a></li>
                                            <li className="es"><a href="#">Most downloaded</a></li>
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
                                    <div className="col-6 text-left"><a href="#"><img src="assets/images/facebook-login.jpg" alt="" /></a></div>
                                    <div className="col-6 text-right"><a href="#"><img src="assets/images/google-plus-login.jpg" alt="" /></a></div>
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