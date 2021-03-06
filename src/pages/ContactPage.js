import React from "react";
import Hero from "../components/Hero";
import contactImg from "../images/contactBcg.jpeg";
import Fade from 'react-reveal/Fade';

import Contact from "../components/ContactPage/Contact";
export default function ContactPage() {
    window.scrollTo(0, 0);

  return (
    <>
          <Fade top duration="1000" distance="20px" >

      <Hero img={contactImg} />
      <Contact />
      </Fade>
    </>
  );
}
