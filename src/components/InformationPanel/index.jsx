import React from "react";
import { Link } from 'react-router-dom';

const InformationPanel = () => {
    return (
        <div className="information">
            <h4>Information</h4>
            <div className="content">
                <h6>Address:</h6>
                <p>8 Gert Kotze Street, Brackenfell,7560</p>
                <h6>Status:</h6>
                <p>Active <img src="assets/images/verified.png" alt="" /></p>
                <h6>Reg. Date:</h6>
                <p>23-Aug-2016</p>
                <h6>Modified Date:</h6>
                <p>23-Aug-2016</p>
                <h6>Contact Number:</h6>
                <p>219820665</p>
                <h6>Mail Address</h6>
                <p>&nbsp;</p>
                <div className="btn-free"><Link to="#">Contact Us First 30min Free Consultation</Link></div>
            </div>
        </div>
    )
}
export default InformationPanel;