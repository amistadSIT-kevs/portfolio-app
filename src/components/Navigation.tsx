import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg"
        variant="dark"
        className="py-3 sticky-top"
        style={{ backgroundColor: '#111111', borderBottom: '1px solid #222' }}>

        <Container>
          <Navbar.Brand as={Link} to="/">Amistad K.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-1">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}
export default NavBar;