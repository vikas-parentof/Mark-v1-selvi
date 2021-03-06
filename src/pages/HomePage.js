import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
import Fade from 'react-reveal/Fade';

export default function HomePage() {
  window.scrollTo(0, 0);

  return (
    <>
      <Fade top duration="1000" distance="20px" >

        <Hero title="awesome gadgets" max="true">
          <Fade top delay="1000" distance="20px" >
 <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
            Check out More !!
        </Link></Fade>
        </Hero>
        <Services />
        <Featured />
      </Fade>
    </>
  );
}
