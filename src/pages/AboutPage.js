import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpg";
import Fade from 'react-reveal/Fade';

export default function AboutPage() {
  window.scrollTo(0, 0);

  return (
    <>
      <Fade top duration="1000" distance="20px" >

      <Hero img={aboutBcg} />
      <Info />
      </Fade>
    </>
  );
}
