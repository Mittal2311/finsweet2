import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import contactstyle from "../styles/ContactForm.module.css";

export const ContactForm = () => {
  return (
    <>
      <div className={contactstyle.contactform_section}>
        <Container>
          <Row className={contactstyle.contactrow}>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} >
            <Image src="/images/woman.png" className={contactstyle.contact_img}/>
              <div className={contactstyle.contact_title}>
                <h1 className={contactstyle.contact_heading}>
                  Building stellar websites for early startups
                </h1>
                <p className={contactstyle.cont_parg}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className={contactstyle.contact_form}>
              <div className="cont_form">
                <h5 className={contactstyle.form_heading}>Send inquiry</h5>
                <p className={contactstyle.form_parg}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="form_input">
                <input
                    type="text"
                    name="name"
                    className={contactstyle.forminput}
                    placeholder="Your Name"
                  />
                   <input
                    type="text"
                    name="name"
                    className={contactstyle.forminput}
                    placeholder="Email"
                  />
                   <input
                    type="text"
                    name="name"
                    className={contactstyle.forminput}
                    placeholder="Paste your Figma design URL"
                  />
                  <button className={contactstyle.get_btn}>Send an Inquiry</button>
                  <button className={contactstyle.btn_link}>Get in touch with us</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
