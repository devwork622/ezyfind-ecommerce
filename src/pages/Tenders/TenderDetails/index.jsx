import React from "react";
import InnerBanner from "../../../components/InnerBanner";
import AppSection from "../../../components/AppSection";

const TenderDetails = () => {
    return (
        <>
            <InnerBanner title="tender details" />
            <div className="content-section clearfix">
                <div className="tender-list-section clearfix">
                    <div className="container">
                        <div className="tender-details">
                            <div className="tab-content">
                                <ul>
                                    <li><a href="#" className="select">Details</a></li>
                                    <li><a href="#">Documents <span>3</span></a></li>
                                    <li><a href="#">Source</a></li>
                                </ul>
                            </div>
                            <div className="tab-details">
                                <div>
                                    <p><strong>Bid Number:</strong> OLT2040156<br />
                                        <strong>Bid Description:</strong> SUPPLY, INSTAL OF 600 M DUST SUPRESSION PIPE AND MAINTENANCE.,<br />
                                        <strong>Name of Institution:</strong> Eskom / KENDAL POWER STATION<br />
                                        <strong>Eskom Group:</strong> GENERATION<br />
                                        <strong>Contract:</strong> Eskom General Conditions Purchase<br />
                                        <strong>Audience:</strong> All Suppliers</p>
                                    <p><strong>Date Published:</strong> 2022-08-22  05:27:02<br /><strong>Audience:</strong> All Suppliers</p>
                                    <p><strong>Enquiries:</strong><br /><strong>Email:</strong> <a href="mailto:fatu-mary.funtah@eskom.co.za">fatu-mary.funtah@eskom.co.za</a><br /><strong>Address:</strong> informaltendering@eskom.co.za</p>
                                </div>
                                <div style={{display: "none"}}>Documents</div>
                                <div style={{display: "none"}}>Source</div>
                            </div>
                        </div>
                    </div>
                </div>
                <AppSection />
            </div>
        </>
    )
}

export default TenderDetails;