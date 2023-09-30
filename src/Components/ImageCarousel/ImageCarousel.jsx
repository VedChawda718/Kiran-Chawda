import React, { useRef } from 'react';
import "./ImageCarousel.css";
import MyCard from "../MyCard/MyCard";


const ImageCarousel = () => {
  
    // Use useRef to get a reference to the container element
    const containerRef = useRef(null);
  
    const btnpressPrev = () => {
        const container = containerRef.current;
        const width = container.clientWidth;
        container.scrollLeft -= width;
    
    }
    const btnpressNext = () => {
        const container = containerRef.current;
        const width = container.clientWidth;
        container.scrollLeft += width;
    }



    return (
        <div  className="product-carousel">
            <button className='pre-btn' onClick={btnpressPrev}><i className="fa-solid fa-chevron-left"></i></button>
            <button className='next-btn' onClick={btnpressNext}><i className="fa-solid fa-chevron-right"></i></button>

            <div className="product-container" ref={containerRef}>
                <MyCard cardno='1' />
            </div>
        </div>
    )
}

export default ImageCarousel;
