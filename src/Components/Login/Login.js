import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        return console.log('error', error)
    };

    const handleLogin = (event) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        console.log(email, password)
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <p>New to Royels Therapy? <Link className='custom-anchor' to='/signup'>Please Register</Link></p>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
               <div>
                   <SocialLogin></SocialLogin>
               </div>
            </div>
        </section>
    );
};

export default Login;