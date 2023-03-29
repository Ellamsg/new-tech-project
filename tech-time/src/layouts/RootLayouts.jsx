import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


export default function RootLayouts() {
  return (
    <div className="">
     <Nav/>
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}
