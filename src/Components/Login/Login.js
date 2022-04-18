import React, { useEffect, useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    useEffect(() => {
        if (error) {
            return (
                setErrorMessage(error.message)
            );
        }
    }, [error]);

    if(loading || sending){
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    };

    const handleLogin = (event) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
        toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
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

                        <p className='m-0'>Forget Password? <button className='text-primary border-0 bg-white' onClick={handleResetPassword}><span className='custom-anchor'>Reset Password</span></button></p>
                    </Form.Group>
                    {
                        <div className='text-danger fw-bold mb-3 text-center'>
                            {errorMessage}
                        </div>
                    }
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button className='px-5 py-2 fw-bold' variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                    <p className='m-3 text-center'>New to Royels Therapy? <Link className='custom-anchor' to='/signup'>Please Register</Link></p>
                </Form>
                <div>
                    <SocialLogin></SocialLogin>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default Login;