import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container mt-2'>
            <h2 className='text-center my-3'>Frequently asked <span className='text-primary'>Questions and Answers</span></h2>
            <div className='blog-container'>
                <div className='question-answer border border-2 p-2'>
                    <h5 className='question'>Question: Difference between authorization and authentication?</h5>
                    <p className='answer'>Ans: </p>
                </div>
                <div className='question-answer border border-2 p-2'>
                    <h5 className='question'>Question: Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p className='answer'>Ans: </p>
                </div>
                <div className='question-answer border border-2 p-2'>
                    <h5 className='question'>Question: What other services does firebase provide other than authentication?</h5>
                    <p className='answer'>Ans: </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;