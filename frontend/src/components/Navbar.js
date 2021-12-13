import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Register from './Register';
import About from './About';
import Posts from './Posts';
import '../styles/Post.css'


function NavbarMenu(){
    return (
        <Router>
            <div>
            <Navbar bg="dark" variant="dark" expand="lg" >
            <Container>
                <Navbar.Brand as={Link} to={"/home"} Float='right'>Campollo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/manifesto"}>Manifesto</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/soundcloud"}>Soundcloud</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
            <div>
            <Routes>
                <Route path="/home" element={<Posts/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            </div>
        </Router>
    )
}

export default NavbarMenu