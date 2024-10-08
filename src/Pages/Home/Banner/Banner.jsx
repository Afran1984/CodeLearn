import './Banner.css';
import img4 from '../../../assets/home/04.jpg'


const Banner = () => {
    return (
        <div className="hero bg-[#160A3A] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse marginer">
        <img
        src={img4}
        className="max-w-sm rounded-lg shadow-2xl" />
        <div className='margine'>
            <button className='verified-btn'>Verified by Coursera</button>
            <h1 className="text-5xl text-white font-bold">Learn Code <br />
            From top <span className='coder'>Coder</span></h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
            </p>
            <div className='flex gap-3'>
            <button className="buttonAllGet text-black bg-[#EAE34A]">Get Started</button>
            <button className="buttonAll">how it works</button>
            </div>
            <div>
                <div className='text-white mt-5'>
                    <div className='flex '>
                    <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p >Based on 10,000+ reviwes on</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Banner;