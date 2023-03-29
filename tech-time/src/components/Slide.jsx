import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="bg-[#F8F9FC]  lg:py-6 lg:pb-6">
      <div className="text-center pb-4">
        <h1 className="heading flex justify-center lg:text-[56px] text-black text-center">What Our Client Say</h1>
        <p className="grey px-6 lg:px-[23%]">
        High-Defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image
        </p>
      </div>

      <Slider className=" flex gap-6 " {...settings}>
        <div className=" card   ">
        <div className="pad mx-2 p-3 ">
          <div>
            <p className="">
             
            High-Defination Video Is video of higher resolution and quality than standard definition. higher resolution and quality than standard definition.build your future with our quality education. all-in-one online tutoring high-defination video is video of higher resolution and quality than standard definition.
            the best and largest all-in-one online tutoring platform in the world
            </p>
          </div>

          <div className=" img-card  ">
            <img src="images/circle1.png" />
            <div>
              <p className="texts">Bella moon</p>
              <p className="grey">product designer</p>
            </div>
          </div>
          </div>
        </div>
        <div className=" card   ">
        <div className="pad mx-2 p-3 ">
          <div>
          <p className="">
             
             High-Defination Video Is video of higher resolution and quality than standard definition. higher resolution and quality than standard definition.build your future with our quality education. all-in-one online tutoring high-defination video is video of higher resolution and quality than standard definition.
             the best and largest all-in-one online tutoring platform in the world
             </p>
          </div>

          <div className=" img-card  ">
            <img src="images/circle1.png" />
            <div>
              <p className="texts">Bella moon</p>
              <p className="grey">product designer</p>
            </div>
          </div>
          </div>
        </div>
        <div className=" card   ">
        <div className="pad mx-2 p-3 ">
          <div>
          <p className="">
             
             High-Defination Video Is video of higher resolution and quality than standard definition. higher resolution and quality than standard definition.build your future with our quality education. all-in-one online tutoring high-defination video is video of higher resolution and quality than standard definition.
             the best and largest all-in-one online tutoring platform in the world
             </p>
          </div>

          <div className=" img-card  ">
            <img src="images/circle1.png" />
            <div>
              <p className="texts">Bella moon</p>
              <p className="grey">product designer</p>
            </div>
          </div>
          </div>
        </div>
        <div className=" card">
          <div className="pad mx-2 p-3 ">
        <div>
        <p className="">
             
             High-Defination Video Is video of higher resolution and quality than standard definition. higher resolution and quality than standard definition.build your future with our quality education. all-in-one online tutoring high-defination video is video of higher resolution and quality than standard definition.
             the best and largest all-in-one online tutoring platform in the world
             </p>
          </div>

          <div className=" img-card  ">
            <img src="images/circle1.png" />
            <div>
              <p className="texts">Bella moon</p>
              <p className="grey">product designer</p>
            </div>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}
