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

function Library() {
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
                  <div className="_navList"><Nav.Link href="/product">Product</Nav.Link></div>
                  <div className="_navList"><Nav.Link href="/about">Company</Nav.Link></div>
                  <div className="_navList"><Nav.Link href="/library">Library</Nav.Link></div>
                  <div className="_navList"><Nav.Link href="/ourteam">Our Team</Nav.Link></div>
                  <div className="_navList"><Nav.Link href="/contact">Contact</Nav.Link></div>                  
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
        <div className="_libraryPage _topGap">
            {/* Section : Begin */}      
            <div className="_librarySection-1 _darkSky  _c-padding">
              <Container>  
                <Row className="_textCard-row">
                    <Col md={6} lg={5} className="">
                      <div class="_titleDiv _mB-0">
                        <h2 className="_titleLarge _white">Library</h2>  
                        <p className="_title_txt _white">Catch the latest news and articles from Empeal.</p>                  
                      </div>
                      <ul className="_infoLists">
                        <li className="_infoList">
                          <p className="_title-3">Future of your Health</p>
                          <p className="_infoTxts"><span>20 august 2019</span>   |   <span>Nutrition</span></p>
                        </li>
                        <li className="_infoList">
                          <p className="_title-3">Getting Outdoors</p>
                          <p className="_infoTxts"><span>20 august 2019</span>   |   <span>Nutrition</span></p>
                        </li>
                        <li className="_infoList">
                          <p className="_title-3">How apple watch counts calories</p>
                          <p className="_infoTxts"><span>20 august 2019</span>   |   <span>Nutrition</span></p>
                        </li>
                      </ul>
                    </Col>
                    <Col md={6} lg={7} className="">
                      <div className="">
                        <div class="_titleDiv text-center">
                          <h2 className="_title _white">Subscribe to read more</h2>
                        </div>
                        <Row>
                          <Col md={12} lg={8} className="mx-auto">
                            <Form className="_bannerMail-form">
                              <Form.Group>
                                <Form.Control type="email" placeholder="Email" />
                              </Form.Group>
                              <Button type="submit" className="btn _btnCustom-2">
                              Subscribe
                              </Button>
                            </Form>
                          </Col>
                        </Row>                        
                      </div>
                    </Col>
                  </Row>                                 
              </Container>
              <div className="_l-btm-hill">
                <Image src={Assets.images.rightHill} className="" />
                <span className="_menConv"><Image src={Assets.images.menConversation} className="" /></span>
              </div> 
            </div>   
            {/* Section : Begin */}      
            <div className="_librarySection-2  _c-padding _white-bg">
              <Container> 
                  <div className="_libraryTabContainer">
                    <Tab.Container id="" defaultActiveKey="first">
                      <Row>
                        <Col sm={12}  className="_libraryNavCont">
                          <Nav variant="pills">
                            <Nav.Item>
                              <Nav.Link eventKey="first">Nutrition</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Fitness</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">Technology</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="#">Business</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={12} className="_libraryTabCont">
                          <Tab.Content>
                            {/* Tab Pane 1 */}
                            <Tab.Pane eventKey="first">
                              <div className="_lab-TabPane">
                                {/* Blog Row : Begin  */}
                                <Row className="_blogRow">
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Nutrition</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Future of your health
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Sohani Dey</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Fitness</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Getting Outdoors
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Ishita Umanath</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Technology</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        How apple watch counts calories
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Arnab Tarwani</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Nutrition</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Future of your health
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Sohani Dey</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Fitness</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Getting Outdoors
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Ishita Umanath</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Technology</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        How apple watch counts calories
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Arnab Tarwani</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Nutrition</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Future of your health
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Sohani Dey</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Fitness</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Getting Outdoors
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Ishita Umanath</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Technology</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        How apple watch counts calories
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Arnab Tarwani</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                </Row>
                                {/* Blog Row : End  */}
                              </div>
                            </Tab.Pane>
                            {/* Tab Pane 2 */}
                            <Tab.Pane eventKey="second">
                              <div className="_lab-TabPane">
                                {/* Blog Row : Begin  */}
                                <Row className="_blogRow">
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Nutrition</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Future of your health
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Sohani Dey</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Fitness</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Getting Outdoors
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Ishita Umanath</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Technology</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        How apple watch counts calories
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Arnab Tarwani</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Nutrition</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Future of your health
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Sohani Dey</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Fitness</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Getting Outdoors
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Ishita Umanath</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Technology</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        How apple watch counts calories
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Arnab Tarwani</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Nutrition</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Future of your health
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Sohani Dey</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Fitness</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Getting Outdoors
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Ishita Umanath</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Technology</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        How apple watch counts calories
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Arnab Tarwani</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                </Row>
                                {/* Blog Row : End  */}
                              </div>
                            </Tab.Pane>
                            {/* Tab Pane 2 */}
                            <Tab.Pane eventKey="third">
                              <div className="_lab-TabPane">
                                {/* Blog Row : Begin  */}
                                <Row className="_blogRow">
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Nutrition</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Future of your health
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Sohani Dey</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Fitness</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Getting Outdoors
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Ishita Umanath</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Technology</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        How apple watch counts calories
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Arnab Tarwani</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Nutrition</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Future of your health
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Sohani Dey</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Fitness</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Getting Outdoors
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Ishita Umanath</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Technology</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        How apple watch counts calories
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Arnab Tarwani</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Nutrition</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Future of your health
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Sohani Dey</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Fitness</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        Getting Outdoors
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Ishita Umanath</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                  {/* Blog Col : Begin  */}
                                  <Col md={6} lg={4} className="_blogCol">
                                    <div className="_blogDiv">
                                      <p className="_tag">Technology</p>
                                      <figure className="_blogFig">
                                        <Image
                                          src={require("../../assets/images/dummy-img.jpg")}
                                          className="img-fluid"
                                        />
                                      </figure>
                                      <a href="#" className="_blogTitle">
                                        How apple watch counts calories
                                      </a>
                                      <ul className="_blogInfo">
                                        <li className="_dark-1">Arnab Tarwani</li>
                                        <li>20 Aug, 2019</li>
                                      </ul>
                                      <p className="_blogTxt">
                                        His dolorem habemus mandamus et, eius ponderum lorem
                                        molestiae ne, esse vulputate definitiones iracundia at quo……
                                      </p>
                                    </div>
                                  </Col>
                                  {/* Blog Col : End  */}
                                </Row>
                                {/* Blog Row : End  */}
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>                
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

export default Library;
