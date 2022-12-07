import React from 'react';

const AppSection = () => {
    return (
        <div className="download-section clearfix">
            <div className="container">
                <h2>Download Our App</h2>
                <div className="row">
                    <div className="col-sm-4"><a href="https://play.google.com/store/apps/details?id=com.inno.ezyfind" download="" target="_blank" rel="noreferrer"><img src="assets/images/android.png" alt="" /> Android Store</a></div>
                    <div className="col-sm-4"><a href="https://apps.apple.com/us/app/ezyfind/id1611700455" download="" target="_blank" rel="noreferrer"><img src="assets/images/apple.png" alt="" /> Apple Store</a></div>
                    <div className="col-sm-4"><a href="https://appgallery.huawei.com/app/C106621035" download="" target="_blank" rel="noreferrer"><img src="assets/images/hawei.png" alt="" /> Huawei Store</a></div>
                </div>
            </div>
        </div>
    )
}

export default AppSection;