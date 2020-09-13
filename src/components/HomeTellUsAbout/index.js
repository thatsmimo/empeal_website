/* eslint-disable jsx-a11y/anchor-is-valid */
/** The href attribute requires a valid value to be accessible.  */

import React, { useState } from "react";
import { Button, Container, Row, Col, Form, Image } from "react-bootstrap";
import "../../screens/Homepage/style.css";
import { Assets } from "../../Common";
import {
  homeTellUsAboutCardItemsArr,
  homeTellUsAboutRadioItemsArr,
} from "../../utils";

const HomeTellUsAbout = ({ tellAboutData }) => {
  const [tellAboutPos, setTellAboutPos] = useState(0);
  //   const [selectedRadioPos,setSelectedRadioPos] =
  const [selectedBoxPos, setSelectedBoxPos] = useState(null);

  const ChooseBox = () => (
    <div className="_aboutMainDiv">
      <Container>
        <Row className="">
          <Col xs={12} md={8} className="mx-auto">
            <div className="_titleDiv text-center">
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
            <Form>
              <div className="_fRow">
                {homeTellUsAboutCardItemsArr.map((element, index) => (
                  <div key={index} className="_fCol">
                    <Form.Group controlId="formBasicCheckbox">
                      <label className="_fLabel">
                        <input
                          type="radio"
                          name="position"
                          onClick={() => setSelectedBoxPos(index)}
                          checked={selectedBoxPos === index}
                        />
                        <span className="_fSpan">
                          <span className="_checkDiv">
                            <span className="_checkDiv-tick"></span>
                            <span className="_checkDiv-icon">
                              <Image src={element.icon} className="" />
                            </span>
                            <span className="_checkDiv-txt">
                              {element.name}
                            </span>
                          </span>
                        </span>
                      </label>
                    </Form.Group>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button
                  className={
                    selectedBoxPos == null
                      ? "_customBtn-1 inactive"
                      : "_customBtn-1"
                  }
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
            <div className="_titleDiv text-center">
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
                  <div className="_radiobox-list _orgLists">
                    {homeTellUsAboutRadioItemsArr.map((element, index) => (
                      <div className="_orgList" key={index}>
                        <label className="_checkbox-label">
                          <input type="checkbox" />
                          {element.name}
                          <span className="_chSpan"></span>
                        </label>
                      </div>
                    ))}
                  </div>
                </Form>
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
            <div className="_titleDiv text-center">
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
                <ul className="_lists _tickLists">
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
