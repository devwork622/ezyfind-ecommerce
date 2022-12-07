import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Carousel as ResponsiveCarousel } from "react-bootstrap";
import "./style.module.scss"

const ProductSection = () => {

    const [startDate, setStartDate] = useState(new Date());

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1340 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1340, min: 720 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 720, min: 0 },
            items: 1
        }
    };

    const productData = [{
        name: "New Company - Corporate Identity Pack",
        url: "assets/images/image-1.png",
        price: 15750
    },
    {
        name: "New Company - Corporate Identity Pack",
        url: "assets/images/image-2.png",
        price: 15750
    },
    {
        name: "New Company - Corporate Identity Pack",
        url: "assets/images/image-3.png",
        price: 15750
    },
    {
        name: "New Company - Corporate Identity Pack",
        url: "assets/images/image-4.png",
        price: 15750
    },
    ]

    return (
        <div className="products-section clearfix">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="product-image-slider-01">
                            <div className="carousel-style">
                                <ResponsiveCarousel >
                                    <ResponsiveCarousel.Item>
                                        <div className="item"><img src="assets/images/product-slide-01.png" alt="" /></div>
                                    </ResponsiveCarousel.Item>
                                    <ResponsiveCarousel.Item>
                                        <div className="item"><img src="assets/images/product-slide-04.png" alt="" /></div>
                                    </ResponsiveCarousel.Item>
                                    <ResponsiveCarousel.Item>
                                        <div className="item"><img src="assets/images/product-slide-05.png" alt="" /></div>
                                    </ResponsiveCarousel.Item>
                                </ResponsiveCarousel>
                            </div>
                            <div className="product-category-title">
                                <div className="diagonal-box">
                                    <h4>Deals Of The Week</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <Carousel responsive={responsive}>
                            {productData.map((e) => {
                                return (
                                    <div className="item" key={e}>
                                        <div className="product-box">
                                            <figure><img src={e.url} alt="" /></figure>
                                            <section>
                                                <div className="wishlist"><a href="#"><img src="assets/images/icon-wishlist.png" alt="" /></a></div>
                                                <h2><a href="#">{e.name}</a></h2>
                                                <h4>R {e.price}.00 <span>Hire per day</span></h4>
                                                <div className="row">
                                                    <div className="col-12"> <span className="input-number-decrement">–</span>
                                                        <input className="input-number" type="text" defaultValue={1} min="0" max="10" />
                                                        <span className="input-number-increment">+</span> </div>
                                                    <div className="col-6">
                                                        <input type="text" className="form-control" placeholder="Start Date" />
                                                    </div>
                                                    <div className="col-6">
                                                        <input type="text" className="form-control" placeholder="End Date" />
                                                    </div>
                                                    <div className="col-12 text-center"><i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></div>
                                                    <div className="col-6">
                                                        <button type="button" className="btn btn-primary"><i className="fa-solid fa-cart-shopping"></i> Add Cart</button>
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" className="btn btn-secondary">Hire Now</button>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="product-image-slider-01">
                            <div className="carousel-style">
                                <ResponsiveCarousel >
                                    <ResponsiveCarousel.Item>
                                        <div className="item"><img src="assets/images/product-slide-01.png" alt="" /></div>
                                    </ResponsiveCarousel.Item>
                                    <ResponsiveCarousel.Item>
                                        <div className="item"><img src="assets/images/product-slide-04.png" alt="" /></div>
                                    </ResponsiveCarousel.Item>
                                    <ResponsiveCarousel.Item>
                                        <div className="item"><img src="assets/images/product-slide-05.png" alt="" /></div>
                                    </ResponsiveCarousel.Item>
                                </ResponsiveCarousel>
                            </div>
                            <div className="product-category-title">
                                <div className="diagonal-box">
                                    <h4>Deals Of The Week</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <Carousel responsive={responsive}>
                            {productData.map((e) => {
                                return (
                                    <div className="item" key={e}>
                                        <div className="product-box">
                                            <figure><img src={e.url} alt="" /></figure>
                                            <section>
                                                <div className="wishlist"><a href="#"><img src="assets/images/icon-wishlist.png" alt="" /></a></div>
                                                <h2><a href="#">{e.name}</a></h2>
                                                <h4>R {e.price}.00 <span>Hire per day</span></h4>
                                                <div className="row">
                                                    <div className="col-12"> <span className="input-number-decrement">–</span>
                                                        <input className="input-number" type="text" defaultValue={1} min="0" max="10" />
                                                        <span className="input-number-increment">+</span> </div>
                                                    <div className="col-6">
                                                        <input type="text" className="form-control" placeholder="Start Date" />
                                                    </div>
                                                    <div className="col-6">
                                                        <input type="text" className="form-control" placeholder="End Date" />
                                                    </div>
                                                    <div className="col-12 text-center"><i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></div>
                                                    <div className="col-6">
                                                        <button type="button" className="btn btn-primary"><i className="fa-solid fa-cart-shopping"></i> Add Cart</button>
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" className="btn btn-secondary">Hire Now</button>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSection;