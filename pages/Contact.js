import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Header } from "../component";
import { Container,Row,Col } from "react-bootstrap";

import contactstyle from "../styles/_contact.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const Contact = () =>{
    return(
        <>
        {/* <h1>Contact </h1> */}
        <Header />
        <div className={contactstyle.ContactSection}>
        <Container>
        <div className="ContactHeading">
        <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
        <h2 className={contactstyle.ContactaTitle}>Contact Us</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
        <p className={contactstyle.ContactParg}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </AnimationOnScroll>
        </div>
            <Row>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}> 
              <div className={contactstyle.ContactForm}>
                <div className="row formRow">
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <label className={contactstyle.LabelName }>Name</label>
                    <input
                      type="text"
                      name="name"
                     className={contactstyle.formInput}
                      placeholder="Enter your name"
                    />
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <label className={contactstyle.LabelName }>Email</label>
                    <input
                      type="email"
                      name="email"
                      className={contactstyle.formInput}
                      placeholder="Enter your Emial"
                    />
                 </Col>
                </div>
                <div className="row formRow">
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <label className={contactstyle.LabelName }> Subject</label>
                    <input
                      type="text"
                      name="name"
                      className={contactstyle.formInput}
                      placeholder="Provide context"
                    />
                 </Col>
                 <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <label className={contactstyle.LabelName }> Subject</label>
                    <input
                      type="email"
                      name="email"
                      className={contactstyle.formInput}
                      placeholder="Select Subject"
                    />
                </Col>
                </div>
                <div className="row formRow">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <label className={contactstyle.LabelName }> Message</label>
                    <textarea
                      rows="5"
                      name="message"
                      className={contactstyle.FormTextarea}
                      placeholder="Write your  question here"
                    ></textarea>
                 </Col>
                </div>
                 <button class={contactstyle.ContactBtn}>Send Massage</button>
              </div>
            </AnimationOnScroll>
            </Row>
        </Container>

        </div>
        <Footer />
        </>
    )

}
export default Contact;