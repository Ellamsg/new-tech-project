import React from "react";
import Classes from "../components/Classes";
import Clients from "../components/Clients";
import Community from "../components/Community";

import Frequentlyasked from "../components/Frequentlyasked";
import Landingpage from "../components/Landingpage";
import Logo from "../components/Logo";
import Slide from "../components/Slide";
import Videoclasses from "../components/Videoclasses";
import Accordiandata from "../components/Accordiandata";
import Accordianheader from "../components/Accordianheader";


export default function Home() {
  const accData = Accordiandata.map((item1) => {
    return <Frequentlyasked {...item1} />;
  });

  

  return (
    <div className="home">
      <Landingpage />
      <Logo />
      <Videoclasses/>
      <Classes />
      <Clients />
     
      <Slide />
      <Community />
      
      <div className="frequently-asked">
      <Accordianheader/>
         {accData}
        </div>

    </div>
  );
}
