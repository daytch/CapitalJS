import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselWrapper = (props) => {
  var settings = {
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    autoPlay: true,
    useKeyboardArrows: true,
    emulateTouch: true
  };
  return (
    <Carousel {...props} {...settings}>
      {props.children}
    </Carousel>
  );
}

export default CarouselWrapper;