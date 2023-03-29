
import React from "react";
import { Link } from "react-router-dom";




export default function Footer(){

   
    return (

    <div className="footer grid pt-[90px] pb-[240px] md:grid-cols-2 lg:grid-cols-4 grid-cols-1  justify-between p-3 lg:p-6 bg-[#000F24] text-white text-left">
       <div className="foot1 pb-2  ">
       <p className=" font-[ellams] lg:text-[40px] text-[19px]">Tech time</p>
         <p className="lg:text-[16px] lg:w-[280px]">Reach out to us on any of our social media networks</p>
         <div className="flex gap-3 pt-3 flex-row">
           <img className="social-icon" src="images/facebook.png"/>
           <img className="social-icon" src="images/twitter.png"/>
           <img className="social-icon" src="images/youtube.png"/>
           <img className="social-icon" src="images/insta.png"/>
           <img className="social-icon" src="images/discord.png"/>
         </div>
       </div>
        <div className="foot2 ">
          <h1 className="sub-head lg:text-[24px]">Useful Links</h1>
          <div className="footer-text">
          <p>Home</p>
          <p>About us</p>
          <p>Our Courses</p>
          <p>Testimonials</p>
          <p>Our Community</p>
          </div>
        
        </div>
        <div className="foot3  ">
        <h1 className="sub-head">Community</h1>
        <div className="footer-text">

          <p>Help Centers</p>
          <p>Partners</p>
          <p>Suggestion</p>
          <p>Blog</p>
          <p>Newsletter</p>
          </div>
        </div>
        <div className="foot3  ">
            <h1 className="sub-head ">Subscribe Us</h1>
            <div className="flex   ">
         <input placeholder="Nft123@gmail.com" className="h-[46px] lg:w-[180px]  w-[263px] border-2 border-[#054FB3] bg-[#2A2A2B]"  type="text" />
          
         <button className="bg-oceanblue px-2 text-[14px] h-[46px] input-btn text-white">Send Message</button>
            </div>
        </div>
    </div>
    )
}