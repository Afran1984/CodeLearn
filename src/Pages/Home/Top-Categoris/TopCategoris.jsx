
import Img1 from '../../../assets/menu/banner3.jpg';
import Img2 from '../../../assets/menu/menu-bg.png';
import Img3 from '../../../assets/menu/pizza-bg.jpg';
import Img4 from '../../../assets/menu/salad-bg.jpg';
import Img5 from '../../../assets/menu/soup-bg.jpg';
const TopCategoris = () => {
    return (
       <div className='bg-[#2B0D57] h-96 text-white mt-10'>
        <h3 className=' text-center text-5xl text-white mt-14'>Our Top Categoris</h3>
      <p className=' text-center text-white'>Take high quality online courses from the best online instrictors
      around the world & develop your skills.</p>
         <section className='grid grid-cols-5 bg-[#2B0D57] text-white gap-5 ml-40'>
         
         <div className='p-10 mt-20 card bg-[#FF8FDF] h-40 w-40'>
           <img className='h-20 w-20 mx-auto rounded-xl' src={Img5} alt="" />
           <h4 className='text-center text-4xl'>650+</h4>
           <p className='text-center'>Teachers</p>
         </div>
         <div className='p-10 mt-20 card bg-[#FF8787] h-40 w-40'>
           <img className='h-20 w-20 mx-auto rounded-xl' src={Img5} alt="" />
           <h4 className='text-center text-4xl'>650+</h4>
           <p className='text-center'>Teachers</p>
         </div>
         <div className='p-10 mt-20 card bg-[#49E1BB] h-40 w-40'>
           <img className='h-20 w-20 mx-auto rounded-xl' src={Img5} alt="" />
           <h4 className='text-center text-4xl'>650+</h4>
           <p className='text-center'>Teachers</p>
         </div>
         <div className='p-10 mt-20 card bg-[#FF5BB4] h-40 w-40'>
           <img className='h-20 w-20 mx-auto rounded-xl' src={Img5} alt="" />
           <h4 className='text-center text-4xl'>650+</h4>
           <p className='text-center'>Teachers</p>
         </div>
         
     
       </section>
       </div>
    );
};

export default TopCategoris;