import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import INTRO from './images/intro.jpg';
import FEATURE1 from './images/feature1.jpg';
import FEATURE2 from './images/feature2.jpg';
import FEATURE3 from './images/feature3.jpg';

const HomePage = () => {
  return (
    <div id='home-page'>
      <NavBar />

      <div className='home-image'>
        <h3 className='home-title'>Welcome to Banana Leaves Diseases Object Detection Website</h3>
        <p className='home-title'>We are working to create a powerful platform for detecting diseases on banana leaves using computer vision technology.</p>
        <Link to='/about' className='link-btn'>READ MORE</Link>
      </div>
  
      <div className='intro'> 
        <div className='intro-text-div'>
          <h3 className='intro-title'>DISCOVER THE HEALTH OF BANANA PLANTS</h3>
          <p className='intro-title'>Knowledge is power when it comes to protecting your crops. 
            With our Banana Leaves Diseases Object Detection Website, you'll be equipped with the information you need to make informed decisions about disease management strategies. 
          </p>
        </div>
        <div className='intro-img-div'>
          <img alt='intro' src={INTRO} className='intro-img'></img>
        </div>
      </div>

      <div className='feature'>
          <div className='three-parts'>
            <div className='one-part'>
              <img alt='feature1' src={FEATURE1} className='feature-img'></img>
              <p className='feature-title'>Cutting-Edge Object Detection</p>
            </div>
            <div className='one-part'>
              <img alt='feature2' src={FEATURE2} className='feature-img'></img>
              <p className='feature-title'>Easy-to-Use Interface</p>
            </div>
            <div className='one-part'>
              <img alt='feature3' src={FEATURE3} className='feature-img'></img>
              <p className='feature-title'>Empowering Plant Health</p>
            </div>
          </div>
      </div>

      <div className='footer'>
        <h3 className='footer-title'>JOIN US!</h3>
        <p className='footer-subtitle'>Join us in developing an essential tool for sustainable agriculture. By leveraging technology, we can together protect and enhance productivity in the farming industry.</p>
        <ul className='socials'>
          <li><a href='https://www.facebook.com'><i className='fab fa-facebook'></i></a></li>
          <li><a href='https://twitter.com'><i className='fab fa-twitter'></i></a></li>
          <li><a href='https://plus.google.com'><i className='fab fa-google-plus-g'></i></a></li>
          <li><a href='https://www.youtube.com'><i className='fab fa-youtube'></i></a></li>
          <li><a href='https://www.linkedin.com'><i className='fab fa-linkedin'></i></a></li>
        </ul>
      </div>


    </div>
  );
}

export default HomePage
