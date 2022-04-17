import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
            <Navbar expand='lg' bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to='/'><span className='custom-link'>Navbar</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'><span className='custom-link'>Home</span></Nav.Link>
                            <Nav.Link as={Link} to='/services'><span className='custom-link'>Services</span></Nav.Link>
                            <Nav.Link as={Link} to='/blogs'><span className='custom-link'>Blogs</span></Nav.Link>
                            <Nav.Link as={Link} to='/about'><span className='custom-link'>About Me</span></Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </nav>
        </div>
    );
};

export default Header;