
import React from "react";;

import Courses from "./Courses";
import Coursesdata from "./Coursesdata";
export default function Clients(){

   const newData = Coursesdata.map((item1) => {
      return <Courses {...item1} />;
    });
    return (

    <div className=" bg-[#F8F9FC] relative p-3 py-3 lg:py-6">
      <img className="lg:left-7 top-5 lg:w-[26px] w-[10px]  lg:top-[180px] absolute z-10" src="images/cross.png"/>
     <div className="div flex justify-center ">
      <h1 className="heading"> Browse our popular courses</h1>
     </div>
     <div className="div text-center grey">
        <p className="lg:px-[300px] px-[75px]">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard
          meaning for high definition, generally any standard video image</p>
     </div>
     <div className="div flex justify-center gap-6 grey font-bold my-5 lg:my-6">
        <p className="hover:text-oceanblue">All categories</p>
        <p className="hover:text-oceanblue">design</p>
        <p className="hover:text-oceanblue">development</p>
        <p className="hover:text-oceanblue">marketing</p>
     </div>
     <div className="courses-flex">{newData}</div>
     <button className="view-courses">view courses</button>
    </div>
    )
}