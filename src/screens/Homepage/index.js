import React, { useState, useEffect } from "react";
import {
  Button,
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
} from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";
import "./";
import { Assets } from "../../Common";
import Api from "../../js/service/api";
import FullPageLoader from "../../components/FullPageLoader";

// const options = {
//   items: 1,
//   nav: true,
//   rewind: true,
//   autoplay: true
// };

// const events = {
//   onDragged: function(event) {console.log(event)},
//   onChanged: function(event) {console.log(event)}
// };

function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const allPromise = await Promise.all([
      await Api.get("introduction"),
      await Api.get("mobile_content"),
      await Api.get("award"),
      await Api.get("tell_about"),
    ]);
    console.log("HomePage: ", allPromise);
    setData(allPromise);
    setLoading(false);
  };

  if (loading) {
    return <FullPageLoader />;
  }
  return (
    <div className="_main _home">
      {/***** Header : Begin ********/}
      <div className="_header-main">
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
                <div className="_navList">
                  <Nav.Link href="/product">Product</Nav.Link>
                </div>
                <div className="_navList">
                  <Nav.Link href="/about">Company</Nav.Link>
                </div>
                <div className="_navList">
                  <Nav.Link href="/library">Library</Nav.Link>
                </div>
                <div className="_navList">
                  <Nav.Link href="#">Contact</Nav.Link>
                </div>
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
              <a href="" className="btn _btnCustom-2">
                Sign In
              </a>
            </div>
          </Navbar>
          {/* Navbar End */}
        </Container-fluid>
      </div>

      {/***** Banner : Begin ********/}
      <div className="_bannerOutter">
        {/* Banner part 1 : Begin */}
        <div className="_banner-top _c-padding">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="_bannerCont">
                  <div className="_titleDiv">
                    <p className="_topTag">
                      <span className="_trophyIcon">
                        <Image src={Assets.images.trophy1} className="" />{" "}
                      </span>{" "}
                      Award Winning Company
                    </p>
                    <h1 className="_titleLarge">{data[0].result[0].title}</h1>
                    <p className="_titleTxt">
                      {data[0].result[0].description[0].children[0].text}
                    </p>
                  </div>
                  <Form className="_bannerMail-form">
                    <Form.Group>
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Button type="submit" className="_btn">
                      Schedule a Demo
                    </Button>
                  </Form>
                  <div className="_b-btns">
                    <a href={data[0].result[0].app_lik[0]} className="_appBtn">
                      <span>
                        <Image src={Assets.images.appStrore} className="" />
                      </span>{" "}
                      App Store
                    </a>
                    <a href={data[0].result[0].app_lik[1]} className="_appBtn">
                      <span>
                        <Image src={Assets.images.googlePlay} className="" />
                      </span>{" "}
                      Google Play
                    </a>
                  </div>
                  <div className="_womanImg">
                    <Image src={Assets.images.woman} className="" />
                  </div>
                </div>
              </Col>
              {/* <Col xs={12} md={6}>
                                <div className="_bannerRight">
  
                                </div>
                              </Col> */}
            </Row>
          </Container>
          <div className="_bannerRight">
            <Image src={Assets.images.mobile} className="" />
          </div>
        </div>
        {/* Banner part 2 : Begin */}
        <div className="_banner-bottom _c-padding">
          <Container>
            <Row className="_aI-center">
              <Col xs={12} md={12} lg={5}>
                <div className="_bannerSliderCont">
                  <Carousel className="_mobScreenSlider">
                    <Carousel.Item>
                      <img
                        className="d-block"
                        src={Assets.images.screenImg1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-blocK"
                        src={Assets.images.screenImg1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block"
                        src={Assets.images.screenImg1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </Col>
              <Col xs={12} md={12} lg={7}>
                <div className="_bannerRigthTextBlock">
                  <div class="_titleDiv">
                    <h2 className="_title">What does Empeal Do?</h2>
                  </div>

                  <ListGroup className="_customListGrp-1">
                    <ListGroup.Item>
                      <span className="_iconHolder">
                        <Image
                          src={Assets.images.heartIconRed}
                          className="_iconImg"
                        />
                      </span>
                      <div className="_listCont">
                        <p className="_title-4">{data[1].result[1].title}</p>
                        <p>
                          {data[1].result[1].description[0].children[0].text}
                        </p>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="_iconHolder">
                        <Image
                          src={Assets.images.healthProIcon}
                          className="_iconImg"
                        />
                      </span>
                      <div className="_listCont">
                        <p className="_title-4">{data[1].result[2].title}</p>
                        <p>
                          {data[1].result[2].description[0].children[0].text}
                        </p>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="_iconHolder">
                        <Image
                          src={Assets.images.distanceIcon}
                          className="_iconImg"
                        />
                      </span>
                      <div className="_listCont">
                        <p className="_title-4">{data[1].result[3].title}</p>
                        <p>
                          {data[1].result[3].description[0].children[0].text}
                        </p>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="_iconHolder">
                        <Image
                          src={Assets.images.foodIcon2}
                          className="_iconImg"
                        />
                      </span>
                      <div className="_listCont">
                        <p className="_title-4">{data[1].result[0].title}</p>
                        <p>
                          {data[1].result[0].description[0].children[0].text}
                        </p>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/***** About Company : Begin ********/}
      <div className="_aboutCompany _c-padding">
        <Container>
          <Row className="_abtRow">
            <Col xs={12} md={8}>
              <div className="_abtBlock">
                <span class="_awIcon">
                  <Image src={Assets.images.trophy1} className="" />
                </span>
                <div class="_titleDiv">
                  <h2 className="_title">{data[2].result[0].award}</h2>
                  <p className="_title_txt">
                    {`${data[2].result[0].description[0].children[0].text}. ${data[2].result[0].description[1].children[0].text}`}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="_compAwards">
                <Row>
                  <Col xs={12} md={6}>
                    <div className="_awardImgDiv">
                      <Image
                        src={require("../../assets/images/company-award-1.png")}
                        className=""
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="_awardImgDiv">
                      <Image
                        src={require("../../assets/images/company-award-1.png")}
                        className=""
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/***** About You 1 : Begin ********/}
      <div className="_aboutYouSection  _deepBlue-bg">
        <div className="_aboutMainDiv">
          <Container>
            <Row className="">
              <Col xs={12} md={8} className="mx-auto">
                <div class="_titleDiv text-center">
                  <h2 className="_title _white">{data[3].result[0].title}</h2>
                  <p className="_title_txt _white">
                    {data[3].result[0].description[0].children[0].text}
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <div className="text-center _titleDiv _subTitleDiv">
                  <p className="_title-3 _white">
                    {data[3].result[0].subtitle}
                  </p>
                </div>
              </Col>
            </Row>

            <div className="_careerOptionBox">
              <div className="_careerOption">
                {/* Form Begins */}
                <Form>
                  {/* Row : Begin */}
                  <div className="_fRow">
                    {/* Col : Begin */}
                    <div className="_fCol">
                      <Form.Group controlId="formBasicCheckbox">
                        <label className="_fLabel">
                          <input type="radio" name="position" />
                          <span className="_fSpan">
                            <span className="_checkDiv">
                              <span className="_checkDiv-tick"></span>
                              <span className="_checkDiv-icon">
                                <Image
                                  src={require("../../assets/images/Health_icon_red.png")}
                                  className=""
                                />
                              </span>
                              <span className="_checkDiv-txt">
                                Health Service
                              </span>
                            </span>
                          </span>
                        </label>
                      </Form.Group>
                    </div>
                    {/* Col : End */}
                    {/* Col : Begin */}

                    <div className="_fCol">
                      <Form.Group controlId="formBasicCheckbox">
                        <label className="_fLabel">
                          <input type="radio" name="position" />
                          <span className="_fSpan">
                            <span className="_checkDiv">
                              <span className="_checkDiv-tick"></span>
                              <span className="_checkDiv-icon">
                                <Image
                                  src={require("../../assets/images/np-building.png")}
                                  className=""
                                />
                              </span>
                              <span className="_checkDiv-txt">
                                Organisation
                              </span>
                            </span>
                          </span>
                        </label>
                      </Form.Group>
                    </div>
                    {/* Col : End */}
                    {/* Col : Begin */}
                    <div className="_fCol">
                      <Form.Group controlId="formBasicCheckbox">
                        <label className="_fLabel">
                          <input type="radio" name="position" />
                          <span className="_fSpan">
                            <span className="_checkDiv">
                              <span className="_checkDiv-tick"></span>
                              <span className="_checkDiv-icon">
                                <Image
                                  src={require("../../assets/images/np_employee.png")}
                                  className=""
                                />
                              </span>
                              <span className="_checkDiv-txt">Employee</span>
                            </span>
                          </span>
                        </label>
                      </Form.Group>
                    </div>
                    {/* Col : End */}
                    {/* Col : Begin */}
                    <div className="_fCol">
                      <Form.Group controlId="formBasicCheckbox">
                        <label className="_fLabel">
                          <input type="radio" name="position" />
                          <span className="_fSpan">
                            <span className="_checkDiv">
                              <span className="_checkDiv-tick"></span>
                              <span className="_checkDiv-icon">
                                <Image
                                  src={require("../../assets/images/np_human-resources.png")}
                                  className=""
                                />
                              </span>
                              <span className="_checkDiv-txt">HR</span>
                            </span>
                          </span>
                        </label>
                      </Form.Group>
                    </div>
                    {/* Col : End */}
                    {/* Col : Begin */}
                    <div className="_fCol">
                      <Form.Group controlId="formBasicCheckbox">
                        <label className="_fLabel">
                          <input type="radio" name="position" />
                          <span className="_fSpan">
                            <span className="_checkDiv">
                              <span className="_checkDiv-tick"></span>
                              <span className="_checkDiv-icon">
                                <Image
                                  src={require("../../assets/images/np_health-insurance.png")}
                                  className=""
                                />
                              </span>
                              <span className="_checkDiv-txt">Insurance</span>
                            </span>
                          </span>
                        </label>
                      </Form.Group>
                    </div>
                    {/* Col : End */}
                  </div>
                  {/* Row : End */}
                  <div className="text-center">
                    <Button type="submit" className="_customBtn-1 ">
                      Next
                    </Button>
                  </div>
                </Form>
                {/* Form Ends */}
              </div>
            </div>
          </Container>
        </div>

        {/* Hill */}
        <div className="_hillDiv">
          <Image src={Assets.images.hill} className="img-fluid" />
        </div>
      </div>

      {/***** About You 2 : Begin ********/}
      <div className="_aboutYouSection  _deepBlue-bg">
        <div className="_aboutMainDiv">
          <Container>
            <Row className="">
              <Col xs={12} md={8} className="mx-auto">
                <div class="_titleDiv text-center">
                  <h2 className="_title _white">
                    <span className="_absIcon">
                      <Image
                        src={require("../../assets/images/np-building.png")}
                        className=""
                      />
                    </span>
                    Organisation
                  </h2>
                  <p className="_white _title_txt">
                    Empeal can help your organisation in many ways
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <div className="text-center _titleDiv _subTitleDiv">
                  <a href="#" className="_back">
                    <Image
                      src={require("../../assets/images/arrow-back.png")}
                      className=""
                    />
                  </a>
                  <p className="_title-3 _white">
                    What does your company struggle with?
                  </p>
                </div>
              </Col>
            </Row>
            <div className="_careerOptionBox">
              <div className="_mB-45">
                <Row>
                  <Col md="12" lg="10" className="mx-auto">
                    {/* Form Begins */}
                    <Form>
                      <div class="_radiobox-list _orgLists">
                        <div className="_orgList">
                          <label class="_checkbox-label">
                            <input type="checkbox" /> Employee Relation
                            <span class="_chSpan"></span>
                          </label>
                        </div>
                        <div className="_orgList">
                          <label class="_checkbox-label">
                            <input type="checkbox" /> Presenteeism
                            <span class="_chSpan"></span>
                          </label>
                        </div>
                        <div className="_orgList">
                          <label class="_checkbox-label">
                            <input type="checkbox" /> Disjointed EAP
                            <span class="_chSpan"></span>
                          </label>
                        </div>
                        <div className="_orgList">
                          <label class="_checkbox-label">
                            <input type="checkbox" /> Too Many Systems
                            <span class="_chSpan"></span>
                          </label>
                        </div>
                        <div className="_orgList">
                          <label class="_checkbox-label">
                            <input type="checkbox" checked="checked" /> Employee
                            Engagement
                            <span class="_chSpan"></span>
                          </label>
                        </div>
                        <div className="_orgList">
                          <label class="_checkbox-label">
                            <input type="checkbox" checked="checked" /> Remote
                            Teams
                            <span class="_chSpan"></span>
                          </label>
                        </div>
                      </div>
                    </Form>
                    {/* Form Ends */}
                  </Col>
                </Row>
              </div>
              <div className="text-center">
                <p className="_title-3 _white">
                  Are you ready to see how Empeal can help?
                </p>
                <a href="#" className="_customBtn-2">
                  Show Me
                </a>
              </div>
            </div>
          </Container>
        </div>

        {/* Hill */}
        <div className="_hillDiv">
          <Image src={Assets.images.hill} className="" />
        </div>
      </div>

      {/***** About You 3 : Begin ********/}
      <div className="_aboutYouSection  _deepBlue-bg">
        <div className="_aboutMainDiv">
          <Container>
            <Row className="">
              <Col xs={12} md={8} className="mx-auto">
                <div class="_titleDiv text-center">
                  <h2 className="_title _white">
                    <span className="_absIcon">
                      <Image
                        src={require("../../assets/images/np-building.png")}
                        className=""
                      />
                    </span>
                    Organisation
                  </h2>
                  <p className="_white _title_txt">
                    Empeal can help your organisation in many ways
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <div className="text-center _titleDiv _subTitleDiv">
                  <a href="#" className="_back">
                    <Image
                      src={require("../../assets/images/arrow-back.png")}
                      className=""
                    />
                  </a>
                  <p className="_title-3 _white">
                    A Strategic Decision for your Organisation:
                  </p>
                </div>
              </Col>
            </Row>
            <div className="_div">
              <div className="_mB-45">
                <Row>
                  <Col md="6" lg="6" className="">
                    <div className="_lapMobBox text-center">
                      <Image
                        src={require("../../assets/images/view-img-1.png")}
                        className="img-fluid"
                      />
                      <span className="_absImg">
                        <Image
                          src={require("../../assets/images/man-img.png")}
                          className="img-fluid"
                        />
                      </span>
                    </div>
                  </Col>
                  <Col md="6" lg="6" className="">
                    <ul class="_lists _tickLists">
                      <li>
                        Easy to rollout, even for remote and multi-location
                        employees
                      </li>
                      <li>Quantified Health Outcomes</li>
                      <li>Increased Staff Productivity</li>
                      <li>Tangible Return on Investment</li>
                      <li>Anonymised Overview of Health Footprint for BI</li>
                    </ul>
                    <p className="_title-2 _white">Lets talk...</p>
                    <a href="#" className="_customBtn-1">
                      Sign Up Today!
                    </a>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>

        {/* Hill */}
        <div className="_hillDiv _hillDiv-2">
          <Image src={Assets.images.hillSolo} className="" />
        </div>
      </div>

      {/***** Your Story : Begin ********/}
      <div className="_yourStory _c-padding">
        <Container>
          <Row className="_abtRow">
            <Col md={12} lg={8} className="mx-auto">
              <div class="_titleDiv text-center">
                <h2 className="_title _blue-1">We Know Your Story...</h2>
                <p className="_title_txt">
                  Our measurable metrics based on medical, nutrition, lifestyle,
                  behaviour and individual goals data, help users and
                  organisations understand their health footprint and act on it.
                </p>
              </div>
            </Col>
          </Row>
          <Tab.Container defaultActiveKey="first" className="_storyTab">
            <Row className="_abtRow">
              <Col xs={12} md={4} lg={3}>
                <div className="_navPill-outter">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <div className="_navDiv">
                          <p className="_txt">Employee</p>
                          <span className="_navIcon">
                            <Image
                              src={require("../../assets/images/np_employee.png")}
                              className=""
                            />
                          </span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <div className="_navDiv">
                          <p className="_txt">Organisation</p>
                          <span className="_navIcon">
                            <Image
                              src={require("../../assets/images/np-building.png")}
                              className=""
                            />
                          </span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <div className="_navDiv">
                          <p className="_txt">Health Service</p>
                          <span className="_navIcon">
                            <Image
                              src={require("../../assets/images/Health_icon_red.png")}
                              className=""
                            />
                          </span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="forth">
                        <div className="_navDiv">
                          <p className="_txt">HR</p>
                          <span className="_navIcon">
                            <Image
                              src={require("../../assets/images/np_human-resources.png")}
                              className=""
                            />
                          </span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">
                        <div className="_navDiv">
                          <p className="_txt">Insurance</p>
                          <span className="_navIcon">
                            <Image
                              src={require("../../assets/images/np_health-insurance.png")}
                              className=""
                            />
                          </span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>
              <Col xs={12} md={8} lg={9}>
                <div class="_tabCont-outter">
                  <Tab.Content>
                    {/* Tab Pane : Begin  */}
                    <Tab.Pane eventKey="first">
                      <div className="_paneInner">
                        <Row className="_paneInner-row">
                          <Col md={6}>
                            <figure className="_tabFig">
                              <Image
                                src={require("../../assets/images/tab-img-1.svg")}
                                className="img-fluid"
                              />
                            </figure>
                            <div class="_bA-div">
                              <p>See how Empeal worked for Jane</p>
                              <div className="can-toggle demo-rebrand-1">
                                <input id="d" type="checkbox" />
                                <label for="d">
                                  <div
                                    className="can-toggle__switch"
                                    data-checked="After"
                                    data-unchecked="Before"
                                  ></div>
                                </label>
                              </div>
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="_content">
                              <p className="_contCat">Employee</p>
                              <h2 class="_title">John Doe</h2>
                              <p>
                                Jane is a customer support team leader. Jane’s
                                responsibilities are overseeing technical
                                systems, handling employee relations, ensuring
                                compliance with regulations, managing staff
                                engagement, assessing staff needs, hiring and
                                developing each team member to the best
                                potential.{" "}
                              </p>
                              <p>
                                <strong>Jane always feels tired</strong> and
                                confident she could do better if{" "}
                                <strong>there was a way</strong> to{" "}
                                <strong>balance her life better</strong>.{" "}
                              </p>
                              <a href="/stories" className="btn _btnCustom-2">
                                Full Story
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                    {/* Tab Pane : Begin  */}
                    <Tab.Pane eventKey="second">
                      <div className="_paneInner">
                        <Row className="_paneInner-row">
                          <Col md={6}>
                            <figure className="_tabFig">
                              <Image
                                src={require("../../assets/images/tab-img-1.svg")}
                                className="img-fluid"
                              />
                            </figure>
                          </Col>
                          <Col md={6}>
                            <div className="_content">
                              <p className="_contCat">Organisation</p>
                              <h2 class="_title">John Doe</h2>
                              <p>
                                Jane is a customer support team leader. Jane’s
                                responsibilities are overseeing technical
                                systems, handling employee relations, ensuring
                                compliance with regulations, managing staff
                                engagement, assessing staff needs, hiring and
                                developing each team member to the best
                                potential.{" "}
                              </p>
                              <p>
                                <strong>Jane always feels tired</strong> and
                                confident she could do better if{" "}
                                <strong>there was a way</strong> to{" "}
                                <strong>balance her life better</strong>.{" "}
                              </p>
                              <a href="#" className="btn _btnCustom-2">
                                Full Story
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                    {/* Tab Pane : Begin  */}
                    <Tab.Pane eventKey="third">
                      <div className="_paneInner">
                        <Row className="_paneInner-row">
                          <Col md={6}>
                            <figure className="_tabFig">
                              <Image
                                src={require("../../assets/images/tab-img-1.svg")}
                                className="img-fluid"
                              />
                            </figure>
                          </Col>
                          <Col md={6}>
                            <div className="_content">
                              <p className="_contCat">Health Service</p>
                              <h2 class="_title">John Doe</h2>
                              <p>
                                Jane is a customer support team leader. Jane’s
                                responsibilities are overseeing technical
                                systems, handling employee relations, ensuring
                                compliance with regulations, managing staff
                                engagement, assessing staff needs, hiring and
                                developing each team member to the best
                                potential.{" "}
                              </p>
                              <p>
                                <strong>Jane always feels tired</strong> and
                                confident she could do better if{" "}
                                <strong>there was a way</strong> to{" "}
                                <strong>balance her life better</strong>.{" "}
                              </p>
                              <a href="#" className="btn _btnCustom-2">
                                Full Story
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                    {/* Tab Pane : Begin  */}
                    <Tab.Pane eventKey="forth">
                      <div className="_paneInner">
                        <Row className="_paneInner-row">
                          <Col md={6}>
                            <figure className="_tabFig">
                              <Image
                                src={require("../../assets/images/tab-img-1.svg")}
                                className="img-fluid"
                              />
                            </figure>
                          </Col>
                          <Col md={6}>
                            <div className="_content">
                              <p className="_contCat">HR</p>
                              <h2 class="_title">John Doe</h2>
                              <p>
                                Jane is a customer support team leader. Jane’s
                                responsibilities are overseeing technical
                                systems, handling employee relations, ensuring
                                compliance with regulations, managing staff
                                engagement, assessing staff needs, hiring and
                                developing each team member to the best
                                potential.{" "}
                              </p>
                              <p>
                                <strong>Jane always feels tired</strong> and
                                confident she could do better if{" "}
                                <strong>there was a way</strong> to{" "}
                                <strong>balance her life better</strong>.{" "}
                              </p>
                              <a href="#" className="btn _btnCustom-2">
                                Full Story
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                    {/* Tab Pane : Begin  */}
                    <Tab.Pane eventKey="fifth">
                      <div className="_paneInner">
                        <Row className="_paneInner-row">
                          <Col md={6}>
                            <figure className="_tabFig">
                              <Image
                                src={require("../../assets/images/tab-img-1.svg")}
                                className="img-fluid"
                              />
                            </figure>
                          </Col>
                          <Col md={6}>
                            <div className="_content">
                              <p className="_contCat">Insurance</p>
                              <h2 class="_title">John Doe</h2>
                              <p>
                                Jane is a customer support team leader. Jane’s
                                responsibilities are overseeing technical
                                systems, handling employee relations, ensuring
                                compliance with regulations, managing staff
                                engagement, assessing staff needs, hiring and
                                developing each team member to the best
                                potential.{" "}
                              </p>
                              <p>
                                <strong>Jane always feels tired</strong> and
                                confident she could do better if{" "}
                                <strong>there was a way</strong> to{" "}
                                <strong>balance her life better</strong>.{" "}
                              </p>
                              <a href="#" className="btn _btnCustom-2">
                                Full Story
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>

      {/***** Helth Management Section : Begin ********/}
      <div className="_helthM-cont _deepBlue-bg _c-padding">
        <Container>
          <Row className="_abtRow">
            <Col md={12} lg={8}>
              <div className="_h-textBlock">
                <span class="_numCircle">85%</span>
                <div class="_titleDiv _mB-0">
                  <h2 className="_title _white">of Corporates say…</h2>
                  <p class="_title-4 _white _fW-400">
                    …they have no scientiﬁc way of designing and implementing{" "}
                    <span className="_yellow">Employee Health Management</span>,
                    neither do they have any way of tracking data……
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/***** About Company : Begin ********/}
      <div className="_testimonialSection">
        <div className="_testimonialSection-inner">
          <Container>
            <Row className="_testRow _aI-center">
              <Col xs={12} md={4} lg={4} className="_testColRight">
                <div className="_abtBlock">
                  <div class="_titleDiv">
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
              <Col xs={12} md={8} lg={8} className="_testColLeft">
                <div class="_testOutter">
                  <OwlCarousel items={3} className="owl-theme" margin={25}>
                    <div className="_testDiv">
                      <div className="_testCont">
                        <p>
                          "Dicat eripuit accumsan facilisi has cetero
                          argumentum, vel at fugit definitionem integre
                          abhorreant epicurei ferri pri."
                        </p>
                      </div>
                      <div className="_testBtmCont">
                        <span className="_testImg">
                          <Image src={Assets.images.testIcon} className="" />
                        </span>
                        <div className="_testInfo">
                          <p className="_name">Hector Mariano</p>
                          <p className="_src">Google</p>
                        </div>
                      </div>
                    </div>
                    <div className="_testDiv">
                      <div className="_testCont">
                        <p>
                          "Dicat eripuit accumsan facilisi has cetero
                          argumentum, vel at fugit definitionem integre
                          abhorreant epicurei ferri pri."
                        </p>
                      </div>
                      <div className="_testBtmCont">
                        <span className="_testImg">
                          <Image src={Assets.images.testIcon} className="" />
                        </span>
                        <div className="_testInfo">
                          <p className="_name">Hector Mariano</p>
                          <p className="_src">Google</p>
                        </div>
                      </div>
                    </div>
                    <div className="_testDiv">
                      <div className="_testCont">
                        <p>
                          "Dicat eripuit accumsan facilisi has cetero
                          argumentum, vel at fugit definitionem integre
                          abhorreant epicurei ferri pri."
                        </p>
                      </div>
                      <div className="_testBtmCont">
                        <span className="_testImg">
                          <Image src={Assets.images.testIcon} className="" />
                        </span>
                        <div className="_testInfo">
                          <p className="_name">Hector Mariano</p>
                          <p className="_src">Google</p>
                        </div>
                      </div>
                    </div>
                    <div className="_testDiv">
                      <div className="_testCont">
                        <p>
                          "Dicat eripuit accumsan facilisi has cetero
                          argumentum, vel at fugit definitionem integre
                          abhorreant epicurei ferri pri."
                        </p>
                      </div>
                      <div className="_testBtmCont">
                        <span className="_testImg">
                          <Image src={Assets.images.testIcon} className="" />
                        </span>
                        <div className="_testInfo">
                          <p className="_name">Hector Mariano</p>
                          <p className="_src">Google</p>
                        </div>
                      </div>
                    </div>
                    <div className="_testDiv">
                      <div className="_testCont">
                        <p>
                          "Dicat eripuit accumsan facilisi has cetero
                          argumentum, vel at fugit definitionem integre
                          abhorreant epicurei ferri pri."
                        </p>
                      </div>
                      <div className="_testBtmCont">
                        <span className="_testImg">
                          <Image src={Assets.images.testIcon} className="" />
                        </span>
                        <div className="_testInfo">
                          <p className="_name">Hector Mariano</p>
                          <p className="_src">Google</p>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/***** Blog Section : Begin ********/}
      <div className="_blogSection _c-padding _bg-white">
        <Container>
          <Row className="">
            <Col md={12} lg={6} className="mx-auto">
              <div class="_titleDiv text-center">
                <h2 className="_title">Our blog</h2>
                <p className="_title_txt">
                  Quidam officiis similique sea ei, vel tollit indoctum
                  efficiendi ei, at nihil tantas platonem eos.{" "}
                </p>
              </div>
            </Col>
          </Row>
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
                  His dolorem habemus mandamus et, eius ponderum lorem molestiae
                  ne, esse vulputate definitiones iracundia at quo……
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
                  <li className="_dark-1">Sohani Dey</li>
                  <li>20 Aug, 2019</li>
                </ul>
                <p className="_blogTxt">
                  His dolorem habemus mandamus et, eius ponderum lorem molestiae
                  ne, esse vulputate definitiones iracundia at quo……
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
                  <li className="_dark-1">Sohani Dey</li>
                  <li>20 Aug, 2019</li>
                </ul>
                <p className="_blogTxt">
                  His dolorem habemus mandamus et, eius ponderum lorem molestiae
                  ne, esse vulputate definitiones iracundia at quo……
                </p>
              </div>
            </Col>
            {/* Blog Col : End  */}
          </Row>
          {/* Blog Row : End  */}
        </Container>
      </div>

      {/***** Uptodate Section : Begin ********/}
      <div className="_uptodateSection _c-padding _bg-white">
        <Container>
          <Row className="">
            <Col md={12} lg={6} className="mx-auto">
              <div class="_titleDiv text-center">
                <h2 className="_title">Keep up to date...</h2>
              </div>
            </Col>
          </Row>
          {/* Blog Row : Begin  */}
          <Row className="_uptRow">
            {/* Col : Begin  */}
            <Col md={12} lg={4} className="_uptCol">
              <div className="_subsOutter">
                <span className="_pin">
                  <Image src={Assets.images.pin} className="" />
                </span>
                <span className="_boyHoping">
                  <Image src={Assets.images.boyHoping2} className="" />
                </span>
                <div className="_subsDiv text-center">
                  <h3 className="_title-1">Catch up with Empeal!</h3>
                  <a href="#" className="btn _btnCustom-3">
                    Subscribe
                  </a>
                </div>
                <span className="_girlWithCycle">
                  <Image src={Assets.images.girlCycle} className="" />
                </span>
              </div>
            </Col>
            {/* Blog Col : End  */}
            {/* Blog Col : Begin  */}
            <Col md={12} lg={8} className="_uptCol">
              <Row className="_iconInfoDiv-row">
                <Col md={6} lg={6} className="_iconInfoDiv-col">
                  <div className="_iconInfoDiv">
                    <span className="_iconHolder">
                      <Image
                        src={Assets.images.newsIcon}
                        className="_iconImg"
                      />
                    </span>
                    <div className="_listCont">
                      <p className="_title-4">News</p>
                      <p>
                        Quidam officiis similique sea ei, vel tollit indoctum
                        efficiendi nihil tantas platonem eos.{" "}
                      </p>
                      <a href="#" className="_link">
                        Read
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={6} className="_iconInfoDiv-col">
                  <div className="_iconInfoDiv">
                    <span className="_iconHolder">
                      <Image
                        src={Assets.images.blogIcon}
                        className="_iconImg"
                      />
                    </span>
                    <div className="_listCont">
                      <p className="_title-4">Blogs</p>
                      <p>
                        Quidam officiis similique sea ei, vel tollit indoctum
                        efficiendi nihil tantas platonem eos.{" "}
                      </p>
                      <a href="#" className="_link">
                        Read
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={6} className="_iconInfoDiv-col">
                  <div className="_iconInfoDiv">
                    <span className="_iconHolder">
                      <Image
                        src={Assets.images.poscastIcon}
                        className="_iconImg"
                      />
                    </span>
                    <div className="_listCont">
                      <p className="_title-4">Podcasts</p>
                      <p>
                        Quidam officiis similique sea ei, vel tollit indoctum
                        efficiendi nihil tantas platonem eos.{" "}
                      </p>
                      <a href="#" className="_link">
                        Litsen Now
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={6} className="_iconInfoDiv-col">
                  <div className="_iconInfoDiv">
                    <span className="_iconHolder">
                      <Image
                        src={Assets.images.interviewIcon}
                        className="_iconImg"
                      />
                    </span>
                    <div className="_listCont">
                      <p className="_title-4">Interview</p>
                      <p>
                        Quidam officiis similique sea ei, vel tollit indoctum
                        efficiendi nihil tantas platonem eos.{" "}
                      </p>
                      <a href="#" className="_link">
                        Read
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* Col : End  */}
          </Row>
          {/* Row : End  */}
        </Container>
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
                    Take our quiz to give you a greater insight into your health
                    with. Short questions will help you find out a bit more
                    about your day to day habits and make you come more aware of
                    what you are using your body for each day.
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
                    Dogpatch Labs The CHQ Building, Custom House Quay, Dublin 1
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
                        <a href="/library">Blog</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
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

export default HomePage;
