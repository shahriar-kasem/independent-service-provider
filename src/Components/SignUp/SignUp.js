import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignUp.css';

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    if(user){
        navigate('/');
    };

    useEffect(() => {
        if (error) {
            return (
                setErrorMessage(error.message)
            );
        }
    }, [error]);

    if(loading){
        return <Loading></Loading>
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password !== confirmPassword) {
            alert("password did't match! please try again")
        }
        else {
            createUserWithEmailAndPassword(email, password);
        }
    };

    return (
        <section className='signup-container'>
            <div className='w-50'>
                <h3 className='text-center text-primary my-3'>Please Sign Up</h3>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3 text-center" controlId="formBasicCheckbox">
                        <p>Already have an account? <Link className='custom-anchor' to='/login'>Please Login</Link></p>
                    </Form.Group>
                    {
                        <div className='text-danger fw-bold mb-3 text-center'>
                            {errorMessage}
                        </div>
                    }
                    <div className='signup-submit-btn'>
                        <Button className='px-5 py-2 fw-bold' variant="primary" type="submit">
                            Sign Up
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

export default SignUp;