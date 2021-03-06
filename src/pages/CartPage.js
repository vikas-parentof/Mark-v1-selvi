import React from "react";
import Hero from "../components/Hero";
import cartBcg from "../images/fav.jpg";
import CartSection from "../components/CartPage";
import Fade from 'react-reveal/Fade';

export default function CartPage() {
  window.scrollTo(0, 0);

  return (
    <>
      <Fade top duration="1000" distance="20px" >

        <Hero img={cartBcg} />
        <CartSection />
      </Fade>
    </>

  );
}
