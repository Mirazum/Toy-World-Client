import  { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'
import { FaUserCircle } from 'react-icons/fa';
import './NavigationBar.css';
import { AuthContext } from '../../../providers/AuthProviders';

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showUserName, setShowUserName] = useState(null);
  const handleMouseEnter = () => {
    setShowUserName(true);
  }

  const handleMouseLeave = () => {
    setShowUserName(false);
  }

  const handelLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
        <Container>
        <Navbar.Brand href="#home" className='text-white p-2h'>
            <img
              alt=""
              src={logo}
              width="60"
              height="50"
              className="d-inline-block align-top text-white"
            />{' '}
          Toy World
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto p-2 m-2">

              <NavLink exact to="/" className="nav-link text-white" activeClassName="active">
                Home
              </NavLink>
              <NavLink
                to="/alltoys" className="nav-link text-white"
                activeClassName="active">
                All Toys
              </NavLink>
              
             
              <NavLink
                to="/blog" className="nav-link text-white"
                activeClassName="active">
                Blog
              </NavLink>
              <Nav>
                {user &&
                  <div
                    className="user-profile"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <FaUserCircle className="user-icon" />
                    {showUserName && <div className="user-name">{user?.displayName
                    }</div>}
                  </div>
                }

                {user ?
                 <>
                 <NavLink to="/mytoys" className='p-2 text-white custom-link'>My toys</NavLink>
                 <NavLink to="/addtoy" className='p-2 text-white custom-link'> Add A Toy</NavLink>
                 <NavLink className="nav-link text-white"
                  activeClassName="active"><Button onClick={handelLogOut} className='mx-2'
                  variant="secondary">Logout</Button></NavLink>
                 </> :
                  <NavLink to='/login' className="nav-link text-white"
                  activeClassName="active">
                    <Button variant="secondary">Login</Button>
                  </NavLink>


                }

              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;

