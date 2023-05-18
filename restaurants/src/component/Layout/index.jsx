import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router';
import './layout.css'
import { NavLink } from 'react-router-dom';


function BasicExample() {
  return (<>
  <div className='hero-section'>
  <Navbar className='navbar' bg='light' expand="lg">
      <Container >
        <Navbar.Brand href="/">Restaurants</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav">
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>

            <Nav.Link as={NavLink} to='addRestaurants'>Register 
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
  </div>

  </>
  );
}

export default BasicExample;