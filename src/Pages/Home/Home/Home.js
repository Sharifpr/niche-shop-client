import React from 'react';
import Banner from '../../Banner/Banner';
import Review from '../Review/Review';
import Services from '../Services/Services';
import HomeExplore from './HomeExplore/HomeExplore';
import Footer from './Shared/Footer/Footer';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <HomeExplore></HomeExplore>
            <Services></Services>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;