import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Header, Footer } from "../component";

import contactstyle from "../styles/_contact.module.css";
import readstyle from "../styles/_readblog.module.css";
import pstyle from "../styles/_privacy.module.css";

const Privacy = () => {
  return (
    <>
      <Header />
      <div className={contactstyle.ContactSection}>
        <Container>
          <div className="">
            <h2 className={contactstyle.ContactaTitle}>Privacy Policy</h2>
            <p className={contactstyle.ContactParg}>
              When you’re ready to go beyond prototyping in Figma, Webflow’s
              ready to help you bring your{" "}
            </p>
          </div>

          <div className={pstyle.PrivacyTitle}>
            <h3 className={pstyle.PrivacyHeading}>Lorem ipsum dolor.</h3>
            <p className={pstyle.PrivacyParg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. <span className={pstyle.ColorBlue}>Excepteur sint occaecat</span> cupidatat non proident.
            </p>
            <p className={pstyle.PrivacyParg}>
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3 className={pstyle.PrivacyHeading}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p className={pstyle.PrivacyParg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat <span className={pstyle.ColorBlue}>cupidatat</span> non proident.
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className={readstyle.ListContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <p className={readstyle.ListContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <p className={readstyle.ListContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <p className={pstyle.PrivacyParg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default Privacy;
