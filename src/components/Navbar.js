import 'bootstrap/dist/css/bootstrap.min.css';
// import logoHeader from '../images/logoHeader.PNG';
import { Nav, Navbar, Container } from 'react-bootstrap';

const navbar = () => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
        <img
             src="/images/logoHeader.PNG"
             width="100%"
             height="100%"
             className="d-inline-block align-top"
             alt="/logo"
           />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="" className="mr-3">About</Nav.Link>
            <Nav.Link href="" className="mr-3">Features</Nav.Link>
            <Nav.Link href="" className="mr-3">Pricing</Nav.Link>
            <Nav.Link href="" className="mr-3">Testimonials</Nav.Link>
            <Nav.Link href="" className="mr-3">Help</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="font-weight-bold text-dark" eventKey={2} href="#memes">
              Sign In
          </Nav.Link >
            <Nav.Link className="ml-3 btn btn-outline-danger shadow text-danger rounded-pill" style={{ width: 160 }}>
              Sign Up
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default navbar
