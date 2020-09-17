import React from "react";
import { Container, Row, Col, Nav, Tab, Image } from "react-bootstrap";
import "../../screens/Homepage/style.css";
import { useHistory } from "react-router-dom";

const EmployeeStory = ({ empStoryData }) => {
  const history = useHistory();
  const _handleSubmit = (selectedResult) => {
    history.push("/stories", { story: selectedResult });
  };

  return (
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
                        </Col>
                        <Col md={6}>
                          <div className="_content">
                            <p className="_contCat">Employee</p>
                            <h2 className="_title">
                              {empStoryData.result[3].name}
                            </h2>
                            {empStoryData.result[3].introduction?.map(
                              (element, index) => (
                                <p key={index}>{element.children[0].text}</p>
                              )
                            )}
                            <a
                              href="/stories"
                              className="btn _btnCustom-2"
                              onClick={() =>
                                _handleSubmit(empStoryData.result[3])
                              }
                            >
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
                            <h2 className="_title">
                              {empStoryData.result[2].name}
                            </h2>
                            {empStoryData.result[2].description?.map(
                              (element, index) => (
                                <p key={index}>{element.children[0].text}</p>
                              )
                            )}
                            <a
                              href="#"
                              className="btn _btnCustom-2"
                              onClick={() =>
                                _handleSubmit(empStoryData.result[2])
                              }
                            >
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
                            <h2 className="_title">
                              {empStoryData.result[1].name}
                            </h2>
                            {empStoryData.result[1].description?.map(
                              (element, index) => (
                                <p key={index}>{element.children[0].text}</p>
                              )
                            )}
                            <a
                              href="#"
                              className="btn _btnCustom-2"
                              onClick={() =>
                                _handleSubmit(empStoryData.result[1])
                              }
                            >
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
                            <h2 className="_title">
                              {empStoryData.result[0].name}
                            </h2>
                            {empStoryData.result[0].description?.map(
                              (element, index) => (
                                <p key={index}>{element.children[0].text}</p>
                              )
                            )}
                            <a
                              href="#"
                              className="btn _btnCustom-2"
                              onClick={() =>
                                _handleSubmit(empStoryData.result[0])
                              }
                            >
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
  );
};

export default EmployeeStory;
