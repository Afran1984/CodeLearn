import React from 'react';
import featureImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='feature-item bg-fixed text-white pt-8 my-20'>
            <h3 className='text-2xl text-black'>
            Let’s Learn together to
            </h3>
            <h1 className='text-5xl text-black'>Grow Your Skills</h1>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <h3 className='text-3xl'>Describe Your Learning Skills</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                    <br />
                    <h3 className='text-3xl'>Select course</h3>
                    <br />
                    <h3 className='text-3xl'>Keep track of your experts</h3>
                    
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Get Start</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;