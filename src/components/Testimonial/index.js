import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../screens/Homepage/style.css";
import { Assets } from "../../Common";
import { owlCarouselOptions } from "../../utils";

const Testimonial = ({ data }) => {
  return (
    <div className="_testimonialSection">
      <div className="_testimonialSection-inner">
        <Container>
          <Row className="_testRow _aI-center">
            <Col xs={12} md={12} lg={4} className="_testColRight">
              <div className="_abtBlock">
                <div className="_titleDiv">
                  <h2 className="_title">Testimonials</h2>
                  <p className="_title_txt">
                    See what those who use Empeal have to say about it. All
                    different users share their experiences…
                  </p>
                  <a href="#" className="btn _btnCustom-2">
                    Read More
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={8} className="_testColLeft">
              <div className="_testOutter">
                <OwlCarousel {...owlCarouselOptions} className="owl-theme">
                  {data?.result.map((element, index) => (
                    <div key={index} className="_testDiv">
                      <div className="_testCont">
                        {data.result[0].description?.map((element, index) => (
                          <p key={index}>{element.children[0].text}</p>
                        ))}
                      </div>
                      <div className="_testBtmCont">
                        <span className="_testImg">
                          <Image src={Assets.images.testIcon} className="" />
                        </span>
                        <div className="_testInfo">
                          <p className="_name">{element.author}</p>
                          <p className="_src">{element.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Testimonial;
