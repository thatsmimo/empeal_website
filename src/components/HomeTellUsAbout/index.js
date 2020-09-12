import React, { useState } from "react";
import { Button, Container, Row, Col, Form, Image } from "react-bootstrap";
import "../../screens/Homepage/style.css";
import { Assets } from "../../Common";

const HomeTellUsAbout = ({ tellAboutData }) => {
  const [tellAboutPos, setTellAboutPos] = useState(0);
  const [selectedBoxPos, setSelectedBoxPos] = useState(null);

  const ChooseBox = () => (
    <div className="_aboutMainDiv">
      <Container>
        <Row className="">
          <Col xs={12} md={8} className="mx-auto">
            <div class="_titleDiv text-center">
              <h2 className="_title _white">{tellAboutData.result[0].title}</h2>
              <p className="_title_txt _white">
                {tellAboutData.result[0].description[0].children[0].text}
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="text-center _titleDiv _subTitleDiv">
              <p className="_title-3 _white">
                {tellAboutData.result[0].subtitle}
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
                {["", ""].map((element, index) => (
                  <div className="_fCol">
                    <Form.Group
                      controlId="formBasicCheckbox"
                      // onClick={() => setSelectedBoxPos(() => 0)}
                    >
                      <label className="_fLabel">
                        <input
                          type="radio"
                          name="position"
                          onClick={() => setSelectedBoxPos(0)}
                        />
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
                ))}

                {/* Col : End */}
                {/* Col : Begin */}

                <div className="_fCol">
                  <Form.Group controlId="formBasicCheckbox">
                    <label className="_fLabel">
                      <input
                        type="radio"
                        name="position"
                        onClick={() => setSelectedBoxPos(1)}
                      />
                      <span className="_fSpan">
                        <span className="_checkDiv">
                          <span className="_checkDiv-tick"></span>
                          <span className="_checkDiv-icon">
                            <Image
                              src={require("../../assets/images/np-building.png")}
                              className=""
                            />
                          </span>
                          <span className="_checkDiv-txt">Organization</span>
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
                      <input
                        type="radio"
                        name="position"
                        onClick={() => setSelectedBoxPos(2)}
                      />
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
                      <input
                        type="radio"
                        name="position"
                        onClick={() => setSelectedBoxPos(3)}
                      />
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
                      <input
                        type="radio"
                        name="position"
                        onClick={() => setSelectedBoxPos(4)}
                      />
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
                <Button
                  //   type="submit" inactive
                  className="_customBtn-1" // TODO: dynamic on click
                  onClick={() => _handleFrwdBackwd("next")}
                >
                  Next
                </Button>
              </div>
            </Form>
            {/* Form Ends */}
          </div>
        </div>
      </Container>
    </div>
  );

  const ChooseRadio = () => (
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
                organization
              </h2>
              <p className="_white _title_txt">
                Empeal can help your organization in many ways
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="text-center _titleDiv _subTitleDiv">
              <a className="_back" onClick={() => _handleFrwdBackwd("back")}>
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
                        <input type="checkbox" checked="checked" /> Remote Teams
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
            <a
              className="_customBtn-2"
              onClick={() => _handleFrwdBackwd("next")}
            >
              Show Me
            </a>
          </div>
        </div>
      </Container>
    </div>
  );

  const FinalListTicks = () => (
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
                Organization
              </h2>
              <p className="_white _title_txt">
                Empeal can help your organization in many ways
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="text-center _titleDiv _subTitleDiv">
              <a className="_back" onClick={() => _handleFrwdBackwd("back")}>
                <Image
                  src={require("../../assets/images/arrow-back.png")}
                  className=""
                />
              </a>
              <p className="_title-3 _white">
                A Strategic Decision for your Organization:
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
  );

  const renderItemWrtPos = () => {
    switch (tellAboutPos) {
      case 0:
        return <ChooseBox />;
      case 1:
        return <ChooseRadio />;
      case 2:
        return <FinalListTicks />;
      default:
        return <div />;
    }
  };

  const _handleFrwdBackwd = (type) => {
    if (type === "back") {
      setTellAboutPos((pos) => pos - 1);
    } else {
      if (tellAboutPos === 0) {
        // alert(selectedBoxPos);
        if (selectedBoxPos == null) {
          alert("Please select one!");
          return;
        }
      }

      setTellAboutPos((pos) => pos + 1);
    }
  };

  return (
    <div className="_aboutYouSection  _deepBlue-bg">
      {renderItemWrtPos()}

      {/* Hill */}
      <div className="_hillDiv">
        <Image src={Assets.images.hill} className="img-fluid" />
      </div>
    </div>
  );
};

export default HomeTellUsAbout;
