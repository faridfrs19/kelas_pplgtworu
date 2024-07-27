import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import CodeImage from '../image/pplg.svg';

const NavbarComponent = () => {

  return (
    <Navbar expand="lg fixed-top navbar-scroll" className="navbar">
    <Container>
      <Navbar.Brand className='logo' href="#home"><img src={CodeImage} alt="pplg" />XI PPLG 2</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='page'>
        <Nav  className='page'>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <NavDropdown title="Project" id="basic-nav-dropdown">
            <NavDropdown.Item href="/project">Semester 1</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Semester 2
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#galery">Galery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent