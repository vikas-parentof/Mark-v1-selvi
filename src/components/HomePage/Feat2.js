import React from "react";
import Prod2 from "../Prod2";
import { Link } from "react-router-dom";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import Fade from 'react-reveal/Fade';

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


export default function Feat2({ product }) {
    return (
        <section className="py-5">
            <div className="container">
                {/* title */}
                <Title title="Recommeded recipes !!" center="true" />
                {/* products */}
                <div className="row my-5">
                    <ProductConsumer>
                        {value => {
                            const { featuredProducts } = value;
                            let shuffledPosts = shuffleArray(product);

                            return product.slice(0, 5).map(product => (
                                <Prod2 key={product.id} product={product} />
                            ));
                        }}
                    </ProductConsumer>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <Link to="/products" className="main-link">
                            Browse more recipes
            </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
