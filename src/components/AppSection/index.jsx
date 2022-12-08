import React from 'react';
import { Link } from 'react-router-dom';

const AppSection = () => {
    return (
        <div className="download-section clearfix">
            <div className="container">
                <h2>Download Our App</h2>
                <div className="row">
                    <div className="col-sm-4"><Link to="https://play.google.com/store/apps/details?id=com.inno.ezyfind" download="" target="_blank" rel="noreferrer"><img src="assets/images/android.png" alt="" /> Android Store</Link></div>
                    <div className="col-sm-4"><Link to="https://apps.apple.com/us/app/ezyfind/id1611700455" download="" target="_blank" rel="noreferrer"><img src="assets/images/apple.png" alt="" /> Apple Store</Link></div>
                    <div className="col-sm-4"><Link to="https://appgallery.huawei.com/app/C106621035" download="" target="_blank" rel="noreferrer"><img src="assets/images/hawei.png" alt="" /> Huawei Store</Link></div>
                </div>
            </div>
        </div>
    )
}

export default AppSection;