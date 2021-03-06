import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Fade from 'react-reveal/Fade';
import { FaSearch, FaHeart } from "react-icons/fa";
import Feat2 from "../components/HomePage/Feat2";

import singleProductImg from "../images/product-0.jpg";
import { ProductConsumer } from "../context";

export default function SingleProductPage() {
  window.scrollTo(0, 0);
  var x = '';

  return (
    <>
      <Fade top duration="1000" distance="20px" >
        <ProductConsumer>

          {value => {
            const { singleProduct, addToCart, loading, storeProducts } = value;
            // console.log(singleProduct);
            if (loading) {
              console.log("hello from loading");
              return <h1>product loading....</h1>;
            }
            const {
              company,
              description,
              id,
              price,
              title,
              image
            } = singleProduct;
            return (<>

              <Hero img={`../${image}`} title="single product" />

              <section className="py-5">
                <div className="container">
                  <div className="row">

                    <span><FaHeart
                      className="main-link-icon"
                      style={{
                        cursor: "pointer", width: "70px", width: "30px",
                        float: "left"
                        , height: "32px",
                        marginRight:"18px"
                      }}
                      onClick={() => addToCart(id)}
                    /></span>
                    <h5 className="text-title mb-4">Name :{title} </h5>


                    <p>{description}</p>
                    <br />




                  </div>
                </div>

              </section>
              <Feat2 product={storeProducts} />
            </>);
          }}
        </ProductConsumer>
      </Fade>
    </>
  );
}
