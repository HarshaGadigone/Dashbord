import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import navBar from '../style/navBar.scss'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SassColor } from 'sass';

function NavBar() {
  return (
    <div class='container-fluid navmain  bg-dark'>
         <>
      {[ 'md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="  text-white mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='bg-dark' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#" className=" text-white ">Services</Nav.Link>
                  <Nav.Link href="#" className=" text-white ">Industries</Nav.Link>
                  <Nav.Link href="#" className=" text-white ">Company</Nav.Link>
                 <div> <Button className='button-nav'>Startup Program</Button></div>
                 <div> <Button className='button-nav'>Growth school</Button></div>
                  <Nav.Link href="#" className=" text-white ">contact</Nav.Link>
                  <NavDropdown
                     className="drfg"
                     
                    title=" Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    
                  >
                    <NavDropdown.Item href="#">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#"> Something else here  </NavDropdown.Item>
                    </NavDropdown>
                    <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Nav.Link href="#" className=" text-white ">Login</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    </div>
    
  )
}

export default NavBar