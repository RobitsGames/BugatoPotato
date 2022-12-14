import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavbarComp.css'

export default function NavbarComp() {
  return (
    <>
      <Navbar className="navbar-custom " fixed="top">
        <Container fluid>
          <Nav className="mx-auto nav-custom justify-content-end">
            <Nav.Link href="#home" className="nav-text-custom" >Play Game</Nav.Link>
            <Nav.Link href="#features" className="nav-text-custom">Source</Nav.Link>
            <Navbar.Brand href="#home" className="nav-text-custom">Bugato Potato</Navbar.Brand>
            <Nav.Link href="#pricing" className="nav-text-custom">Creation Process</Nav.Link>
            <Nav.Link href="#pricing" className="nav-text-custom">Credits</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
    </>
  );
}

