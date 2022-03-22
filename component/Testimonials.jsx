import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import tstyle from "../styles/Testimonials.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={tstyle.testi_section}>
        <Container>
          <Row>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <h3 className={tstyle.heading}>What our clients say about us</h3>
              <p className={tstyle.parg}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </p>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <Slider {...settings}>
              <div className="slider_content">
                <h5 className={tstyle.h5_heading}>
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h5>
                <div className="profile_img">
                  <Image
                    src="/images/girls.svg"
                    className={tstyle.profileimg}
                  />
                  <div className={tstyle.profile_heading}>
                    <label className={tstyle.profile_name}>Jenny Wilson</label>
                    <label className={tstyle.designation}>Vice President</label>
                  </div>
                </div>
                </div>
                <div className="slider_content">
                <h5 className={tstyle.h5_heading}>
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h5>
                <div className="profile_img">
                  <Image
                    src="/images/girls.svg"
                    className={tstyle.profileimg}
                  />
                  <div className={tstyle.profile_heading}>
                    <label className={tstyle.profile_name}>Jenny Wilson</label>
                    <label className={tstyle.designation}>Vice President</label>
                  </div>
                </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
