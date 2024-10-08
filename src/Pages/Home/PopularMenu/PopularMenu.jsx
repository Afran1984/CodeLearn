import React from 'react';

const PopularMenu = () => {
    return (
        <div className='mt-5'>
            <p className='text-cyan-700'>Let’s Learn together to</p>
            <h2 className='text-5xl'>Grow Your Skill</h2>
            
           {/* First Section */}
           <div className="bg-base-200 mt-5 p-5 rounded-lg shadow-lg">
                <div className="flex items-center">
                    <div className="divider text-2xl font-bold">1</div>
                    <div className="ml-4">
                        <h3 className="text-2xl font-bold">Describe Your Learning Skills</h3>
                        <p className="py-6">
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="bg-base-200 mt-5 p-5 rounded-lg shadow-lg">
                <div className="flex items-center">
                    <div className="divider text-2xl font-bold">2</div>
                    <div className="ml-4">
                        <h3 className="text-2xl font-bold">Select Course</h3>
                        <p className="py-6">
                            Choose from a variety of courses tailored to enhance your skills and knowledge.
                        </p>
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div className="bg-base-200 mt-5 p-5 rounded-lg shadow-lg">
                <div className="flex items-center">
                    <div className="divider text-2xl font-bold">3</div>
                    <div className="ml-4">
                        <h3 className="text-2xl font-bold">Keep Track of Your Experts</h3>
                        <p className="py-6">
                            Stay connected with experts who guide you through your learning journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularMenu;
