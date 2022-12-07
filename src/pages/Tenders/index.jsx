import React from "react";
import AppSection from "../../components/AppSection";
import TenderBox from "../../components/TenderBox";
import InnerBanner from "../../components/InnerBanner";

const Tenders = () => {

    const data = [{
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        id: "olt2040156345463",
        authour: "Eskom",
        date: "24 sept 2022 2:00 PM",
        views: 8,
    },
    {
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        id: "olt204015634534534",
        authour: "Eskom",
        date: "24 sept 2022 2:00 PM",
        views: 5,
    },
    {
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        id: "olt2040156345345345",
        authour: "Eskom",
        date: "24 sept 2022 2:00 PM",
        views: 18,
    },
    {
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        id: "olt204015634534534",
        authour: "Eskom",
        date: "24 sept 2022 2:00 PM",
        views: 8,
    },
    {
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        id: "olt20401560670798",
        authour: "Eskom",
        date: "24 sept 2022 2:00 PM",
        views: 8,
    },
    ]

    return (
        <>
            <InnerBanner title="TENDER LIST"/>
            <div className="content-section clearfix">
                <div className="tender-list-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <div className="search-box">
                                    <div className="title">Search</div>
                                    <div className="content">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label">Search</label>
                                                <input type="text" className="form-control" placeholder="tender,dept..,keywords........" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Region</label>
                                                <select className="form-select">
                                                    <option value>All Regions.....</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Industry</label>
                                                <select className="form-select">
                                                    <option value>All Categories.....</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Status</label>
                                                <select className="form-select">
                                                    <option value>Open Tenders</option>
                                                </select>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Search</button>
                                            <button type="reset" className="btn btn-secondary">Clear</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7">
                                <div className="sort-by-panel">
                                    <div className="row float-end">
                                        <div className="col-auto">
                                            <label className="col-form-label"><i className="fa-solid fa-sort"></i> Sort by</label>
                                        </div>
                                        <div className="col-auto">
                                            <select className="form-select">
                                                <option value>Published Date: Descending</option>
                                                <option value="">Published Date: Ascending</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                {data.map((e, index) => {
                                    return (
                                        <TenderBox content={e.content} id={e.id} author={e.authour} date={e.date} views={e.views} key={index}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <AppSection />
            </div>
        </>
    )
}

export default Tenders;