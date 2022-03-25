import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import benefitstyle from "../styles/_benefit.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export const Benefit = (props) => {
    const {benefiticon,benefitheading,benefitdecription} = props.data;
    return(
        <>
         <Col xl={4} lg={4} md={6} sm={12} xs={12} className={benefitstyle.MainContent}>
        <AnimationOnScroll animateIn="animate__fadeInUp"> 
        <div className={benefitstyle.BenefitContent}>
        <Image src={benefiticon} />
        <h6 className={benefitstyle.ContnetHeading}>{benefitheading}</h6>
        <p className={benefitstyle.contentParg}>{benefitdecription}</p>
        </div>
          </AnimationOnScroll>
        </Col>
        </>
    )

}
