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
  NavDropdown,
  Accordion,
  Card,
  ProgressBar

} from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./";
import { Assets } from "../../Common";

function Stories() {
  return (
    <div className="_main">
        {/***** Header : Begin ********/}
        <div className="_header-main _header">
          <Container-fluid>
            {/* Navbar Begin */}
            <Navbar collapseOnSelect expand="lg" bg="" variant="">
              <Navbar.Brand href="#home">
                <div className="_logo">
                  <a href="/home">
                    <img src={Assets.images.logo} className="_logo" />
                    {/* Logo */}
                  </a>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <div className="_navList"><Nav.Link href="#features">Product</Nav.Link></div>
                  <div className="_navList"><Nav.Link href="/about">Company</Nav.Link></div>
                  <div className="_navList"><Nav.Link href="/library">Library</Nav.Link></div>
                  <div className="_navList"><Nav.Link href="/ourteam">Our Team</Nav.Link></div>
                  <div className="_navList"><Nav.Link href="#">Contact</Nav.Link></div>
                </Nav>               
              </Navbar.Collapse>
              <div className="_hdrUserDiv">
                  <a href="" className="btn _btnCustom-2">Sign In</a>
              </div>
            </Navbar>
            {/* Navbar End */}
          </Container-fluid>
        </div>

        {/* Story Section */}        
        <section className="_storyPage _topGap">
            {/* Section : Begin */}      
            <div className="_storySection-1 _c-padding _pB-0">
              <Container>  
                <Row className="_aI-center">
                    <Col md={12} lg={7} className="">
                      <div class="_titleDiv">
                        <h2 className="_titleLarge">Meet Jane..</h2>  
                        <p class="_fW-500">Jane is a customer support team leader. Jane’s responsibilities are overseeing technical systems, handling employee relations, ensuring compliance with regulations, managing staff engagement, assessing staff needs, hiring and developing each team member to the best potential. </p>
                        <p class="_fW-500">Jane always feels tired and confident she could do better if there was a way to balance her life better. </p>
                      </div>
                      <Row className="_iconInfoDiv-row">
                        <Col md={6} lg={6} className="_iconInfoDiv-col">
                          <div className="_iconInfoDiv-2">
                            <span className="_iconHolder">
                              <Image
                                src={Assets.images.angryIcon}
                                className="_iconImg"
                              />
                            </span>
                            <div className="_listCont">
                              <p className="_title-4">Frustrations</p>
                              <ul className="_list">
                               <li>- Feeling Tried</li>
                               <li>- Hypothyroid</li>
                               <li>- Allergic to Gluten</li>
                               <li>- Shoulder Pain</li>
                             </ul>
                            </div>
                          </div>
                        </Col>
                        <Col md={6} lg={6} className="_iconInfoDiv-col">
                          <div className="_iconInfoDiv-2">
                            <span className="_iconHolder">
                              <Image
                                src={Assets.images.goalIcon}
                                className="_iconImg"
                              />
                            </span>
                            <div className="_listCont">
                              <p className="_title-4">Goals</p>
                              <ul className="_list">
                               <li>- Reduce stress</li>
                               <li>- Be Healthy</li>
                               <li>- Increase knowledge</li>
                             </ul>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={12} lg={5} className="">
                      <div className="_storyFigCont">
                        <Row className="_aI-center">
                          <Col md={6} lg={6}>
                            <figure>
                            <Image src={Assets.images.janeSad}  className="img-fluid"  />
                            </figure>
                          </Col>
                          <Col md={6} lg={6}>
                            <div className="_storyAbout">
                              <ul className="_aboutInfo">
                                <li>Name: Jane</li>
                                <li>Age: 28</li>
                                <li>Work: Sedentary Work</li>
                                <li>Family: Single</li>
                                <li>Location: Dublin</li>
                              </ul>
                            </div>
                          </Col>
                        </Row>   
                      </div>                      
                    </Col>
                  </Row>   
                  </Container>              
                </div>
                {/* Story Sec : 2 */}                
                <div className="_storySection-2 _c-padding _pB-0">
                  <Container>
                    <Row>
                      <Col md={12} lg={8}>
                        <Row className="_progRow">
                          <Col md={6} lg={4} className="_progCol">
                            <p className="_title-4">Objectives</p>
                            <div className="_progDiv">
                              <p className="_progTxt">Be Part of the system</p>
                              <div className="_barDiv _pro-org"><ProgressBar now={60} /></div>
                            </div>
                            <div className="_progDiv">
                              <p className="_progTxt">Recognition</p>
                              <div className="_barDiv _pro-org"><ProgressBar now={60} /></div>
                            </div>
                            <div className="_progDiv">
                              <p className="_progTxt">Happy in Life</p>
                              <div className="_barDiv _pro-org"><ProgressBar now={100} /></div>
                            </div>
                            <div className="_progDiv">
                              <p className="_progTxt">Wellbeing</p>
                              <div className="_barDiv _pro-org"><ProgressBar now={90} /></div>
                            </div>
                          </Col>
                          <Col md={6} lg={4} className="_progCol">
                            <p className="_title-4">Motivations</p>
                            <div className="_progDiv">
                              <p className="_progTxt">Happiness</p>
                              <div className="_barDiv"><ProgressBar now={90} /></div>
                            </div>
                            <div className="_progDiv">
                              <p className="_progTxt">Social</p>
                              <div className="_barDiv"><ProgressBar now={80} /></div>
                            </div>
                            <div className="_progDiv">
                              <p className="_progTxt">Fear</p>
                              <div className="_barDiv"><ProgressBar now={30} /></div>
                            </div>
                            <div className="_progDiv">
                              <p className="_progTxt">Growth</p>
                              <div className="_barDiv"><ProgressBar now={76} /></div>
                            </div>
                          </Col>
                          <Col md={6} lg={4} className="_progCol">
                            <p className="_title-4">Preferred Channels</p>
                            <div className="_progDiv">
                              <p className="_progTxt">Traditional</p>
                              <div className="_barDiv _pro-green"><ProgressBar now={75} /></div>
                            </div>
                            <div className="_progDiv">
                              <p className="_progTxt">Social Media & Work Groups</p>
                              <div className="_barDiv _pro-green"><ProgressBar now={80} /></div>
                            </div>
                            <div className="_progDiv">
                              <p className="_progTxt">Referral</p>
                              <div className="_barDiv _pro-green"><ProgressBar now={60} /></div>
                            </div>
                            <div className="_progDiv">
                              <p className="_progTxt">Better Engagement</p>
                              <div className="_barDiv _pro-green"><ProgressBar now={100} /></div>
                            </div>
                          </Col>
                        </Row> 
                      </Col>
                    </Row>  
                  </Container>
                </div>                
                 
              {/* Section : Begin */} 
              <div className="_storySection-1 _c-padding">
                <Container>
                  <Row>
                    <Col md={12} lg={12}>                      
                      <p className="_fW-500">Jane is frequently unwell. She needs medical treatment and frequent visit to clinics but thankfully that’s covered through insurance. However, this causes her to miss work and results in poor social inclusion, happiness and career growth.</p>
                      <p className="_fW-500">She has seen a trend of absenteeism in her team as well. She thinks this could be avoided with proper intervention.</p>
                    </Col>
                    <Col md={12} lg={12}>                      
                      <div className="_howItWork">
                        <a href="#" className="_link2">See how Empeal worked for Jane…</a>
                      </div>
                    </Col>
                  </Row> 
                </Container>
              </div>
          </section>

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
        <footer className="_footer">
          <div className="_footerMain">
            <Container>
              <Row className="_fm-row">
                <Col md={12} lg={4}>
                  <div className="_f-logo">
                    <a href="#">
                      <img src={Assets.images.logo} className="_logo" />
                    </a>
                    <p>
                      Wind of Change Total Wellbeing Solutions Ltd. <br />
                      Dogpatch Labs The CHQ Building, Custom House Quay, Dublin
                      1
                    </p>
                  </div>
                  <p>
                    <a href="#" className="_dark-1">
                      <strong>+353-879945928 (Ireland) </strong>
                    </a>
                    <br />
                    <a href="#" className="_dark-1">
                      <strong>+91-9836179466 (India)</strong>
                    </a>
                  </p>
                  <p>
                    <a href="#" className="_dark-1">
                      <strong>info@empeal.com</strong>
                    </a>
                    <br />
                  </p>
                </Col>
                <Col md={12} lg={8}>
                  <Row>
                    <Col md={4} lg={4}>
                      <h3 className="_title-3">Services</h3>
                      <ul className="_f-lists">
                        <li>
                          <a href="#">Design</a>
                        </li>
                        <li>
                          <a href="#">Social Media</a>
                        </li>
                        <li>
                          <a href="#">Develop</a>
                        </li>
                      </ul>
                    </Col>
                    <Col md={4} lg={4}>
                      <h3 className="_title-3">Information</h3>
                      <ul className="_f-lists">
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">News</a>
                        </li>
                        <li>
                          <a href="#">About</a>
                        </li>
                      </ul>
                    </Col>
                    <Col md={4} lg={4}>
                      <h3 className="_title-3">Contact Us</h3>
                      <ul className="_f-lists">
                        <li>
                          <a href="#">Write to Us</a>
                        </li>
                        <li>
                          <a href="#">Call to Us</a>
                        </li>
                        <li>
                          <a href="#">Information</a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="_footerBtm">
            <Container>
              <Row className="_aI-center">
                <Col md={12} lg={6}>
                  <div className="">
                    <p className="_white">© Copyright 2020 Empeal</p>
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  <ul className="_socialLinks">
                    <li>
                      <a href="#">
                        <Image
                          src={require("../../assets/images/facebook.png")}
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          src={require("../../assets/images/twitter.png")}
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          src={require("../../assets/images/instagram.png")}
                          className="img-fluid"
                        />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
        
    </div>        
);
}

export default Stories;
