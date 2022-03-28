import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Header } from "../component";
import { Container } from "react-bootstrap";

import workstyle from "../styles/_work.module.css";

const Work = () => {
return(
    <>
    {/* <h1>Work</h1> */}
    <Header />
    <div className={workstyle.WorkSection}>
    <Container>
    <div className={workstyle.WorkBanner}>
    <p className={workstyle.WorkTitle}>What we created</p>
    <h2 className={workstyle.WorkHeading}>Our Work Portfolio</h2>
    <p className={workstyle.WorkParg}>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
    </div>

    </Container>    
    </div>
    <Footer />
    </>
)
}
export default Work;