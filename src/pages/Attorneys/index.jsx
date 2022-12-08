import React from 'react';
import InnerBanner from "../../components/InnerBanner";
import AppSection from "../../components/AppSection";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import SpecialBox from '../../components/SpecialBox';
import InformationPanel from '../../components/InformationPanel';

const Attorneys = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1340 },
            items: 3
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

    const specialBoxData = [{
        imgUrl: "assets/images/img-01.png",
        title: "New Company - Corporate Identity Pack",
        description: "There are many variations of passages of Lorem Ipsum available...",
    },
    {
        imgUrl: "assets/images/img-01.png",
        title: "New Company - Corporate Identity Pack",
        description: "There are many variations of passages of Lorem Ipsum available...",
    },
    {
        imgUrl: "assets/images/img-01.png",
        title: "New Company - Corporate Identity Pack",
        description: "There are many variations of passages of Lorem Ipsum available...",
    },
    {
        imgUrl: "assets/images/img-01.png",
        title: "New Company - Corporate Identity Pack",
        description: "There are many variations of passages of Lorem Ipsum available...",
    },
    {
        imgUrl: "assets/images/img-01.png",
        title: "New Company - Corporate Identity Pack",
        description: "There are many variations of passages of Lorem Ipsum available...",
    },
    {
        imgUrl: "assets/images/img-01.png",
        title: "New Company - Corporate Identity Pack",
        description: "There are many variations of passages of Lorem Ipsum available...",
    },]

    const eflyerData = [{
        imgUrl: "assets/images/img-02.png",
        title: "New Company - Corporate Identity Pack",
        description: "There are many variations of passages of Lorem Ipsum available...",
    },
    {
        imgUrl: "assets/images/img-03.png",
        title: "New Company - Corporate Identity Pack",
        description: "There are many variations of passages of Lorem Ipsum available...",
    },
    {
        imgUrl: "assets/images/img-04.png",
        title: "New Company - Corporate Identity Pack",
        description: "There are many variations of passages of Lorem Ipsum available...",
    },
    {
        imgUrl: "assets/images/img-02.png",
        title: "New Company - Corporate Identity Pack",
        description: "There are many variations of passages of Lorem Ipsum available...",
    },
    {
        imgUrl: "assets/images/img-03.png",
        title: "New Company - Corporate Identity Pack",
        description: "There are many variations of passages of Lorem Ipsum available...",
    },
    {
        imgUrl: "assets/images/img-04.png",
        title: "New Company - Corporate Identity Pack",
        description: "There are many variations of passages of Lorem Ipsum available...",
    },]

    const reviewData = [{
        name: "JHON CLERK",
        property: "Creighton & Associates",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        name: "JHON CLERK",
        property: "Creighton & Associates",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        name: "JHON CLERK",
        property: "Creighton & Associates",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },]

    const attorneyFirmData = [{
        name: "Administrative law",
        url: "",
    },{
        name: "African Customary Law",
        url: "",
    },{
        name: "Aviation Law",
        url: "",
    },{
        name: "Banking and Finance Law",
        url: "",
    },{
        name: "Business and Industry",
        url: "",
    },{
        name: "Civil Rights Law",
        url: "",
    },{
        name: "Company Law",
        url: "",
    },{
        name: "Competition Law",
        url: "",
    },{
        name: "Constitutional Law",
        url: "",
    },{
        name: "Consumer Protection Law",
        url: "",
    },{
        name: "Copyright Law",
        url: "",
    },{
        name: "Criminal Matter",
        url: "",
    },{
        name: "Education Law",
        url: "",
    },{
        name: "Employment and Labour Law",
        url: "",
    }, {
        name: "Environmental Law",
        url: "",
    }, {
        name: "Estate Planning and Trusts Law",
        url: "",
    }, {
        name: "Family Law",
        url: "",
    }, {
        name: "General Legal Practice",
        url: "",
    }, {
        name: "Health Care and Social",
        url: "",
    }, {
        name: "Immigration Law",
        url: "",
    },{
        name: "Insolvency Law",
        url: "",
    },{
        name: "Insurance Law",
        url: "",
    },{
        name: "Intellectual Property Law",
        url: "",
    },{
        name: "International Law",
        url: "",
    },{
        name: "Law of Telecommunications",
        url: "",
    },{
        name: "Legal Professional Ethics",
        url: "",
    },{
        name: "Litigation",
        url: "",
    },{
        name: "Marriage and Divorce Law",
        url: "",
    },{
        name: "Media Law",
        url: "",
    },{
        name: "National Credit Act",
        url: "",
    },{
        name: "Personal Injury Law",
        url: "",
    },
    {
        name: "Pension Law",
        url: "",
    },
    {
        name: "Personal Injury Law",
        url: "",
    },
    {
        name: "Property Law",
        url: "",
    },
    {
        name: "Science and Technology Law",
        url: "",
    },
    {
        name: "Sports Law",
        url: "",
    },
    {
        name: "Tax Law",
        url: "",
    },
    {
        name: "The Law behind Medical Malpractice",
        url: "",
    },
    {
        name: "Lease of Land law",
        url: "",
    },]
    

    return (
        <>
            <InnerBanner title="fps attorneys" />
            <div className="content-section clearfix">
                <div className="business-details-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 left-section">
                                <div className="item-search-image"><img src="https://www.LawyersEzyFind.co.za/Documents/CompanyLogo/11070-FPS-Attorneys.jpg" alt="FPS Attorneys" />
                                    <div className="item-search-image-overlay">
                                        <h2>FPS Attorneys</h2>
                                    </div>
                                </div>
                                <div className="item-search-description">
                                    <h5>Description :</h5>
                                    <p>Our Firm is uniquely experienced in developing and implementing creative, practical and cost-effective solutions for the variety of issues confronting businesses and individuals today. We pride ourselves on being attentive, responsive and dedicated to our clients' individual needs. We can deliver a pro-active and effective solution thus creating - ”Clients for Life </p>
                                </div>
                                <div className="item-search-special">
                                    <h3>SPECIAL BY 3 M SOUTH AFRICA PVT LTD NO SPECIAL FOUND.</h3>
                                    <div className="row">
                                        {specialBoxData.map((e, i) => {
                                            return (
                                                <div className="col-lg-4 col-md-6" key={i}>
                                                    <SpecialBox imgUrl={e.imgUrl} title={e.title} description={e.description} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="paginations">
                                        <ul>
                                            <li><Link to="#"><i className="fa-solid fa-chevron-left"></i></Link></li>
                                            <li className="active"><Link to="#">1</Link></li>
                                            <li><Link to="#">2</Link></li>
                                            <li><Link to="#">3</Link></li>
                                            <li><Link to="#">4</Link></li>
                                            <li><i className="fa-solid fa-ellipsis"></i></li>
                                            <li><Link to="#"><i className="fa-solid fa-chevron-right"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item-search-e-files">
                                    <h3>E-FLYERS / E-CATALOGUE BY NEW AGE PLASTICS</h3>
                                    <Carousel responsive={responsive}>

                                        {eflyerData.map((e, i) => {
                                            return (
                                                <div className="item e-files-box px-2" key={i}>
                                                    <SpecialBox imgUrl={e.imgUrl} title={e.title} description={e.description} />
                                                </div>
                                            )
                                        })}
                                    </Carousel>
                                </div>
                                <div className="item-search-review">
                                    <h5>Review on  New age Plastica</h5>
                                    {reviewData.map((e, i) => {
                                        return (
                                            <div className="review-box" key={i}>
                                                <h6>{e.name} <span className="d-block">{e.property}</span></h6>
                                                <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                                                <p>{e.description}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-md-4 right-section">
                                <InformationPanel />
                                <div className="map">
                                    <iframe id='mapframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7130.551438708014!2d27.929524!3d-26.671663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd9e3abc61c8ec55!2sDHL%20Service%20Point%20(DHL%20VEREENIGING)!5e0!3m2!1sen!2sus!4v1670227126067!5m2!1sen!2sus" width="100%" height="300" style={{ border: 0, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }}></iframe>
                                </div>
                                <div className="categories">
                                    <h4>Categories Speacialise In</h4>
                                    <div className="content"></div>
                                </div>
                                <div className="rating">
                                    <h4> Rating</h4>
                                    <div className="content">
                                        <h5>Excellent</h5>
                                        <div className="progress">
                                            <div className="bar" style={{ width: "19%" }}>
                                                <p className="percent">19%</p>
                                            </div>
                                        </div>
                                        <h5>Very Good</h5>
                                        <div className="progress">
                                            <div className="bar" style={{ width: "20%" }}>
                                                <p className="percent">20%</p>
                                            </div>
                                        </div>
                                        <h5>Good</h5>
                                        <div className="progress">
                                            <div className="bar" style={{ width: "19%" }}>
                                                <p className="percent">19%</p>
                                            </div>
                                        </div>
                                        <h5>Average</h5>
                                        <div className="progress">
                                            <div className="bar" style={{ width: "23%" }}>
                                                <p className="percent">23%</p>
                                            </div>
                                        </div>
                                        <h5>Poor</h5>
                                        <div className="progress">
                                            <div className="bar" style={{ width: "21%" }}>
                                                <p className="percent">21%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews">
                                    <h4>Reviews</h4>
                                    <div className="content"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="law-categories-section clearfix">
                    <div className="container">
                        <h2>LAW CATEGORIES ATTORNEY FIRMS</h2>
                        <ul>
                            {attorneyFirmData.map((e, i) => {
                                return (
                                    <li key={i}><Link to={e.url}>{e.name}</Link></li>
                                )
                            })}
                            
                        </ul>
                    </div>
                </div>
                <AppSection />
            </div>
        </>
    )
}

export default Attorneys;