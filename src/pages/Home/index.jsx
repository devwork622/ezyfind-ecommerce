import React from 'react';
import AppSection from '../../components/AppSection';
import RequestSection from '../../components/RequestSection';
import ServiceSection from '../../components/ServiceSection';
import ProductSection from '../../components/ProductSection';
import BannerSection from '../../components/BannerSection';
import "./style.module.scss";


const Home = () => {

    return (
        <div className="content-section clearfix">
            <BannerSection />
            <ServiceSection />    
            <ProductSection />        
            <RequestSection />
            <AppSection />
        </div>
    )
}

export default Home;