import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {Header,Banner,WeWork,OurWork,Feature, Faq ,Testimonials,Footer, } from "../component";

import ourstyle from "../styles/Ourwork.module.css";
import fstyle from "../styles/Feature.module.css";

import fetaturejson from "../json/features.json";


import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


export default function Home() {
  const [featuredata] = useState(fetaturejson);


  return (
    <>
      <Header />
      <Banner />
      <WeWork />
      <div className={ourstyle.ourwork_section}>
        <Container>
          <Row>
            <div className={ourstyle.heading}>
              <h2 className={ourstyle.our_heading}>View our projects</h2>
              <button className={ourstyle.view_btn}>View More</button>
            </div>
            <OurWork />
          </Row>
        </Container>
      </div>
      <div className={fstyle.feature}>
        <Container>
          <div className="main_heading text-center">
          <AnimationOnScroll animateIn="animate__bounceIn"> 
            <label className={fstyle.f_label}>Features</label>
            <h2 className={fstyle.feature_heading}>
              Design that solves problems, one product at a time
            </h2>
            </AnimationOnScroll>
          </div>
          <Row>
            {featuredata.map((item) => (
              <Feature data={item} />
            ))}
          </Row>
        </Container>
      </div>

      <Testimonials />
      {/* {Faqdata.map((item) => (
              <Faq data={item} />
            ))} */}
            <Faq />
      {/* <Footer/> */}
    </>
  );
}
