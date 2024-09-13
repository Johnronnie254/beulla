import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.css';

export default function NavBar() {
  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#002b45', padding: '10px 20px' }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>
          Beullah Limited
        </Navbar.Brand>
        {/* Collapse button for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Navbar items */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className='nav'>
            <Nav.Link as={Link} to="/" style={{ color: 'white', fontSize: '18px', marginRight: '1.5rem' }}>Home</Nav.Link>
            <Nav.Link href="#aboutus" style={{ color: 'white', fontSize: '18px', marginRight: '1.5rem' }}>About Us</Nav.Link>
            <Nav.Link href="#gallery" style={{ color: 'white', fontSize: '18px', marginRight: '1.5rem' }}>Gallery</Nav.Link>
            <Nav.Link href="#contactus" style={{ color: 'white', fontSize: '18px' }}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
