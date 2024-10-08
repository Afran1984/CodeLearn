import Img1 from '../../../assets/menu/banner3.jpg';
import Img2 from '../../../assets/menu/menu-bg.png';
import Img3 from '../../../assets/menu/pizza-bg.jpg';
import Img4 from '../../../assets/menu/salad-bg.jpg';
import Img5 from '../../../assets/menu/soup-bg.jpg';
const Category = () => {
    return (
        <section className='grid grid-cols-5 bg-[#2B0D57] h-96 text-white'>
          <div className='p-10 mt-20'>
            <img className='h-20 w-20 mx-auto rounded-xl' src={Img1} alt="" />
            <h4 className='text-center text-4xl'>650+</h4>
            <p className='text-center'>Teachers</p>
          </div>
          <div className='p-10 mt-20'>
            <img className='h-20 w-20 mx-auto rounded-xl' src={Img1} alt="" />
            <h4 className='text-center text-4xl'>65k</h4>
            <p className='text-center'>Students</p>
          </div>
          <div className='p-10 mt-20'>
            <img className='h-20 w-20 mx-auto rounded-xl' src={Img1} alt="" />
            <h4 className='text-center text-4xl'>8k</h4>
            <p className='text-center'>Lessones</p>
          </div>
          <div className='p-10 mt-20'>
            <img className='h-20 w-20 mx-auto rounded-xl' src={Img1} alt="" />
            <h4 className='text-center text-4xl'>65%</h4>
            <p className='text-center'>Success</p>
          </div>
          <div className='p-10 mt-20'>
            <img className='h-20 w-20 mx-auto rounded-xl' src={Img1} alt="" />
            <h4 className='text-center text-4xl'>200</h4>
            <p className='text-center'>Partners</p>
          </div>
      
        </section>
    );
};

export default Category;