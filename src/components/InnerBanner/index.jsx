import React from "react";

const InnerBanner = ({title}) => {
    return (
        <div className="inner-banner-section clearfix">
            <div className="hero-img"><img src="assets/images/inner-banner.png" alt="" /></div>
            <div className="wrapper">
                <div className="container">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default InnerBanner