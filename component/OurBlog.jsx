import React from "react";
import ourblogstyle from "../styles/OurBlog.module.css";
import { Col, Image } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const OurBlog = (props) => {
  const { blogimg, blogdate, blogheading, description } = props.data;
  return (
    <>
      {/* <h1>Blog</h1> */}
      <Col xl={4} lg={4} md={4} sm={12} xs={12}>
        <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
          <Image src={blogimg} className={ourblogstyle.blogimg} />
          <div className={ourblogstyle.blog_content}>
            <span className={ourblogstyle.date}>{blogdate}</span>
            <h6 className={ourblogstyle.blog_heading}>{blogheading}</h6>
            <p className={ourblogstyle.blog_parg}>{description}</p>
            <button className={ourblogstyle.read_btn}>Read More</button>
          </div>
        </AnimationOnScroll>
      </Col>
    </>
  );
};
