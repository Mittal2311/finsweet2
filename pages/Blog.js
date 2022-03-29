import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BlogBanner, Footer, Header } from "../component";
import { Container, Image,Row,Col } from "react-bootstrap";

import blogstyle from "../styles/_blog.module.css";
import ourblogstyle from "../styles/OurBlog.module.css";

import BlogJson from "../json/Blog.json";


const Blog = () => {
    const [blogData] = useState(BlogJson);

    const clickme = () => {
        window.location.href = "ReadBlog";
    }
  return (
    <>
      {/* <h1>Blog Page</h1> */}
      <Header />
      <div className={blogstyle.BlogSection}>
        <Container>
      <BlogBanner />
          <p className={blogstyle.BlogParg}>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </p>
          <button className={blogstyle.ReadBtn} onClick={clickme}>Read More</button>
          <div className={blogstyle.BlogOurBlog}>
          <h2 className={blogstyle.OurBlogHeading}>Our Blog</h2>
          <Row>
          {blogData.map((item) => (
          <Col xl={4} lg={4} md={6} sm={12} xs={12} className={blogstyle.BlogCol}>
          <Image src={item.blogimg} className={ourblogstyle.blogimg} />
          <div className={ourblogstyle.blog_content}>
            <span className={ourblogstyle.date}>{item.blogdate}</span>
            <h6 className={ourblogstyle.blog_heading}>{item.blogheading}</h6>
            <p className={ourblogstyle.blog_parg}>{item.description}</p>
            <button className={ourblogstyle.read_btn}>{item.bloglink}</button>
          </div>
      </Col>
      ))}
          </Row>
           
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default Blog;
