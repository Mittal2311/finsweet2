import React, { useState } from "react";
import { Container, Row, Col, NavLink, Nav, Image } from "react-bootstrap";
import footerstyle from "../styles/Footer.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Popup from "./Popup";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={footerstyle.footer_section}>
        <Container>
          {/* <h1>Footer</h1> */}
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                <img src="/images/logo.svg" />
                <p className={footerstyle.footer_parg}>
                  We are always open to discuss your project and improve your
                  online presence.
                </p>
              </AnimationOnScroll>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
                <h2 className={footerstyle.talk_heading}>Lets Talk!</h2>
                <p className={footerstyle.talk_parg}>
                  We are always open to discuss your project, improve your
                  online presence and help with your UX/UI design challenges.
                </p>
                <div className={footerstyle.social_icon}>
                  <NavLink
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    className={footerstyle.footer_link}
                  >
                    <img src="/images/facebook.svg" />
                  </NavLink>
                  <NavLink
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    className={footerstyle.footer_link}
                  >
                    <img src="/images/twitter.svg" />
                  </NavLink>
                  <NavLink
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    className={footerstyle.footer_link}
                  >
                    <img src="/images/insta.svg" />
                  </NavLink>
                  <NavLink
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    className={footerstyle.footer_link}
                  >
                    <img src="/images/linked.svg" />
                  </NavLink>
                </div>
              </AnimationOnScroll>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
                <div className={footerstyle.contact_info}>
                  <div className={footerstyle.email_id}>
                    <label className={footerstyle.info_email}>
                      Email me at
                    </label>
                    <span className={footerstyle.emailaddress}>
                      contact@website.com
                    </span>
                  </div>
                  <div className={footerstyle.contact}>
                    <label className={footerstyle.call}>Call us</label>
                    <span className={footerstyle.contact_number}>
                      0927 6277 28525
                    </span>
                  </div>
                </div>
              </AnimationOnScroll>
            </Col>
          </Row>
          <Image
            src="/images/message.png"
            className="messageicon"
            onClick={togglePopup}
          />
          {isOpen && (
            <Popup  
              content={
                <>
                  <h1>Hello</h1>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </Container>
      </div>
      <div className={footerstyle.footer_bottom}>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <p className={footerstyle.copyright}>
                Copyright 2022, Finsweet.com
              </p>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <div className={footerstyle.footer_link}>
                <Nav.Link href="Home" className={footerstyle.footer_navlink}>
                  Home
                </Nav.Link>
                <Nav.Link href="Aboutus" className={footerstyle.footer_navlink}>
                  About Us
                </Nav.Link>
                <Nav.Link href="" className={footerstyle.footer_navlink}>
                  Features
                </Nav.Link>
                <Nav.Link href="" className={footerstyle.footer_navlink}>
                  Pricing
                </Nav.Link>
                <Nav.Link href="" className={footerstyle.footer_navlink}>
                  FAQ
                </Nav.Link>
                <Nav.Link href="" className={footerstyle.footer_navlink}>
                  Blog
                </Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
