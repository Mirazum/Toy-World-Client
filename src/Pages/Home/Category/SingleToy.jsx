
import { Card, Col,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleToy = ({ toy }) => {
  const { price, title, image, rating, category,_id } = toy || {};
  return (
   
    <Col xs={12} md={6} lg={4} className="mb-4">
    <Card className="mb-4 shadow-lg">

<Card.Body>
    <Card.Title></Card.Title>
    <Card.Img variant="top" src={image} style={{height: '300px', width: '100%'}} />
    <Card.Text>
        <h3>{title}</h3>
        <p>{price}$</p>
        <p>Ratings: {rating}</p>
        <p>Category: {category}</p>
    </Card.Text>
</Card.Body>
<Card.Footer className="text-muted d-flex">
   
    <Link to={`/toy/${_id}`} state={toy.title}>
      <button>View Details</button>
    </Link>
    
</Card.Footer>
</Card>
    </Col>


);
};
  


export default SingleToy;

