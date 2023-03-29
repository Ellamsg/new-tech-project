import React from "react";

export default function Landingpage() {
  return (
    <div className="flex text-white relative lg:px-6 lg:text-left  lg:flex-row  justify-between flex-col">
      <img
        className="absolute h-[100px] top-[430px] right-0 lg:h-[180px] lg:bottom-6 lg:left-[600px] hidden lg:block"
        src="images/spiral.png"
      />
      <img
        className="absolute h-[100px] top-[300px] right-3 lg:hidden md:right-8"
        src="images/rotate.png"
      />
      <img
        className="absolute h-[15px] w-[40px] top-[350px] left-0  md:right-8"
        src="images/pups.png"
      />
      <img
        className="absolute h-[9px] hidden top-7 lg:block left-[480px] "
        src="images/point.png"
      />
      <img
        className="absolute h-[16px] lg:top-6 hidden lg:block"
        src="images/leaff.png"
      />
      <div className="left pt-5 lg:pt-[150px]">
        <div className=" text-white heading2 lg:w-[600px]  lg:text-[56px] text-[32px] md:text-[40px] leading-[50px] md:leading-[82px] ">
          <p>Grow your skill to </p>
          <p>advance your career</p>
          <p>path</p>
        </div>
        <div className="build lg:text-[16px] text-[10px] text-[#E7E7E7] py-3 satoshi">
          <p>
            Build your future with our quality education,The best and largest
            All-in-one
          </p>
          <p>Online tutoring platform in the world </p>
        </div>
        <div className="buttons satoshi py-3 lg:justify-start justify-center flex gap-3">
          <button className="border-white rounded-[4px] gap-3 flex border-2 p-2 px-4">
            <p className="text-[8px] lg:text-[16px]">Get Started Now</p>
            <img className="lg:mt-[5px]" src="images/arrows.png" />
          </button>
          <button className="enroll font-bold">Enroll Now</button>
        </div>
        <div className="imageIcons  lg:justify-start py-3 justify-center flex gap-3 ">
          <div className="roundedimg  ">
            <img
              className="w-[173px]  lg:h-[64px] lg:w-[211px]"
              src="images/group.png"
            />
          </div>
          <div className="  lg:pt-0 pt-[]">
            <h1 className="lg:text-[24px] text-[13px] satoshi text clash">255k+</h1>
            <p className="text-center lg:text-[20px] text-[10px] font-thin">Previews</p>
          </div>
        </div>
      </div>
      <div className="right flex justify-center">
        <img
          className=" lg:w-[675px] h-full"
          src="images/career.png"
          alt="career"
        />
      </div>
    </div>
  );
}
