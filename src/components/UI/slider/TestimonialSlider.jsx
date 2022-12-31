import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg';
import '../../../styles/slider.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className='review__text'>
          "PickFood is a super handy website. They have a lot of food choices on it 
          that other places like DoorDash do not. And often there are drivers that are hired but they do not
           speak English so they are not able to read the instructions for delivery I 
           think some way to facilitate communication better would be best."
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' className=' rounded' />
          <h6>Saji</h6>
        </div>
      </div>
      
    </Slider>
  );
};

export default TestimonialSlider;
