import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../screens/Homepage/style.css";
import { Assets } from "../../Common";

const Uptodate = ({ data }) => {
  return (
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
              {data.result?.map((element) => (
                <Col md={6} lg={6} className="_iconInfoDiv-col">
                  <div className="_iconInfoDiv">
                    <span className="_iconHolder">
                      <Image
                        src={Assets.images.newsIcon}
                        className="_iconImg"
                      />
                    </span>
                    <div className="_listCont">
                      <p className="_title-4">{element.title}</p>
                      <p>{element.heading}</p>
                      {/* <a href="#" className="_link">
                        Read
                      </a> */}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          {/* Col : End  */}
        </Row>
        {/* Row : End  */}
      </Container>
    </div>
  );
};

export default Uptodate;
