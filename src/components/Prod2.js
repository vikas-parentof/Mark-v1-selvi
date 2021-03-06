import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { ProductConsumer } from "../context";

export default function Prod2({ product }) {
    return (
        <ProductConsumer>
            {value => {
                const { addToCart, setSingleProduct } = value;
                console.log(product.image);

                // var ix = featuredProducts.image.toString();
                // console.log(ix);
                return (
                    <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
                                       <Link style={{ textDecoration: "none" }}
                                to={`/products/${product.id}`}
                                onClick={() => setSingleProduct(product.id)}
                            >
                        <div className="card">
             
                                <div className="img-container">


                                </div>
                                <div className="card-body d-flex justify-content-between">
                                    <p className="mb-0">{product.title}</p>
                                    <p className="mb-0 text-main">Time:{product.price} mins</p>
                                </div>

                        </div>
                        </Link>

                    </ProductWrapper>
                );
            }}
        </ProductConsumer>
    );
}

const ProductWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
  }
  .card:hover {
    box-shadow: 20px 20px 25px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(0.9);
    opacity: 0.5;
        backgroud:rgba(255,255,255,0.9);

  }
  .img-container {
    position: relative;
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }
  .card:hover .product-icons {
    opacity: 1;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
