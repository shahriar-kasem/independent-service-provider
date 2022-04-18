import mypic from '../../../images/myPic/mypic.jpg';
import './AboutMe.css';

const AboutMe = () => {

    return (
        <section className='mb-3 mt-4 d-flex flex-column justify-content-center align-items-center'>
            <img style={{height: '500px'}} src={mypic} alt="" />
            <h1 className='mt-3'>Website owner: <span className='text-info'>Shahriar Kasem</span></h1>
            <br />
            <h6 className='about-text text-danger w-75'>Hello. Currently i'm learning 'Web Development'. My goal is to learn Web Development as soon as possible. I belive hardwork can bring you success and you can achive your goal by doing hardwork! That's why i'm doing hardwork.</h6>
        </section>
    );
};

export default AboutMe;