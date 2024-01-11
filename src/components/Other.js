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
    // rtl:true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="other-container">
      {sectionsNames.map((sectionName, index) => (
        <div key={index} className="section">
          <div className="section-header">
            <div>{sectionName}</div>
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
                  <div className="card-price">{cardData[0].price}</div>
                  </div>
                    <div className="like-icon-container">
                      <FontAwesomeIcon
                        className="like-icon"
                        icon={cardData[0].isLiked ? faHeart : farHeart}
                      />
                    </div>
                  </div>
                  <div className="card-name">{cardData[0].name}</div>
                  <div className="card-description">
                    {cardData[0].description}
                  </div>
                  <div className="card-f">
                    <div className="card-location">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="location-icon"
                        />
                        {cardData[0].location}
                    </div>
                    <div className="card-days">
                      <FontAwesomeIcon icon={faClock} className="days-icon" />
                      {cardData[0].days}
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
