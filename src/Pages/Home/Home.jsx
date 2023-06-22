import Banner from '../Home/Banner/Banner'
import AboutUs from './AboutUs';
import Category from './Category/Category';
import Gallery from './Gallery';
import Location from './Location/Location';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Gallery></Gallery>
            <Category></Category>
            <Location></Location>
           
        </div>
    );
};

export default Home;
