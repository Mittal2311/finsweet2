import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import bannerstyle from "../styles/Banner.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export const Banner = () => {
  return (
    <>
      {/* <h1>Banner section</h1> */}
      <div className={bannerstyle.banner_section}>
        <Container>
          <Row>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }} 
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
            >
              <div className={bannerstyle.banner_text}>
              <AnimationOnScroll animateIn="animate__fadeInDown"> 
                <h1 className={bannerstyle.banner_heading}>
                  Building stellar websites for early startups
                </h1>
                <p className={bannerstyle.banner_parg}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <button className={bannerstyle.view_btn}>View our work</button>
                <button className={bannerstyle.price_btn}>View Pricing</button>
                </AnimationOnScroll>
              </div>
            </Col>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
            >
             <AnimationOnScroll animateIn="animate__fadeInUp"> 
              <Image
                src="/images/bannerimg.svg"
                className={bannerstyle.banner_img}
              />
              </AnimationOnScroll>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

