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
  Card

} from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./";
import { Assets } from "../../Common";

function Product() {
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
        <div className="_productPage _topGap">
            {/* Section : Begin */}      
            <div className="_productSection-1 _white-bg">
              <Container>  
                <Row className="_textCard-row _aI-center">
                    <Col md={6} lg={6} className="">
                      <div class="_mobDiv">
                        <img  className="" src={Assets.images.screenImg1} alt="Screen" />
                      </div>
                    </Col>
                    <Col md={6} lg={6} className="">
                      <div className="_proCont">
                        <div class="_titleDiv">
                          <h2 className="_titleLarge">A whole <br/>new level</h2>  
                          <p className="_txtLarge">Empeal aims to reduce health risks for individuals and organisations by using proactive interventions and continuous improvement through our unique algorithms. </p>
                          <p className="_txtLarge">Our measurable metrics based on medical, nutrition, lifestyle, behaviour and individual goals data, help users and organisations understand their health footprint and act on it.</p>
                        </div>
                        <div className="_b-btns">
                          <a href="#" className="_appBtn">
                            <span>
                              <Image src={Assets.images.appStrore} className="" />
                            </span>{" "}
                            App Store
                          </a>
                          <a href="#" className="_appBtn">
                            <span>
                              <Image src={Assets.images.googlePlay} className="" />
                            </span>{" "}
                            Google Play
                          </a>
                        </div>
                      </div>                      
                    </Col>
                  </Row>                
              </Container>
            </div>   
            {/* Section : Begin */}      
            <div className="_productSection-2 _c-padding  _pB-0">
              <Container> 
                                
              </Container>
              <div class="_proBtmDiv">
                <Image src={Assets.images.manBenchHill} className="img-fluid" />
              </div>
            </div> 
            {/* Section : Begin */}      
            <div className="_productSection-flow _c-padding _white-bg _pB-0">
              <Container> 
                <Row className="">
                    {/* Col : Begin */}
                    <Col md={10} lg={6} className="mx-auto">
                      <div class="_titleDiv text-center">
                        <h2 className="_title">How we do it</h2>
                        <p class="_title_txt  _fW-400">See how we bring Empeal to life and help thousands of people manage chronic health conditions through our unique algorithm.</p>
                      </div>
                    </Col>
                    {/* Col : End */}                    
                </Row>
                <div className="_explainerFunnel">
                  <Image src={Assets.images.explainerFunnel} className="img-fluid" />
                </div>                
              </Container>
            </div> 
            {/* Section : Begin */}      
            <div className="_productSection-acc _c-padding _white-bg  _pB-0">
              <Container> 
                  <div className="_accordianContainer">                    
                    <Accordion defaultActiveKey="0">
                      <Row className="">
                          {/* Col : Begin */}
                          <Col md={6} lg={6} className="_acCard-col">
                            <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="0">
                              <p className="_title-3">Integrated</p>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                We integrate movement, sleep, heart rate and other data from wearables / mobile-devices into a single platform. We integrate that with Nutrition information to give users a 360 degree view of their health.
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                            <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="1">
                              <p className="_title-3">Intelligent</p>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                We integrate movement, sleep, heart rate and other data from wearables / mobile-devices into a single platform. We integrate that with Nutrition information to give users a 360 degree view of their health.
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>                          
                            <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="2">
                              <p className="_title-3">Innovative</p>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                We integrate movement, sleep, heart rate and other data from wearables / mobile-devices into a single platform. We integrate that with Nutrition information to give users a 360 degree view of their health.
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          </Col>
                          {/* Col : End */}   
                          {/* Col : Begin */}
                          <Col md={6} lg={6} className="_acCard-col">
                            <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="4">
                              <p className="_title-3">Cross-Platform</p>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                We integrate movement, sleep, heart rate and other data from wearables / mobile-devices into a single platform. We integrate that with Nutrition information to give users a 360 degree view of their health.
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                            <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="5">
                              <p className="_title-3">Insightful</p>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                We integrate movement, sleep, heart rate and other data from wearables / mobile-devices into a single platform. We integrate that with Nutrition information to give users a 360 degree view of their health.
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                            <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="6">
                              <p className="_title-3">Creative</p>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                We integrate movement, sleep, heart rate and other data from wearables / mobile-devices into a single platform. We integrate that with Nutrition information to give users a 360 degree view of their health.
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          </Col>
                          {/* Col : End */}              
                      </Row>
                    </Accordion>                       
                  </div>              
              </Container>
            </div> 
            {/* Section : Begin */}      
            <div className="_productSection-pricing _c-padding _white-bg">
              <Container> 
                <Row className="">
                    {/* Col : Begin */}
                    <Col md={8} lg={7} className="mx-auto">
                      <div class="_titleDiv text-center">
                        <h2 className="_title">View Pricing</h2>
                        <p class="_title_txt _fW-500">Pri ea vivendo omnesque, eos lobortis inimicus mediocritatem id. Pro ad ubique erroribus, in modo mutat sed. Ei vix quot suscipit, natum animal qui et. Usu vitae decore ut. Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platonem eos.</p>                        
                        <div className="_btn-div text-center">
                          <a href="/pricing" className="btn _btnCustom-3">
                            Pricing
                          </a>
                        </div> 
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

export default Product;
