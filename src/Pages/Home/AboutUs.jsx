
import lego from '../../assets/lego.jpg'

const AboutUs = () => {
    return (
        <div className='container'>
            <div>
             <div className='d-md-flex justify-content-center align-items-center mt-3 pt-3 '>
             <h2 className='px-2 m-3'>Get Exclusive Deals & More! </h2>
             <div className='px-2 m-3'>
             <input type="text" placeholder='Enter Email Address' className='p-2' />
             <button type="button" className="btn btn-primary p-2 ">SUBSCRIBE</button>
             </div>
            </div>
            </div>
            <div className='d-md-flex p-4 gap-4'>
                <img src={lego} alt=""className='rounded' style={{ height: '300px', width: '50%' }}/>
                <div className='bg-light shadow-lg p-3 mb-5 bg-body rounded'>
                    <h3>Welcome To</h3>
                    <h2>Toys World !</h2>
                    <p>The Internets Favorite Toy Store!</p>
                    <p>
                    At our company, we have a passion for toys. Our mission is to bring joy to families and offer a smart playtime experience that inspires imagination and encourages inquisitiveness. We dedicate ourselves to designing and handpicking exceptional toys and games, while ensuring unparalleled customer satisfaction. Whether you are shopping for the holiday season, celebrating Hanukkah, or marking a special birthday, we provide a diverse range of toys and games that can have a lasting impact on a child life.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;