import React from "react";
import {
  Button,
  Alert,
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  Image,
  Carousel,
  Nav,
  Tab,
  Navbar,
  NavDropdown

} from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./";
import { Assets } from "../../Common";
import { Header } from "../../components";
import { Footer } from "../../components";

function AboutUs() {
  return ( 
    <div className="_main">
        {/***** Header : Begin ********/}
        <Header />

        {/* Story Section */}        
        <div className="_storySection _c-padding _topGap">
            {/* Banner part 1 : Begin */}            
            <Container>  
              <div class="_titleDiv">
                  <h2 className="_titleLarge">Our Story</h2>                   
              </div>
                
              <Row className="_textCard-row">
                  <Col md={6} lg={5} className="_textCard-col">
                      <div className="_textCard">
                        <h3 className="_title-2">Mission</h3>
                        <p>To provide everyone with a comprehensive digital tool to record, analyse and improve their health footprint anytime, anywhere.</p>
                      </div>
                  </Col>
                  <Col md={6} lg={7} className="_textCard-col">
                      <div className="_textCard">
                        <h3 className="_title-2">Proposition</h3>
                        <p>Our goal is to improve productivity of companies by improving overall health of their employees. We also help practitioners to monitor their patients’ behavioural aspects ultimately leading to happy and healthy individuals.</p>
                      </div>
                  </Col>
                  <Col md={6} lg={5} className="_textCard-col">
                      <div className="_textCard">
                        <h3 className="_title-2">Vision</h3>
                        <p>We aim to help our clients with a comprehensive and secured yet easy to use and interactive system which is able to provide a 360 view of one’s health indicators, improve them and generate meaningful & measurable BI for individuals, corporates & practitioners.</p>
                      </div>
                  </Col>
                  <Col md={6} lg={7} className="_textCard-col">
                      <div className="_textCard">
                        <h3 className="_title-2">Values</h3>
                        <p>Our three key values are:Build Trust: We gather, manage & process individuals’ health data with care, caution & empathy Make a difference: We continuously innovate aiming for sustainable change Create Long-Term Relationship: We look to make a meaningful lasting effect for our client</p>
                      </div>
                  </Col>
              </Row>
              <div className="_btnDiv">
                <a href="#" className="btn _btnCustom-2">Meet the Team</a>
              </div>
            </Container>
            <div className="_btmHill">
              <Image src={Assets.images.rightHill} className="" />
              <span className="_janeImg"><Image src={Assets.images.woman} className="" /></span>
            </div>          
        </div>

        {/***** Take Quiz Section : Begin ********/}
        <div className="_takeQuiz _blueBg _c-padding">
          <Container>
            <Row className="_abtRow">
              <Col md={12} lg={10}>
                <div className="_h-textBlock">
                  <span class="_numCircle">
                    <Image
                      src={require("../../assets/images/tick.png")}
                      className="img-fluid"
                    />
                  </span>
                  <div class="_titleDiv _mB-0">
                    <h2 className="_title _white">How Healthy are You?</h2>
                    <p class="_title_txt _white _fW-400">
                      Take our quiz to give you a greater insight into your
                      health with. Short questions will help you find out a bit
                      more about your day to day habits and make you come more
                      aware of what you are using your body for each day.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={2}>
                <div className="_btnBlock">
                  <a href="#" className="btn _btnCustom-4 float-right">
                    Take The Quiz
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Footer : Begin             */}
        <Footer />
        
    </div>        
);
}

export default AboutUs;
