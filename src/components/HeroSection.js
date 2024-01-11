import React from 'react'
import Slider from "react-slick";
import headerImages from '../assets/headerImages'
import '../styles/HeroSection.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, 
      centerMode: true,
      centerPadding: '17%', 
      responsive: [
        {
          breakpoint: 768, // Adjust this breakpoint as needed
          settings: {
            slidesToShow: 1,
      centerMode: false,

          },
        },
      ],
    }
  
  return (
    <Slider {...settings}>
      {headerImages.map((image, index) => (
        <div key={index} className='slider'>
          <img className='slider-image' src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  )
}

export default HeroSection