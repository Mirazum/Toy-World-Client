

import  { useEffect, useState } from 'react';
import SingleToy from './SingleToy';
import './Category.css';
import { Row } from 'react-bootstrap';

const Category = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState('as');

  useEffect(() => {
    fetch(`https://toy-marketplace-server-opal.vercel.app/toys/${activeTab}`)
      .then(res => res.json())
      .then(data => {
        setToys(data);
      });
  }, [activeTab]);

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

 
  return (
    <div className="container">
      <h2 className="text-center m-2 p-2">SHOP BY CATEGORY</h2>
      <div className="">
        <div className="text-center w-100 m-auto">
          <div className="tabs d-flex justify-content-center align-items-center py-2 my-3">
            <div
              onClick={() => handleTabClick('lego star wars')}
              className={`tab  tab2 lego star wars  ${
                activeTab === 'lego star wars' ? ' bg-primary text-white' : ''
              }`}
            >
              Lego Star Wars
            </div>
            <div
              onClick={() => handleTabClick('lego city')}
              className={`tab  tab2 lego city ${
                activeTab === 'lego city' ? ' bg-primary text-white' : ''
              }`}
            >
              Lego City
            </div>
            <div
              onClick={() => handleTabClick('lego cars')}
              className={`tab  tab2  lego cars ${
                activeTab === 'lego cars' ? ' bg-primary text-white' : ''
              }`}
            >
              Lego Cars
            </div>
          </div>
        </div>
       <Row xs={1} md={2} lg={3} className='g-2 mt-4'>
       {toys.map(toy => (
          <SingleToy toy={toy} key={toy._id}></SingleToy>
        ))}
       </Row>
      </div>
    </div>
  );
};

export default Category;
