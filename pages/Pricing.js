import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Faq, Footer, Header } from "../component";

import pricestyle from "../styles/_pricing.module.css";

import PricingJson from "../json/Pricing.json";


const Pricing = () => {
  const [pricingData] = useState(PricingJson);

  return (
    <>
      <Header />
      <div className={pricestyle.PricingSection}>
        <div className={pricestyle.PricingHeading}>
          <h2 className={pricestyle.PricingTitle}>Our Pricing Plans</h2>
          <p className={pricestyle.PricingParg}>
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>
        <Container>
          <Row>
            {pricingData.map((item ,k) => {
              return (
                <Col xl={4} lg={6} md={6} sm={12} xs={12}>
                {/* style={{backgroundColor:item.id == 2 ? "#1C1E53":""}} */}
                  <div className={pricestyle.PricingCard} style={{backgroundColor:item.id == 2 ? "#1C1E53":""}}>
                    <h3 className={pricestyle.number} style={{color:k%2 == 0 ? "black":"white"}}>{item.pricingnumber}</h3>
                    <p className={pricestyle.CardTitle} style={{color:k%2 == 0 ? "black":"#FCD980"}}>{item.pricingdesign}</p>

                    <h6 className={pricestyle.CardHeading} style={{color:k%2 == 0 ? "black":"white"}}>
                      {item.pricingheading}
                    </h6>
                    <p className={pricestyle.Cardparag} style={{color:k%2 == 0 ? "black":"white"}}>
                      {item.pricingdescription}
                    </p>
                    <div className={pricestyle.List}>
                      <ul>
                        {item.List.map((val,index)=>{
                            {/* console.log(item.id) */}
                            return(
                          <li className={pricestyle.ListLink} href="#" style={{color:index >2 && item.id == 1 ? "gray":"black"}} >
                            {val}
                          </li>
                            )
                        })}                       
                      </ul>
                    </div>
                    <div className={pricestyle.GetButton}>
                      <button className={pricestyle.PricingBtn} style={{backgroundColor:k%2 == 0  ? "":"#FCD980"}} >
                        {item.pricingbutton}
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Faq />
      <Footer />
    </>
  );
};
export default Pricing;
