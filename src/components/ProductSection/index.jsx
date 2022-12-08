import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "react-datepicker/dist/react-datepicker.css";
import { Carousel as ResponsiveCarousel } from "react-bootstrap";
import "./style.module.scss"
import { useDispatch } from "react-redux";
import { CountCart } from "../../redux/Cart/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const ProductSection = () => {

    // const [startDate, setStartDate] = useState(new Date());
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

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

    //increase counter
    const increase = () => {
        setCount(count => count + 1);
    };

    //decrease counter
    const decrease = () => {
        if (count <= 1)
            return;
        else
            setCount(count => count - 1);
    };

    const handleChange = (e) => {
        setCount(e.target.value)
    }    

    const handleAddCart = () => {
        dispatch(CountCart(count));
        if (count === 1)
            toast.success(`Added ${count} product`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        else 
        toast.success(`Added ${count} products`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


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
                                                <div className="wishlist"><Link to="#"><img src="assets/images/icon-wishlist.png" alt="" /></Link></div>
                                                <h2><Link to="#">{e.name}</Link></h2>
                                                <h4>R {e.price}.00 <span>Hire per day</span></h4>
                                                <div className="row">
                                                    <div className="col-12"> <span className="input-number-decrement" onClick={decrease}>–</span>
                                                        <input className="input-number" type="text" value={count} onChange={handleChange} min="1" max="10" />
                                                        <span className="input-number-increment" onClick={increase}>+</span> </div>
                                                    <div className="col-6">
                                                        <input type="text" className="form-control" placeholder="Start Date" />
                                                    </div>
                                                    <div className="col-6">
                                                        <input type="text" className="form-control" placeholder="End Date" />
                                                    </div>
                                                    <div className="col-12 text-center"><i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></div>
                                                    <div className="col-6">
                                                        <button type="button" className="btn btn-primary" onClick={handleAddCart}><i className="fa-solid fa-cart-shopping"></i> Add Cart</button>
                                                    </div>
                                                    <div className="col-6">
                                                        <Link to="/cart" className="btn btn-secondary">Hire Now</Link>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSection;