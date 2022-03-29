import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CTA, Footer, Header } from "../component";
import { Container, Image, Row, Col } from "react-bootstrap";
import casestyle from "../styles/_casestudies.module.css";

const CaseStudies = () => {
  return (
    <>
      <Header />
      <div className={casestyle.CaseStudies}>
        <Container>
          <div className={casestyle.Development}>
            <h6 className={casestyle.CaseTitle}>Web design and development</h6>
            <h2 className={casestyle.CaseHeading}>
              Finsweet Design case studies
            </h2>
            <p className={casestyle.CaseParg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
            <Image src="/images/WorkImg1.svg" className={casestyle.CaseImg} />
            <Row>
              <Col xl={4} lg={4} md={4} sm={12} xs={12} className={casestyle.Information}>
                <label className={casestyle.Title}>Client</label>
                <h6 className={casestyle.Heading}>facebook.com</h6>
              </Col>
              <Col xl={4} lg={4} md={4} sm={12} xs={12} className={casestyle.Information}>
                <label className={casestyle.Title}>Service</label>
                <h6 className={casestyle.Heading}>Product Design</h6>
              </Col>
              <Col xl={4} lg={4} md={4} sm={12} xs={12} className={casestyle.Information}>
                <label className={casestyle.Title}>Deliverable</label>
                <h6 className={casestyle.Heading}>
                  UI Screens, UX Flow & Prototype
                </h6>
              </Col>
            </Row>
          </div>

          <div className={casestyle.ArticlePart}>
            <h3 className={casestyle.ArticleHeading}>About the project</h3>
            <p className={casestyle.ArticleParag}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={casestyle.ListContent}>
              <p className={casestyle.List}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className={casestyle.List}>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <p className={casestyle.List}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
              <p className={casestyle.List}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
              </p>
            </div>
            <Image src="/images/ArticleImg.svg" className={casestyle.ArticleImage} />
            <div className={casestyle.WeDoPart}>
              <h3 className={casestyle.ArticleHeading}>How we do it</h3>
              <p className={casestyle.ArticleParag}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={casestyle.ListContent}>
              <p className={casestyle.List}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className={casestyle.List}>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <p className={casestyle.List}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
              <p className={casestyle.List}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
              </p>
            </div>
            </div>
            <div className={casestyle.Keywords}>
            <Row>
                <Col xl={2} lg={3} md={3} sm={12} xs={12}>
                    <h6 className={casestyle.keywordsHeading}>Keywords</h6>
                </Col>
                <Col xl={10} lg={9} md={9} sm={12} xs={12}>
                   <label className={casestyle.KeywordTitle}>Design </label>
                   <label  className={casestyle.KeywordTitle}>UI/UX  </label>
                   <label  className={casestyle.KeywordTitle}>Wireframing </label>
                   <label  className={casestyle.KeywordTitle}>Branding </label>
                   <label  className={casestyle.KeywordTitle}>Development </label>
                   <label  className={casestyle.KeywordTitle}>webflow</label>
                </Col>
            </Row>

            </div>
          </div>
        </Container>
        <CTA />
      </div>
    
      <Footer />
    </>
  );
};
export default CaseStudies;
