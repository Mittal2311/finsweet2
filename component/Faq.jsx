import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import faqstyle from "../styles/Faq.module.css";

export const Faq = (props) => {
  const [isActive, setActive] = React.useState(false);
  const handleClick = (id) => {
    setActive(!isActive);
  };
  return (
    <>
      <div className={faqstyle.faq_section}>
        <Container>
          <Row>
            {/* <h1>Faq</h1> */}
            <Col xl={4} lg={4}>
              <h3 className={faqstyle.faq_heading}>
                Frequently asked questions
              </h3>
              <Link href="" className={faqstyle.faq_link}>
                Contact us for more info
              </Link>
            </Col>
            <Col xl={8} lg={8}>
              <div className={faqstyle.question} id={props.id}>
                <h6>How much time does it take?</h6>
                <button onClick={() => handleClick(props.id)}>
                  <svg
                    className={isActive ? "active" : ""}
                    viewBox="0 0 320 512"
                    width="100"
                    title="angle-down"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                  </svg>
                </button>
              </div>
              <div className={isActive ? "answer active" : "answer"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
