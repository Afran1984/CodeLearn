import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import imges1 from '../../../assets/others/authentication.png'

const Teastimonial = () => {
    const [reviwes, setReviwes] = useState([]);

    // Sample testimonials data to include new features and images
    const sampleReviews = [
        {
            _id: 1,
            name: "Joe Root",
            details: "The ease of use, quality of coffee, and the outstanding customer support make Corfeel my choice for all things coffee.",
            rating: 5,
            image: imges1
        },
        {
            _id: 2,
            name: "David Malan",
            details: "The Corfeel team has exceeded our expectations in providing top-notch service and delicious coffee, making them part of my daily routine.",
            rating: 5,
            image: imges1
        },
        {
            _id: 3,
            name: "Harry Book",
            details: "The positive feedback we've received on the quality of coffee and the variety of options available is a testament to Corfeel's excellence.",
            rating: 5,
            image: imges1
        },
    ];

    useEffect(() => {
        // For now, we'll use the sample data
        setReviwes(sampleReviews);
    }, []);

    return (
        <section className='my-20'>
            <h2 className='text-5xl'>
            What Customers are <br /> Saying About us
            </h2>
            <p>Our commitment to quality, sustainability, and customer satisfaction remains unwavering.</p>
            <div className="overflow-x-auto">
                <div className="flex space-x-4">
                    {
                        reviwes.map(reviwe => (
                            <div key={reviwe._id} className="card w-60 flex-shrink-0 bg-white p-4 shadow-md rounded-lg">
                                <img 
                                    src={reviwe.image} 
                                    alt={reviwe.name} 
                                    className="w-full h-32 object-cover rounded-lg mb-4" 
                                />
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={reviwe.rating}
                                    readOnly
                                />
                                <p className='py-4'>{reviwe.details}</p>
                                <h3 className='text-lg text-orange-400 text-center'>{reviwe.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Teastimonial;
