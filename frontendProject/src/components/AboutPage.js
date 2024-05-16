import React from 'react';
import './AboutPage.css';
import NavBar from './NavBar';
import ABOUT1 from './images/about1.jpg';
import ABOUT2 from './images/about2.jpg';

const AboutPage = () => {
  return (
    <div id='about-page'>
        <NavBar />
        
        <div className='about-part1'>
          <div className='about-img-div1'>
            <img alt='about1' src={ABOUT1} className='about-img'></img> 
          </div>

          <div className='about-banner-div'>
            <div className='about-banner1'>
              <div className='about-content-div'> 
                <h3 className='about-title'>OUR VISION</h3>
                <p className='about-content'>We envision a future where every farmer has access to advanced tools and technology to safeguard their crops. By leveraging the power of computer vision and machine learning, we aim to transform the way diseases are detected and managed in banana plantations worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='about-part2'>
          <div className='about-banner-div'>
            <div className='about-banner2'>
              <div className='about-content-div'> 
                <h3 className='about-title'>WHAT WE DO</h3>
                <p className='about-content'>Our web application analyze images of banana leaves and identify various diseases such as fungal infections, bacterial spots, and nutrient deficiencies. Through a user-friendly interface, farmers can easily upload leaf images and receive instant feedback on the health status of their plants.
                </p>
              </div>
            </div>
          </div>

          <div className='about-img-div2'>
            <img alt='about1' src={ABOUT2} className='about-img'></img> 
          </div>
        </div>

        


    </div>
  );
}

export default AboutPage
