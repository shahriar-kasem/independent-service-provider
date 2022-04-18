import React, { useEffect, useRef, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (error) {
            return (
                setErrorMessage(error.message)
            );
        }
    }, [error]);

    if(user){
        navigate(from, {replace: true});
    };

    const handleLogin = (event) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    return (
        <section className='login-container'>
            <div className='w-50'>
                <h3 className='text-center text-primary my-3'>Please login</h3>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="text-center" controlId="formBasicCheckbox">
                        <p>New to Royels Therapy? <Link className='custom-anchor' to='/signup'>Please Register</Link></p>
                    </Form.Group>
                    {
                        <div className='text-danger fw-bold mb-3 text-center'>
                            {errorMessage}
                        </div>
                    }
                    <div className='login-submit-btn'>
                        <Button className='px-5 py-2 fw-bold' variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
                <div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </section>
    );
};

export default Login;