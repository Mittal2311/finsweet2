import React from "react";
import { Container ,Row ,Navbar,Nav,Link} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import headerstyle from "../styles/Header.module.css";


const Header = () => {
    return(
        <>
        {/* <h1>Home page </h1> */}
        <div className={headerstyle.header_section}>
        <Container>
            <Row>
            <Navbar expand="lg">
            <Navbar.Brand href="#home">
                <img src="/images/logo.svg" />
              </Navbar.Brand>
              <NavbarToggle className={headerstyle.menu_icon}/>
              <NavbarCollapse id="responsive-navbar-nav" className={headerstyle.navbar}>
                <Nav className={headerstyle.header_nav}>
                  <Nav.Link href="Home" className={[headerstyle.navlink,headerstyle.active]}>Home</Nav.Link>
                  <Nav.Link href="Aboutus" className={headerstyle.navlink}>About Us</Nav.Link>
                  <Nav.Link href="" className={headerstyle.navlink}>Features</Nav.Link>
                  <Nav.Link href="" className={headerstyle.navlink}>Pricing</Nav.Link>
                  <Nav.Link href="" className={headerstyle.navlink}>FAQ</Nav.Link>
                  <Nav.Link href="" className={headerstyle.navlink}>Blog</Nav.Link>
                </Nav>
                <button className={headerstyle.contact_btn}> Contact us</button>
              </NavbarCollapse>
            </Navbar>

            </Row>
        </Container>

        </div>
        </>
    )

}
export default Header;