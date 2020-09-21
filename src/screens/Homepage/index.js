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
} from "react-bootstrap";
import { Assets } from "../../Common";
import {
  Header,
  Footer,
  FullPageLoader,
  HomeTellUsAbout,
  EmployeeStory,
  Uptodate,
  Testimonial,
  Blog,
} from "../../components";
import Api from "../../js/service/api";

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
      await Api.get("employee_story"),
      await Api.get("uptodate"),
      await Api.get("testimonials"),
      await Api.get("blog"),
    ]);
    // console.log("HomePage: ", allPromise);
    setData(allPromise);
    setLoading(false);
  };

  if (loading) {
    return <FullPageLoader />;
  }
  return (
    <div className="_main _home">
      {/***** Header ********/}
      <Header />

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
      <EmployeeStory empStoryData={data[4]} />

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

      {/***** Testimonial ********/}
      <Testimonial data={data[6]} />

      {/***** Blog Section : Begin ********/}
      <Blog data={data[7]} />

      {/***** Uptodate Section ********/}
      <Uptodate data={data[5]} />

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
