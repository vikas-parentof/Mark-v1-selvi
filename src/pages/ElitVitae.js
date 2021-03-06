import React from "react";
import Hero from "../components/Hero";
import cartBcg from "../images/fav.jpg";
import Fade from 'react-reveal/Fade';

export default function CartPage() {

    console.log("EV LOADED");
    window.location.assign("https://elit-vitae.herokuapp.com");

    //history.push('/new-location')

    return (
        <>
            <Fade top duration="1000" distance="20px" >
                <div>
                    <div className="loader"></div>
                </div></Fade>
        </>
    );
}
