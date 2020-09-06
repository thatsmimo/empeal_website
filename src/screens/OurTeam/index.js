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

function OurTeam() {
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
                  {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown> */}
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
        <div className="_teamPage _topGap">
            {/* Section : Begin */}      
            <div className="_teamSection-1  _c-padding _white-bg">
              <Container>  
                <Row className="_textCard-row">
                    <Col md={12} lg={10} className="">
                      <div class="_titleDiv _mB-0">
                        <h2 className="_titleLarge">Meet the Team</h2>  
                        <p className="_title_txt">Our experienced health team in Ireland and India consists of Health Coaches and Experts in the fields of Nutrition, Fitness, Sleep, Stress Management and Behavioural Change who work together to provide organizations with effective employee wellness programmes with numerous success stories behind their names.</p>                  
                      </div>
                    </Col>
                  </Row>                
              </Container>
            </div>   
            {/* Section : Begin */}      
            <div className="_teamSection-2  _c-padding">
              <Container> 
                <Row className="_teamCard-row">
                    {/* Col : Begin */}
                    <Col md={6} lg={6} className="_teamCard-col">
                        <div className="_teamCard">
                          <Row className="">
                            <Col md={12} lg={5}>
                              <div className="_teamCard-fig"><Image src={Assets.images.teamImg1} className="img-fluid" /></div>
                            </Col>
                            <Col md={12} lg={7}>
                              <div className="_teamCard-cont">
                                  <div className="_teamCard-titleDiv">
                                      <p className="_teamCard-title">Sohini De</p>
                                      <p className="_teamCard-subtitle">CEO</p>
                                  </div>                                
                                  <p className="_txt">Quidam officiis similique tollit indoctum efficiendi tantas.</p>
                                  <ul className="_sLinks">
                                      <li><a href="#"><Image src={Assets.images.linkedIn} className="img-fluid" /></a></li>                                     
                                  </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                    </Col>
                    {/* Col : End */}
                    {/* Col : Begin */}
                    <Col md={6} lg={6} className="_teamCard-col">
                        <div className="_teamCard">
                          <Row className="">
                            <Col md={12} lg={5}>
                              <div className="_teamCard-fig"><Image src={Assets.images.teamImg2} className="img-fluid" /></div>
                            </Col>
                            <Col md={12} lg={7}>
                              <div className="_teamCard-cont">
                                  <div className="_teamCard-titleDiv">
                                      <p className="_teamCard-title">Aurobinda De</p>
                                      <p className="_teamCard-subtitle">CTO</p>
                                  </div>                                
                                  <p className="_txt">Te aliquam noluisse his epicuri detracto indoctum.</p>
                                  <ul className="_sLinks">
                                      <li><a href="#"><Image src={Assets.images.linkedIn} className="img-fluid" /></a></li>                                     
                                  </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                    </Col>
                    {/* Col : End */}
                    {/* Col : Begin */}
                    <Col md={6} lg={6} className="_teamCard-col">
                        <div className="_teamCard">
                          <Row className="">
                            <Col md={12} lg={5}>
                              <div className="_teamCard-fig"><Image src={Assets.images.teamImg3} className="img-fluid" /></div>
                            </Col>
                            <Col md={12} lg={7}>
                              <div className="_teamCard-cont">
                                  <div className="_teamCard-titleDiv">
                                      <p className="_teamCard-title">Arnab Tarwani</p>
                                      <p className="_teamCard-subtitle">Data Analyst</p>
                                  </div>                                
                                  <p className="_txt">Quidam officiis similique tollit indoctum efficiendi tantas.</p>
                                  <ul className="_sLinks">
                                      <li><a href="#"><Image src={Assets.images.linkedIn} className="img-fluid" /></a></li>                                     
                                  </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                    </Col>
                    {/* Col : End */}
                    {/* Col : Begin */}
                    <Col md={6} lg={6} className="_teamCard-col">
                        <div className="_teamCard">
                          <Row className="">
                            <Col md={12} lg={5}>
                              <div className="_teamCard-fig"><Image src={Assets.images.teamImg4} className="img-fluid" /></div>
                            </Col>
                            <Col md={12} lg={7}>
                              <div className="_teamCard-cont">
                                  <div className="_teamCard-titleDiv">
                                      <p className="_teamCard-title">Ishita Umanath</p>
                                      <p className="_teamCard-subtitle">Marketing</p>
                                  </div>                                
                                  <p className="_txt">Quidam officiis similique tollit indoctum efficiendi tantas.</p>
                                  <ul className="_sLinks">
                                      <li><a href="#"><Image src={Assets.images.linkedIn} className="img-fluid" /></a></li>                                     
                                  </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                    </Col>
                    {/* Col : End */}
                    {/* Col : Begin */}
                    <Col md={6} lg={6} className="_teamCard-col">
                        <div className="_teamCard">
                          <Row className="">
                            <Col md={12} lg={5}>
                              <div className="_teamCard-fig"><Image src={Assets.images.teamImg5} className="img-fluid" /></div>
                            </Col>
                            <Col md={12} lg={7}>
                              <div className="_teamCard-cont">
                                  <div className="_teamCard-titleDiv">
                                      <p className="_teamCard-title">Saurabh Kumar</p>
                                      <p className="_teamCard-subtitle">Business Analyst</p>
                                  </div>                                
                                  <p className="_txt">Quidam officiis similique tollit indoctum efficiendi tantas.</p>
                                  <ul className="_sLinks">
                                      <li><a href="#"><Image src={Assets.images.linkedIn} className="img-fluid" /></a></li>                                     
                                  </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                    </Col>
                    {/* Col : End */}
                    {/* Col : Begin */}
                    <Col md={6} lg={6} className="_teamCard-col">
                        <div className="_teamCard">
                          <Row className="">
                            <Col md={12} lg={5}>
                              <div className="_teamCard-fig"><Image src={Assets.images.teamImg6} className="img-fluid" /></div>
                            </Col>
                            <Col md={12} lg={7}>
                              <div className="_teamCard-cont">
                                  <div className="_teamCard-titleDiv">
                                      <p className="_teamCard-title">Polina Mamchenkova</p>
                                      <p className="_teamCard-subtitle">Administrator</p>
                                  </div>                                
                                  <p className="_txt">Quidam officiis similique tollit indoctum efficiendi tantas.</p>
                                  <ul className="_sLinks">
                                      <li><a href="#"><Image src={Assets.images.linkedIn} className="img-fluid" /></a></li>                                     
                                  </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                    </Col>
                    {/* Col : End */}
                </Row>
              </Container>
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
                    <p className="_white">© Copyright 2020 Empea</p>
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

export default OurTeam;
