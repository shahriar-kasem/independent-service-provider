import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container mt-2'>
            <h2 className='text-center my-3'>Frequently asked <span className='text-primary'>Questions and Answers</span></h2>
            <div className='blog-container'>
                <div className='question-answer border border-2 p-3 my-4'>
                    <h5 className='question'>Question: Difference between authorization and authentication?</h5>
                    <div>
                    <p className='answer fw-bold'>Ans: Difference between authorization and authentication are below:-</p>
                    <table className='table table-container'>
                        <tr className='text-center text-danger'>
                            <th>Authorization</th>
                            <th>Authentication</th>
                        </tr>
                        <tr>
                            <td>While in authorization process, person's or user's authorities are checked for accessing the resources.</td>
                            <td>In authentication process, the identity of users are checked for providing the access to the system.</td>
                        </tr>
                        <tr>
                            <td>While in this process, users or persons are validated.</td>
                            <td>In authentication process, users or persons are verified.</td>
                        </tr>
                        <tr>
                            <td>While this process is done after the authentication process.</td>
                            <td>It is done before the authorization process.</td>
                        </tr>
                        <tr>
                            <td>While it needs user's priviliege or security levels.</td>
                            <td>It needs usually user's login details.</td>
                        </tr>
                        <tr>
                            <td>While it determins What permission do user have?</td>
                            <td>Authentication determines whether the person is user or not.</td>
                        </tr>
                    </table>
                    </div>
                </div>
                <div className='question-answer border border-2 p-2'>
                    <h5 className='question'>Question: Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <div>
                    <p className='answer'>Ans: Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.
                    With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if we want to use a pre-built authentication UI, we have it at our disposal as well.
                    That's why i'm using Firebase.
                    <br />
                    Other options to implement authentication:
                    <ul>
                        <li>MongoDB</li>
                        <li>Okta</li>
                        <li>Amazon Cognito etc.</li>
                    </ul>
                    </p>
                    </div>
                </div>
                <div className='question-answer border border-2 p-2 my-4'>
                    <h5 className='question'>Question: What other services does firebase provide other than authentication?</h5>
                    <div>
                    <p className='answer'>Ans: There are many services which Firebase provides. Some of them are below:-
                    <ul>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Hosting.</li>
                        <li>Cloud Storage.</li>
                        <li>Google Analytics.</li>
                        <li>Cloud Messaging.</li>
                        <li>Predictions.</li>
                        <li>Dynamic Links etc.</li>
                    </ul>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;