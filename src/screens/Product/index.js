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
} from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./";
import { Assets } from "../../Common";
import { Header } from "../../components";
import { Footer } from "../../components";

function Product() {
  return (
    <div className="_main">
      {/***** Header : Begin ********/}
      <Header dummyText={"xyz"} />

      {/* Story Section */}
      <div className="_productPage _topGap">
        {/* Section : Begin */}
        <div className="_productSection-1 _white-bg">
          <Container>
            <Row className="_textCard-row _aI-center">
              <Col md={12} lg={6} className="">
                <div class="_mobDiv">
                  <img
                    className=""
                    src={Assets.images.screenImg1}
                    alt="Screen"
                  />
                </div>
              </Col>
              <Col md={12} lg={6} className="">
                <div className="_proCont">
                  <div class="_titleDiv">
                    <h2 className="_titleLarge">
                      A whole <br />
                      new level
                    </h2>
                    <p className="_txtLarge">
                      Empeal aims to reduce health risks for individuals and
                      organisations by using proactive interventions and
                      continuous improvement through our unique algorithms.{" "}
                    </p>
                    <p className="_txtLarge">
                      Our measurable metrics based on medical, nutrition,
                      lifestyle, behaviour and individual goals data, help users
                      and organisations understand their health footprint and
                      act on it.
                    </p>
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
            <Row className="_proSec2-row">
              <Col md={12} lg={6} className="_proSec2-col">
                <div class="_titleDiv">
                  <h2 className="_titleLarge _white">
                    <span className="_yellow">SaaS</span> health risk management
                    tool
                  </h2>
                  <p className="_txtLarge _white">
                    Empeal aims to reduce and manage health risks for
                    individuals by using proactive interventions and continuous
                    improvement through measurable metrics based on medical,
                    nutrition, lifestyle and behavioural data.
                  </p>
                </div>
              </Col>
              <Col md={12} lg={6} className="_proSec2-col">
                <ListGroup className="_customListGrp-1">
                  <ListGroup.Item>
                    <span className="_iconHolder">
                      <Image
                        src={Assets.images.integrationIcon}
                        className="_iconImg"
                      />
                    </span>
                    <div className="_listCont">
                      <p className="_title-4 _white">Integration</p>
                      <p className="_white">
                      Linking medical, nutrition, lifestyle, behaviour, personal goals 
                      data from interactive questionnaires, wearables and other 
                      integrated technologies, linking them to find effective solution.
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="_iconHolder">
                      <Image
                        src={Assets.images.personalisationIcon}
                        className="_iconImg"
                      />
                    </span>
                    <div className="_listCont">
                      <p className="_title-4 _white">Personalisation</p>
                      <p className="_white">
                      Unique algorithms based on Functional Medicine and WHO 
                    models provide personalised health plans encompassing 
                    nutrition, lifestyle and behavioural change.
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="_iconHolder">
                      <Image
                        src={Assets.images.gamificationIcon}
                        className="_iconImg"
                      />
                    </span>
                    <div className="_listCont">
                      <p className="_title-4 _white">Gamification</p>
                      <p className="_white">
                      Reward system and interactive dashboard for users to engage with the platform and other users.
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="_iconHolder">
                      <Image
                        src={Assets.images.improvmantIcon}
                        className="_iconImg"
                      />
                    </span>
                    <div className="_listCont">
                      <p className="_title-4 _white">Continuous Improvement</p>
                      <p className="_white">
                      Real time analytics linking your data shows continuous improvement to keep you motivated.
                      </p>
                    </div>
                  </ListGroup.Item>                  
                </ListGroup>
              </Col>
            </Row>
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
                  <p class="_title_txt  _fW-400">
                    See how we bring Empeal to life and help thousands of people
                    manage chronic health conditions through our unique
                    algorithm.
                  </p>
                </div>
              </Col>
              {/* Col : End */}
            </Row>
            <div className="_explainerFunnel">
              <Image
                src={Assets.images.explainerFunnel}
                className="img-fluid"
              />
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
                  <Col md={12} lg={6} className="_acCard-col">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        <p className="_title-3">Integrated</p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          We integrate movement, sleep, heart rate and other
                          data from wearables / mobile-devices into a single
                          platform. We integrate that with Nutrition information
                          to give users a 360 degree view of their health.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="1">
                        <p className="_title-3">Intelligent</p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          We integrate movement, sleep, heart rate and other
                          data from wearables / mobile-devices into a single
                          platform. We integrate that with Nutrition information
                          to give users a 360 degree view of their health.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="2">
                        <p className="_title-3">Innovative</p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          We integrate movement, sleep, heart rate and other
                          data from wearables / mobile-devices into a single
                          platform. We integrate that with Nutrition information
                          to give users a 360 degree view of their health.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Col>
                  {/* Col : End */}
                  {/* Col : Begin */}
                  <Col md={12} lg={6} className="_acCard-col">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="4">
                        <p className="_title-3">Cross-Platform</p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body>
                          We integrate movement, sleep, heart rate and other
                          data from wearables / mobile-devices into a single
                          platform. We integrate that with Nutrition information
                          to give users a 360 degree view of their health.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="5">
                        <p className="_title-3">Insightful</p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="5">
                        <Card.Body>
                          We integrate movement, sleep, heart rate and other
                          data from wearables / mobile-devices into a single
                          platform. We integrate that with Nutrition information
                          to give users a 360 degree view of their health.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="6">
                        <p className="_title-3">Creative</p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="6">
                        <Card.Body>
                          We integrate movement, sleep, heart rate and other
                          data from wearables / mobile-devices into a single
                          platform. We integrate that with Nutrition information
                          to give users a 360 degree view of their health.
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
              <Col md={12} lg={7} className="mx-auto">
                <div class="_titleDiv text-center">
                  <h2 className="_title">View Pricing</h2>
                  <p class="_title_txt _fW-500">
                    Pri ea vivendo omnesque, eos lobortis inimicus mediocritatem
                    id. Pro ad ubique erroribus, in modo mutat sed. Ei vix quot
                    suscipit, natum animal qui et. Usu vitae decore ut. Quidam
                    officiis similique sea ei, vel tollit indoctum efficiendi
                    ei, at nihil tantas platonem eos.
                  </p>
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

export default Product;
