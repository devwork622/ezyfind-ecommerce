import React from "react";
import InnerBanner from "../../components/InnerBanner";
import AppSection from "../../components/AppSection";

const Cart = () => {
    return (
        <>
            <InnerBanner title="cart" />
            <div className="content-section clearfix">
                <div className="cart-details-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-8 left-section">
                                <div className="cart-left-box clearfix">
                                    <div className="top-box">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <button type="button" className="btn btn-secondary">Continue Shopping</button>
                                            </div>
                                            <div className="col-lg-6">You have 2 iteam in your cart</div>
                                            <div className="col-lg-3">
                                                <button type="button" className="btn btn-primary">Empty Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-box">
                                        <div className="row">
                                            <div className="col-lg-4"><img src="assets/images/img-05.png" alt="" /></div>
                                            <div className="col-lg-8">
                                                <h6>New Company - Corporate identity pack</h6>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                <h5>R 10500.00 - FREE DOWNLOAD</h5>
                                                <p><strong>QUANTITY</strong></p>
                                                <div className="row">
                                                    <div className="col-lg-5 col-md-6"><span className="input-number-decrement">–</span>
                                                        <input className="input-number" type="text" defaultValue="1" min="0" max="10" />
                                                        <span className="input-number-increment">+</span></div>
                                                    <div className="col-lg-5 col-md-6">
                                                        <button type="button" className="btn btn-primary">REMOVE</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-box">
                                        <div className="row">
                                            <div className="col-lg-4"><img src="assets/images/img-06.png" alt="" /></div>
                                            <div className="col-lg-8">
                                                <h6>New Company - Corporate identity pack</h6>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                                                <h5>R 0.00 - FREE DOWNLOAD</h5>
                                                <div className="row mt-3">
                                                    <div className="col-md-6">
                                                        <div className="date-box">
                                                            <p>START DATE</p>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <label>DD</label>
                                                                    <input type="text" className="form-control date" placeholder="" />
                                                                </div>
                                                                <div className="col-4">
                                                                    <label>MM</label>
                                                                    <input type="text" className="form-control date" placeholder="" />
                                                                </div>
                                                                <div className="col-4">
                                                                    <label>YY</label>
                                                                    <input type="text" className="form-control date" placeholder="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="date-box">
                                                            <p>END DATE</p>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <label>DD</label>
                                                                    <input type="text" className="form-control date" placeholder="" />
                                                                </div>
                                                                <div className="col-4">
                                                                    <label>MM</label>
                                                                    <input type="text" className="form-control date" placeholder="" />
                                                                </div>
                                                                <div className="col-4">
                                                                    <label>YY</label>
                                                                    <input type="text" className="form-control date" placeholder="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 right-section">
                                <div className="cart-right-box clearfix">
                                    <h5>Your Cart Total</h5>
                                    <h2>R 10500.00</h2>
                                    <h6>Vat : 000000</h6>
                                    <h6>Extra Vat : 000000</h6>
                                    <h6 className="mt-4">Pay- today only</h6>
                                    <button type="button" className="btn btn-primary">Pay Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AppSection />
            </div>
        </>
    )
}
export default Cart;