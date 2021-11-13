import React from 'react';
import Banner from '../../Banner/Banner';
import Review from '../Review/Review';
import Services from '../Services/Services';
import HomeExplore from './HomeExplore/HomeExplore';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <HomeExplore></HomeExplore>
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;