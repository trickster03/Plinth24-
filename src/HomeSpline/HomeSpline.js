// Rocket.js

import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
 import './Rocket.css'; // Import your CSS file for rocket styles
import Spline from '@splinetool/react-spline';
// import Countdown from '../components/countdown';
import "../home/home.css";
import Countdown from "../home/countdown";
import ArrowPic from '../home/arrow.png'
import cognitocascade from '../HomeSpline/cognitocascade.png'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
// import '../home/home.css'
const HomeSpline = () => {

 // Scroll to the AboutUs section when the arrow is clicked
  
 const scrollToAbout = () => {
    const aboutUsSection = document.getElementById('aboutUs');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
//   const rocketRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY || window.pageYOffset;
//       const rocket = rocketRef.current;

//       // Move the rocket from bottom to top based on scroll amount
//       rocket.style.bottom = ${scrollY}px;
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

  return (
    <div className='main'>
     
        <div className='splinemodel' >
        <Spline className='splines' scene="https://prod.spline.design/T0phBXpG8D8N7k4p/scene.splinecode" />
    </div> 
     <div className='header-div'>
      <Navbar className='header' />
    </div>
    <div className='navbar-div'>
        <Header className='navbar'/>
      </div>
    <div className='heading'>
        <img className='image' src='https://s3-alpha-sig.figma.com/img/658b/6d96/71f4945821d5cf9ce73e341733318574?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iDAq~JpoKk3WjpawatdRrDz4SoPzr7NMpnTTZUc4wP7DDnhrfgNhUHMUdfyeyDgi77Fq0LEfNkBYYVqf0BGDVy2PrplZQb15QkZNMMkxbEx1uZ-SrTGDgRT9zgI-QZD4WVnukUeaHM2PovjHpl5JFKG1cDAcCFF8QrpEwFMG3meiTJS~no6GRWbX47s3nHH3KzEEwqNIunf66Aqd9GWX7R3KzEDR1YjqcsQ2FomOYsyv4JKkKwsSiZvOfDa-PBj78Z~OJ52JOb0BxCVgm9bBwX6MdSvk4YyqM4INXtgwAIte049ZGEAQexZ77uqDf0~xq~qB~-EjebZt7MtacOUJvg__' />
        <div className="btn-p"><div className="button-p"><button className="button-x"><a href='/competitions'>REGISTER</a></button></div></div>
      <div className="ctd-p"><div className="ctd"><Countdown />
      </div>
      </div>
   <Link to='/about' className='clickedLink'>
    <div className='clicked'>CLICK HERE</div>
</Link> 
    </div>
    
    </div>
    


  );
};

export default HomeSpline;