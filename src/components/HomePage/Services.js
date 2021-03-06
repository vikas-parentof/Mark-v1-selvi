import React, { Component } from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

import { FaUserClock, FaHeartbeat, FaUtensils } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <Fade random distance="15px">
          <FaUserClock /></Fade>,
        title: "Easy",
        text:
          " Recipes are created by keeping in mind for quick and easy task."
      },
      {
        id: 2,
        icon: <FaHeartbeat />,
        title: "Healthy",
        text:
          " The healtier is the dish, the longer its longevity exists."
      },
      {
        id: 3,
        icon: <FaUtensils />,
        title: "Tasty",
        text:
          " Without taste, no recipe is eatable, Hence taste is top prioirty."
      }
    ]
  };
  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {/* {this.state.services.map(item => {
              return (

                <div
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                  key={item.id}
                >
                  <div className="service-icon">{item.icon}</div>
                  <div className="mt-3 text-capitalize">{item.title}</div>
                  <div className="mt-3">{item.text}</div>
                </div>
              );
            })} */}
            <Fade left delay="300"  >

              <div
                className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
              >
                <div className="service-icon">{this.state.services[0].icon}</div>
                <div className="mt-3 text-capitalize">{this.state.services[0].title}</div>
                <div className="mt-3">{this.state.services[0].text}</div>
              </div>
            </Fade>
            <Fade top delay="300" >

              <div
                className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
              >
                <div className="service-icon">{this.state.services[1].icon}</div>
                <div className="mt-3 text-capitalize">{this.state.services[1].title}</div>
                <div className="mt-3">{this.state.services[1].text}</div>
              </div>            </Fade>

            <Fade right delay="300" >

              <div
                className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
              >
                <div className="service-icon">{this.state.services[2].icon}</div>
                <div className="mt-3 text-capitalize">{this.state.services[2].title}</div>
                <div className="mt-3">{this.state.services[2].text}</div>
              </div>            </Fade>



          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }
`;
