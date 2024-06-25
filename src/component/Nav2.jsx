import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import navBar from '../style/navBar.scss'




function Nav2() {
  return (
    <div  className="bg-dark text-white">
  <Navbar expand="lg" className="">
      <Container >
        <Navbar.Brand href="#home" className='text-white ' >Hubnex <br/> <span>Labs</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white justify-content-end flex-grow-1 pe-3   " >
          <Nav.Link href="#" className=" text-white  hover-underline-animation">Services </Nav.Link>
                  <Nav.Link href="#" className=" text-white ">Industries</Nav.Link>
                  <Nav.Link href="#" className=" text-white ">Company</Nav.Link>
                 <div> <Button className='button-nav'>Startup Program</Button></div>
                 <div> <Button className='button-nav'>Growth school</Button></div>
                  <Nav.Link href="#" className=" text-white ">contact</Nav.Link>
                  <Button variant="outline-success">Search</Button>
                  <Nav.Link href="#" className=" text-white ">Login</Nav.Link>
           {/*} <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
  </NavDropdown>*/}
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Nav2