import logo from '../../assets/logo.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import {FaFacebook,FaGoogle,FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light container">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-left">
            <img src={logo} alt="Website Logo" width="50"
              height="50"
              className="m-3" />
            <p>&copy; {new Date().getFullYear()} Toy World. All rights reserved.</p>
          </Col>
          <Col md={4} className="text-center">
            <h5 className='m-3'>Contact Information</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Address: 123 Main Street, City, State, Country</p>
          </Col>
          <Col md={4} className="text-center text-md-right ">
            <h5 className='m-3'>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook></FaFacebook>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaGoogle></FaGoogle>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                 <FaInstagram></FaInstagram>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
