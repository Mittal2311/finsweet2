import React from "react";
import { Container, Row, Navbar, Nav, Link, Offcanvas } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import headerstyle from "../styles/Header.module.css";

export const Header = () => {
  const clickbtn = () =>{
    window.location.href = "Contact";
  }
  return (
    <>
      {/* <h1>Home page </h1> */}
      <div className={headerstyle.header_section}>
        <div className="desktop_nav">
          <Container>
            <Row>
              <Navbar expand="lg">
                <Navbar.Brand href="#home">
                  <img src="/images/logo.svg" />
                </Navbar.Brand>
                <NavbarToggle />
                <NavbarCollapse
                  id="responsive-navbar-nav"
                  className={headerstyle.navbar}
                >
                  <Nav className={headerstyle.header_nav}>
                    <Nav.Link
                      href="Home"
                      className={[headerstyle.navlink, headerstyle.active]}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link href="About" className={headerstyle.navlink}>
                      About Us
                    </Nav.Link>
                    <Nav.Link href="Feature" className={headerstyle.navlink}>
                      Features
                    </Nav.Link>
                    <Nav.Link href="Pricing" className={headerstyle.navlink}>
                      Pricing
                    </Nav.Link>
                    <Nav.Link href="" className={headerstyle.navlink}>
                      FAQ
                    </Nav.Link>
                    <Nav.Link href="" className={headerstyle.navlink}>
                      Blog
                    </Nav.Link>
                  </Nav>
                  <button className={headerstyle.contact_btn} onClick={clickbtn}>
                    {" "}
                    Contact us
                  </button>
                </NavbarCollapse>
              </Navbar>
            </Row>
          </Container>
        </div>

        <div className="mobile_nav">
          <Navbar expand={false}>
            <Container fluid>
              <Navbar.Brand href="#">
                {" "}
                <img src="/images/logo.svg" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                className={headerstyle.menu_icon}
              />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                className={headerstyle.leftmenu}
              >
                <Offcanvas.Header closeButton className="closebtn">
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link
                      href="Home"
                      className={[headerstyle.navlink, headerstyle.active]}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link href="Aboutus" className={headerstyle.navlink}>
                      About Us
                    </Nav.Link>
                    <Nav.Link href="" className={headerstyle.navlink}>
                      Features
                    </Nav.Link>
                    <Nav.Link href="" className={headerstyle.navlink}>
                      Pricing
                    </Nav.Link>
                    <Nav.Link href="" className={headerstyle.navlink}>
                      FAQ
                    </Nav.Link>
                    <Nav.Link href="" className={headerstyle.navlink}>
                      Blog
                    </Nav.Link>
                    <button className={headerstyle.contact_btn}>
                    {" "}
                    Contact us
                  </button>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};
// export default Header;
