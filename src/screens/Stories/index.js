import React from "react";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import { Assets } from "../../Common";
import { Header, Footer } from "../../components";
import { useLocation } from "react-router-dom";

function Stories() {
  const location = useLocation();
  const { story } = location.state || false;
  console.log(JSON.stringify(story));

  return (
    <div className="_main">
      {/***** Header : Begin ********/}
      <Header />

      {/* Story Section */}
      <section className="_storyPage _topGap">
        {/* Section : Begin */}
        <div className="_storySection-1 _c-padding _pB-0">
          <Container>
            <Row className="_aI-center">
              <Col md={12} lg={7} className="">
                <div className="_titleDiv">
                  <h2 className="_titleLarge">Meet {story?.name}..</h2>
                  {story?.introduction?.map((element, index) => (
                    <p className="_fW-500" key={index}>
                      {element.children[0].text}
                    </p>
                  ))}
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
                          {story?.frustrations?.map((element, index) => (
                            <li key={index}>{element}</li>
                          ))}
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
                          {story?.goals?.map((element, index) => (
                            <li key={index}>{element}</li>
                          ))}
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
                        <Image
                          src={Assets.images.janeSad}
                          className="img-fluid"
                        />
                      </figure>
                    </Col>
                    <Col md={6} lg={6}>
                      <div className="_storyAbout">
                        <ul className="_aboutInfo">
                          <li>Name: {story?.name}</li>
                          <li>Age: {story?.age}</li>
                          <li>Work: {story?.work}</li>
                          <li>Family: {story?.family}</li>
                          <li>Location: {story?.location}</li>
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
                      <p className="_progTxt">{story?.objectives?.[0]}</p>
                      <div className="_barDiv _pro-org">
                        <ProgressBar now={60} />
                      </div>
                    </div>
                    <div className="_progDiv">
                      <p className="_progTxt">{story?.objectives?.[1]}</p>
                      <div className="_barDiv _pro-org">
                        <ProgressBar now={60} />
                      </div>
                    </div>
                    <div className="_progDiv">
                      <p className="_progTxt">{story?.objectives?.[2]}</p>
                      <div className="_barDiv _pro-org">
                        <ProgressBar now={100} />
                      </div>
                    </div>
                    <div className="_progDiv">
                      <p className="_progTxt">{story?.objectives?.[3]}</p>
                      <div className="_barDiv _pro-org">
                        <ProgressBar now={90} />
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={4} className="_progCol">
                    <p className="_title-4">Motivations</p>
                    <div className="_progDiv">
                      <p className="_progTxt">{story?.motivations?.[0]}</p>
                      <div className="_barDiv">
                        <ProgressBar now={90} />
                      </div>
                    </div>
                    <div className="_progDiv">
                      <p className="_progTxt">{story?.motivations?.[1]}</p>
                      <div className="_barDiv">
                        <ProgressBar now={80} />
                      </div>
                    </div>
                    <div className="_progDiv">
                      <p className="_progTxt">{story?.motivations?.[2]}</p>
                      <div className="_barDiv">
                        <ProgressBar now={30} />
                      </div>
                    </div>
                    <div className="_progDiv">
                      <p className="_progTxt">{story?.motivations?.[3]}</p>
                      <div className="_barDiv">
                        <ProgressBar now={76} />
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={4} className="_progCol">
                    <p className="_title-4">Preferred Channels</p>
                    <div className="_progDiv">
                      <p className="_progTxt">
                        {story?.preffered_channels?.[0]}
                      </p>
                      <div className="_barDiv _pro-green">
                        <ProgressBar now={75} />
                      </div>
                    </div>
                    <div className="_progDiv">
                      <p className="_progTxt">
                        {story?.preffered_channels?.[1]}
                      </p>
                      <div className="_barDiv _pro-green">
                        <ProgressBar now={80} />
                      </div>
                    </div>
                    <div className="_progDiv">
                      <p className="_progTxt">
                        {story?.preffered_channels?.[2]}
                      </p>
                      <div className="_barDiv _pro-green">
                        <ProgressBar now={60} />
                      </div>
                    </div>
                    <div className="_progDiv">
                      <p className="_progTxt">
                        {story?.preffered_channels?.[3]}
                      </p>
                      <div className="_barDiv _pro-green">
                        <ProgressBar now={100} />
                      </div>
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
                {story?.description?.map((element, index) => (
                  <p className="_fW-500" key={index}>
                    {element.children[0].text}
                  </p>
                ))}
              </Col>
              <Col md={12} lg={12}>
                <div className="_howItWork">
                  <a href="#" className="_link2">
                    See how Empeal worked for Jane…
                  </a>
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

export default Stories;
