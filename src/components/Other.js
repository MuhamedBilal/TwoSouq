import React from "react";
import Slider from "react-slick";
import {
  FontAwesomeIcon,
  faLocationDot,
  faClock,
  faHeart,
  farHeart,
  faAngleLeft,
} from "../assets/fontawsome";
import { cardData, sectionsNames } from "../assets/card";
import "../styles/Other.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Other() {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: false,     
  swipeToSlide: true,   
  touchThreshold: 50,   
  waitForAnimate: false, 
  };

  return (
    <div className="other-container">
      {sectionsNames.map((sectionName, index) => (
        <div key={index} className="section">
          <div className="section-header">
            <h2>{sectionName}</h2>
            <div className="view-all">
              <span>مشاهدة الكل</span>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          </div>
          <Slider {...sliderSettings} className="card-slider">
            {Array.from({ length: 7 }).map((_, cardIndex) => (
              <div key={cardIndex} className="card">
                <img
                  src={cardData[0].image}
                  alt={cardData[0].name}
                  className="card-image"
                />
                <div className="card-details">
                  <div className="card-head">
                  <div className="card-like">
                    <div className="like-icon-container">
                      <FontAwesomeIcon
                        className="like-icon"
                        icon={cardData[0].isLiked ? faHeart : farHeart}
                      />
                    </div>
                  </div>
                  <div className="card-price">{cardData[0].price}</div>
                  </div>
                  <div className="card-name">{cardData[0].name}</div>
                  <div className="card-description">
                    {cardData[0].description}
                  </div>
                  <div className="card-f">
                    <div className="card-days">
                      {cardData[0].days}
                      <FontAwesomeIcon icon={faClock} className="days-icon" />
                    </div>
                    <div className="card-location">
                      {cardData[0].location}
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="location-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
}

export default Other;
