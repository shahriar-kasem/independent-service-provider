import mypic from '../../../images/myPic/mypic.jpg';
import './AboutMe.css';

const AboutMe = () => {

    return (
        <section className='about-container mb-3'>
            <img src={mypic} alt="" />
            <h1 className='mt-3'>Website owner: <span className='text-info'>Shahriar Kasem</span></h1>
            <br />
            <h6 className='about-text text-danger'>Hello. Currently i'm learning 'Web Development'. My goal is to learn Web Development as soon as possible. I belive hardwork can bring you success and you can achive your goal by doing hardwork! That's why i'm doing hardwork.</h6>
        </section>
    );
};

export default AboutMe;