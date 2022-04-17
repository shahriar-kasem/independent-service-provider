import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import therapylogo from '../../../images/logo/therapylogo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <section className='header-container py-1'>
            <nav>
                <Navbar id='navbar' expand='lg' sticky='top' variant="light">
                    <Container className='fst-italic'>
                        <Navbar.Brand as={Link} to='/'>
                          <div className='d-flex'>
                          <img className='therapy-logo' src={therapylogo} alt="" />
                            <span className='custom-link fw-bold ps-2'>Royels Therapy</span>
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
                            <Nav>
                                <Nav.Link>
                                    {
                                        user ?
                                        <button onClick={handleSignOut} className='custom-btn fw-bold fst-italic'>Sign out</button>
                                        :
                                        <button onClick={() => navigate('/login')} className='custom-btn fw-bold fst-italic'>Login</button>
                                    }
                                </Nav.Link>
                                <Nav.Link>
                                {
                                    !user && <button onClick={() => navigate('/signup')} className='custom-btn fw-bold fst-italic'>Sign Up</button>
                                }
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </section>
    );
};

export default Header;