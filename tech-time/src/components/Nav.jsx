import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Product", link: "/Product/:id" },
    { name: "Help", link: "Help" },
    { name: "Blog", link: "" },
    { name: "Landing", link: "" },
   
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="md:p-2 bg-oceanblue z-30 sticky lg:py-0 py-3  top-0 md:px-6">
        
      <div className=" sticky   top-0 left-0 md:p-0  lg:text-xl  text-[16px]">
        <div className="md:flex items-center md:py-4 justify-between lg:gap-6  ">
          <div className="md:pl-0 pl-2 ml-2 lg:ml-0   text-white">
          <img className="lg:w-[127px]  pt-1 w-[70px]" src="images/renamed.png" />
          </div>

          <div
            onClick={() => setOpen(!open)}
            className=" absolute right-2 top-2 z-10 cursor-pointer md:hidden"
          >
            <img
              className="w-4 mr-2"
              name={open ? "close" : "menu"}
              src="images/hambuger.png"
            />
            
          </div>

          <ul
            className={`md:flex md:items-center md:bg-transparent  bg-oceanblue w-full justify-end  text-white  
         absolute md:static md:z-auto  
        left-0   transition-all duration-500 
        ease-in ${open ? "top-0 " : "top-[-490px]"}`}
          >
            <div className="md:flex md:items-center  font-name">
              {Links.map((link) => (
                <div className="">
                  <li className=" px-2 lg:py-0 py-3 ">
                    <Link to={link.link} className="  duration-500">
                      {link.name}
                    </Link>
                  </li>
                 
                </div>
                
              ))}
            </div>
            <button className="bg-red md:my-0 my-3 lg:my-0  enroll">Enroll now</button>
           
          </ul>
        </div>
      </div>
    </div>
  );
}
