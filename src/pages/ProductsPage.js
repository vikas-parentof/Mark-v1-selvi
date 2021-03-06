import React from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import productsBcg from "../images/productsBcg.jpg";
import Fade from 'react-reveal/Fade';

export default function ProductsPage() {
  window.scrollTo(0, 0);

  return (
    <>
      <Fade top duration="1000" distance="20px" >

        <Hero img={productsBcg} />
        <Products />
      </Fade>
    </>
  );
}
