import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    if(user){
        navigate(from, {replace: true});
    };

    const hangleGoogleLogin = () => {
        signInWithGoogle();
    }

    return (
        <section>
            <div>
                <div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='w-100 bg-info' style={{height: '1px'}}></div>
                        <p className='px-2 mt-2 fw-bold text-danger'>or</p>
                        <div className='w-100 bg-info' style={{height: '1px'}}></div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={hangleGoogleLogin} className='btn btn-primary fw-bold w-50'>Google Login</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialLogin;