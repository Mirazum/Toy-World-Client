import { useLoaderData } from "react-router-dom";

import Card from 'react-bootstrap/Card';



const SingleToyDetails = () => {
    const toyDetail = useLoaderData();
  
    const { image, title, postedBy, price, rating, quantity, description } = toyDetail;
  
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '750px' }}>
        <Card className=" p-4 shadow-lg" style={{ height: '700px', width: '75%' }}>
          <Card.Img variant="top" src={image} style={{ height: '350px', width: '50%' }} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <div>
                <h6>Price: {price}$</h6>
                <h6>Available Quantity: {quantity}</h6>
              </div>
              <h6>Ratings: {rating}</h6>
              <h6>Posted By: {postedBy}</h6>
              <p className="py-2">{description}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };
  
  export default SingleToyDetails;
  

