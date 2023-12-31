import React, { useEffect } from 'react';
import KiranChawda from "../../assets/Kiran Chawda1.jpg"
import "./Home.css"
import  Portfolio from "../../assets/PortFolio4.pdf";
import Typed from 'typed.js';
import Brush from '../../assets/artist-brush.png'
import Brush1 from '../../assets/artist-brush1.png'
const Home = () => {
  useEffect(() => {
    const typed = new Typed(".text-light", {
      strings: ["'' Abstract Artist ''", "'' Stained Glass Craftsman ''"],
      typeSpeed: 20,
      backSpeed: 20,
      backDelay: 1500,
      loop: true,
      showCursor: false,
      cursorChar:''
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
    <div className="about-container"> 
    <div data-aos={window.innerWidth > 600 ? "fade-up-right" : ""}
     data-aos-duration="1000">
    <div className="back-img" >
      <img src={Brush}  alt="" />
    </div>
    </div>
    <div data-aos={window.innerWidth > 600 ? "fade-up-right" : ""}
     data-aos-duration="2000">
    <div className="back-img1" >
      <img src={Brush1}  alt="" />
    </div>
    </div>
    <div className="details-wrapper">
    <div className="image-container">
            <img data-aos={window.innerWidth > 600 ? "flip-left" : ""} src={KiranChawda} alt="" />
            <h2>Kiran Raghavji Chawda</h2>
        </div>
        <div className="description-container">
            <br className='break' />
            <h1 className='text-light'>.</h1>
            <br />
            <p >"<b>Hello</b>, I'm an artist with a passion for bringing creativity to life through sketches, abstract, and landscape paintings. Additionally, I'm a skilled stained glass craftsman, merging colors and light to craft mesmerizing works of art."</p>
            <br />
            <br />
            <a href={Portfolio} >Portfolio</a>
        </div>
    </div>
        
    </div>
    </>
  )
}

export default Home