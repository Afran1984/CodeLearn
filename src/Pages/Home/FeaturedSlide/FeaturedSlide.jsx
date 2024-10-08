import React from 'react';
import featureImg from '../../../assets/home/featured.jpg';
const FeaturedSlide = () => {
    return (
        <div className='feature-item bg-fixed text-white pt-8 my-5'>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36'>
                
                <div className='md:ml-10'>
                    <h3 className='text-3xl'>Welcome to Code Learning Centre</h3>
                    <p>Here we guide you to the best online courses, e-learning advice, and technology and resources for education and training.</p>
                    <br />
                    <h3 className='text-3xl'>Safe & Secured</h3>
                    <p>Safe and Secured our services and every step of process.</p>
                    <br />
                    <h3 className='text-3xl'>Highly Expert Instructors</h3>
                    <p>There are coffee shops, sports, restaurants and a multitude of great study.</p>
                    
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Get Start</button>
                </div>
                <div>
                    <img src={featureImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedSlide;