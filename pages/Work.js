import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CTA, Footer, Header } from "../component";
import { Container,Row, Col,Nav,Image,NavLink } from "react-bootstrap";

import workstyle from "../styles/_work.module.css";

import OurWorkJson from "../json/OurWork.json";

const Work = () => {
    const [ourworkData,setOurWork] = useState (OurWorkJson);
    const filterItem = (categItem) => {
      const updatedItems = OurWorkJson.filter((currElem) => {
        return currElem.workType === categItem;
      });
      setOurWork(updatedItems);
    };

    const click = () => {
      window.location.href = "CaseStudies";
    }
  return (
    <>
      {/* <h1>Work</h1> */}
      <Header />
      <div className={workstyle.WorkSection}>
        <Container>
          <div className={workstyle.WorkBanner}>
            <p className={workstyle.WorkTitle}>What we created</p>
            <h2 className={workstyle.WorkHeading}>Our Work Portfolio</h2>
            <p className={workstyle.WorkParg}>
              We help teams create great digital products by providing them with
              tools and technology to make the design-to-code process
              universally accessible.
            </p>
          </div>
        </Container>
      </div>
      <div className={workstyle.OurWork}>
        <Container>
          <Nav
            className={workstyle.casestudy_header}
            Nav
            variant="pills"
            defaultActiveKey="#home"
          >
            <NavLink href="#home"  className={workstyle.navlink } onClick={() => { setOurWork(OurWorkJson) }}>All</NavLink>
            <NavLink href="" className={workstyle.navlink }  onClick={() => { filterItem("UI Design") }}>UI Design</NavLink>
            <NavLink href=""  className={workstyle.navlink } onClick={() => filterItem("Webflow Design")}>Webflow Design</NavLink>
            <NavLink href="" className={workstyle.navlink } onClick={() => filterItem("Figma Design")}>Figma Design</NavLink>
          </Nav>
          <Row>
          {ourworkData.map((item) => (
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <Image src={item.workimg} className={workstyle.WorkImage} />
            <div className={workstyle.WorkContent}>
            <h3 className={workstyle.WorkCardHeading}>{item.workheading}</h3>
            <p className={workstyle.WorkCardParg}>{item.workdescription}</p>
            <button className={workstyle.WorkViewBtn} onClick={click}>{item.workview}</button>
            </div>
            </Col>
            ))}
          </Row>
        </Container>
        <CTA />
      </div>
      
      <Footer />
    </>
  );
};
export default Work;
