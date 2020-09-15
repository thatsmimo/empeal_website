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
} from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";
import "./";
import { Assets } from "../../Common";
import {
  Header,
  Footer,
  FullPageLoader,
  HomeTellUsAbout,
} from "../../components";
import Api from "../../js/service/api";

function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const  options={
    loop: false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
};

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
      {/***** Header ********/}
      <Header isHome={true} />

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
                  <div className="_titleDiv">
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
                <span className="_awIcon">
                  <Image src={Assets.images.trophy1} className="" />
                </span>
                <div className="_titleDiv">
                  <h2 className="_title">{data[2].result[0].award}</h2>
                  <p className="_title_txt">
                    {`${data[2].result[0].description[0].children[0].text}. ${data[2].result[0].description[1].children[0].text}`}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="_compAwards">
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
      <HomeTellUsAbout tellAboutData={data[3]} />

      {/***** Your Story : Begin ********/}
      <div className="_yourStory _c-padding">
        <Container>
          <Row className="_abtRow">
            <Col md={12} lg={8} className="mx-auto">
              <div className="_titleDiv text-center">
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
              <Col xs={12} md={12} lg={3}>
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
              <Col xs={12} md={12} lg={9}>
                <div className="_tabCont-outter">
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
                            <div className="_bA-div">
                              <p>See how Empeal worked for Jane</p>
                              <div className="can-toggle demo-rebrand-1">
                                <input id="d" type="checkbox" />
                                <label>
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
                              <h2 className="_title">John Doe</h2>
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
                              <h2 className="_title">John Doe</h2>
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
                              <h2 className="_title">John Doe</h2>
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
                              <h2 className="_title">John Doe</h2>
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
                              <h2 className="_title">John Doe</h2>
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
                <span className="_numCircle">85%</span>
                <div className="_titleDiv _mB-0">
                  <h2 className="_title _white">of Corporates say…</h2>
                  <p className="_title-4 _white _fW-400">
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
                  <OwlCarousel  {...options} className="owl-theme" margin={25}>
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
              <div className="_titleDiv text-center">
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
              <div className="_titleDiv text-center">
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
                <span className="_numCircle">
                  <Image
                    src={require("../../assets/images/tick.png")}
                    className="img-fluid"
                  />
                </span>
                <div className="_titleDiv _mB-0">
                  <h2 className="_title _white">How Healthy are You?</h2>
                  <p className="_title_txt _white _fW-400">
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
      <Footer />
    </div>
  );
}
export default HomePage;
