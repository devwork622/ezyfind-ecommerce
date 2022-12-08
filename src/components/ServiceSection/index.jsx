import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.module.scss';
import { Link } from 'react-router-dom';

const ServiceSection = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1340 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1340, min: 720 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 720, min: 0 },
            items: 1
        }
    };

    const data = [
    { title: "Divorce", url: "assets/images/image 18.png"}, 
    { title: "Will", url: "assets/images/image 18a.png"}, 
    { title: "Child Maintenance", url:"assets/images/image 18b.png" }, 
    { title: "Trust", url:"assets/images/image 18c.png" }, 
    { title: "VISA assistance", url:"assets/images/image 18d.png" }, 
    { title: "Bail", url:"assets/images/image 18e.png" }]

    return (
        <div className="services-section clearfix">
            <div className="container">
                <Carousel responsive={responsive}>
                    {data.map((e) => {
                        return (
                            <div className="item" key={e}>
                                <div className="services-box"><img src={e.url} alt="" />
                                    <h6>{e.title}</h6>
                                    <div className="btn-rfq"><Link to="#">Request for Quote <i className="fa-solid fa-arrow-right-long"></i></Link></div>
                                </div>
                            </div>
                        )
                    })}

                </Carousel>
            </div>
        </div>
    )
}

export default ServiceSection;