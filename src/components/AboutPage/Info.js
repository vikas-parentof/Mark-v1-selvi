import React from "react";
import Title from "../Title";
import { Link } from "react-router-dom";

import aboutBcg2 from "../../images/abt2.jpg";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">

          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              illo obcaecati non asperiores repellendus alias, nostrum aliquid
              ad eaque ratione!
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              illo obcaecati non asperiores repellendus alias, nostrum aliquid
              ad eaque ratione!
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              illo obcaecati non asperiores repellendus alias, nostrum aliquid
              ad eaque ratione!
            </p>           <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              illo obcaecati non asperiores repellendus alias, nostrum aliquid
              ad eaque ratione!
            </p>           <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              illo obcaecati non asperiores repellendus alias, nostrum aliquid
              ad eaque ratione!
            </p>           <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              illo obcaecati non asperiores repellendus alias, nostrum aliquid
              ad eaque ratione!
            </p>           <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              illo obcaecati non asperiores repellendus alias, nostrum aliquid
              ad eaque ratione!
            </p>
            {/* <button
              className="main-link"
              type="button"
              link="www.google.com"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button> */}
            <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
              Check out More !!
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
