import React, { useState } from 'react';
import 'bootstrap';
import { Navbar, Nav, NavDropdown, Container, Modal, Tab } from 'react-bootstrap';
import '../css/MainNav.css';

const navStyle = {
    backgroundColor: '#063049',
    height: 100,
}


const MainNav = () => {

    return (
            <Navbar expand="lg"  variant="dark" style={ navStyle }>

                <Container >
                    <Navbar.Brand href="#home" class="ml-5 textWhite">Ben Powell's Coding Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto lm-5">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Projects</Nav.Link>
                            <Nav.Link href="#link">Link #2</Nav.Link>
                            <Nav.Link href="#link">Link #3</Nav.Link>
                            {/* If I need a dropdown later:
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default MainNav;