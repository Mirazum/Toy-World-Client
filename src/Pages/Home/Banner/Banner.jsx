import bannerimg from '../../../assets/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='head-test container'>
            <div className="" >
           <img src={bannerimg} alt=""  style={{ height: '700px', width: '100%' }}/> 
        </div>
        <div className='center-text'>
            <h2 className='heading-text p-3 m-3'>The Guiding star of theSpecialty PLAY Industry</h2>
        </div>
        </div>
    );
};

export default Banner;

