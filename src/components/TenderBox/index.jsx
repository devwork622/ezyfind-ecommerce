import React from "react";
import { Link } from 'react-router-dom';

const TenderBox = ({content, id, author, date, views}) => {
    return (
        <div className="tender-box">
            <div className="new"><img src="assets/images/new.png" alt="" /></div>
            <div className="row">
                <div className="col-lg-7">
                    <p className="text-uppercase">{content}</p>
                    <p className="text-uppercase text-overflow-ellipsis text-id"><strong>{id}</strong></p>
                </div>
                <div className="col-lg-5 text-right">
                    <p><span>{author}</span></p>
                    <p>{date}</p>
                    <p className="mt-2">{views} views <Link to="/tender-details">Moualanga</Link></p>
                </div>
            </div>
        </div>
    )
}

export default TenderBox;
