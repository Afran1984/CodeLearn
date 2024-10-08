import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../popularMenu/popularMenu';
import Featured from '../Featured/Featured';
import Teastimonial from '../Teastimonial/Teastimonial';
import { Helmet } from 'react-helmet-async';
import TopCategoris from '../Top-Categoris/TopCategoris';
import PopularCourses from '../PopularCourse/PopularCourses';
import FeaturedSlide from '../FeaturedSlide/FeaturedSlide';

const Home = () => (
    <div>
        <Helmet>
            <title>CodeLearn | Home</title>
        </Helmet>
        <Banner></Banner>
        <Category></Category>
        <Featured></Featured>
        <FeaturedSlide></FeaturedSlide>
        <TopCategoris></TopCategoris>
        <PopularCourses></PopularCourses>
        <Teastimonial></Teastimonial>

    </div>
);

export default Home;