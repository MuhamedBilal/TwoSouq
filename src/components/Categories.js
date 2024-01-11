import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../styles/Categories.css';
import icons from '../assets/icons.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Categories() {
  const [useSlider, setUseSlider] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setUseSlider(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="categories">
      <div className="heading">الفقات</div>

      {useSlider ? (
        <Slider {...sliderSettings} className="slider">
          {icons.map((item, index) => (
            <div key={index} className="grid-item">
              <img src={item.image} alt={item.description} className="category-image" />
              <div className="category-description">{item.description}</div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid-container">
          {icons.map((item, index) => (
            <button key={index} className="grid-item">
              <img src={item.image} alt={item.description} className="category-image" />
              <div className="category-description">{item.description}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
