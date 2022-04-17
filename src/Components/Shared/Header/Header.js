import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import therapylogo from '../../../images/logo/therapylogo.png';

const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <Navbar id='navbar' expand='lg' sticky='top' variant="light">
                    <Container className='fst-italic'>
                        <Navbar.Brand as={Link} to='/'>
                          <div className='d-flex'>
                          <img className='therapy-logo' src={therapylogo} alt="" />
                            <span className='custom-link fw-bold ps-2'>Royals Therapy</span>
                          </div>
                        </Navbar.Brand>
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