import React from 'react';
import { Link } from 'react-router-dom';

const RequestSection = () => {
    return (
        <div className="request-a-quote-section clearfix">
            <div className="container-fluid"><Link to="#"><img src="assets/images/request-a-quote.png" alt="" /></Link></div>
        </div>
    )
}

export default RequestSection;