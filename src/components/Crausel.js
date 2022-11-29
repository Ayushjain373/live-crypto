import { Container } from "@mui/material";
import React from "react";
import image1 from "../assests/Image1.png";
import image2 from "../assests/Image2.png";
import image3 from "../assests/Image3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
const Crausel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="first_box">
          <img src={image1} alt=" first image" height="90" />

          <div className="first_text">
            <div>Take a Quiz!</div>

            <div className="second_text">Learn And Earn $CKB</div>
          </div>
        </div>
        <div className="first_box">
          <img src={image2} alt=" first image" height="90" />

          <div className="first_text">
            <div>Portfolio 🔥</div>

            <div className="second_text">
              Track your trades in one place, not all over the place
            </div>
          </div>
        </div>
        <div className="first_box">
          <img src={image3} alt=" first image" height="90" />

          <div className="first_text">
            <div>Portfolio</div>

            <div className="second_text">
              Track your trades in one place, not all over the place
            </div>
          </div>
        </div>
        <div className="first_box">
          <img src={image1} alt=" first image" height="90" />

          <div className="first_text">
            <div>Take a Quiz!</div>

            <div className="second_text">Learn And Earn $CKB</div>
          </div>
        </div>
        <div className="first_box">
          <img src={image2} alt=" first image" height="90" />

          <div className="first_text">
            <div>Take a Quiz!</div>

            <div className="second_text">
              Track your trades in one place, not all over the place
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Crausel;
