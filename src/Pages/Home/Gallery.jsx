import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../assets/lego1.jpg';
import img2 from '../../assets/lego2.jpg';
import img3 from '../../assets/lego3.jpg';
import img4 from '../../assets/lego4.jpg';

const Gallery = () => {
    useEffect(() => {
        AOS.init({disable: 'mobile'}); // Initialize AOS
    }, []);

    return (
        <div className='container bg-light'>
            <h1 className='text-center m-3 p-3 gap-3'>Toy World Collection</h1>
            <div className='d-md-flex gap-3 my-3'>
                <div data-aos="fade-up">
                    <img src={img1} alt="" style={{ height: '210px', borderRadius: '50%' }} />
                    <h4>R2-D2 Lego</h4>
                    <p>$235</p>
                </div>
                <div data-aos="fade-up"> 
                    <img src={img2} alt="" style={{ height: '210px', borderRadius: '50%' }} />
                    <h4>Wars Luke Lego</h4>
                    <p>$100</p>
                </div>
                <div data-aos="fade-up">
                    <img src={img3} alt="" style={{ height: '210px', borderRadius: '50%' }} />
                    <h4>MarioNintenodo</h4>
                    <p>$335</p>
                </div>
                <div data-aos="fade-up">
                    <img src={img4} alt="" style={{ height: '210px', borderRadius: '50%' }} />
                    <h4>Ghostbuster ECTO</h4>
                    <p>$400</p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;








