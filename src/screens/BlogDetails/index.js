import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Assets } from "../../Common";
import { Header, Footer } from "../../components";
import { dateConverter } from "../../utils";

function BlogDetails() {
  const location = useLocation();
  const { details } = location.state || false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="_main">
      {/***** Header : Begin ********/}
      <Header />

      {/* Story Section */}
      <section className="_blogDetails-page  _topGap _white-bg">
        {/* Section : Begin */}
        <div className="_blogDetails-sec _c-padding">
          <Container>
            <Row>
              <Col md={12} lg={8} className="mx-auto">
                <div className="_blogD-inner">
                  <div className="_blogBar">
                    <a href="/home">Back to Home</a>
                  </div>
                  <div className="_blogD-hdr">
                    <p className="_title-1 _dark-1">{details.title}</p>
                    <div className="_blogD-info">
                      <div className="_date _title-4">
                        <span className="_icon">
                          <img
                            className=""
                            src={Assets.images.calenderIcon}
                            alt=""
                          />
                        </span>
                        {dateConverter(details.blog_date)}
                      </div>
                    </div>
                  </div>
                  <div className="_blogD-bdy">
                    <figure>
                      <img
                        className="img-fluid"
                        src={Assets.images.blogDetailsImg}
                        alt="First slide"
                      />
                    </figure>
                    {details.blog_body?.map((element, index) => (
                      <p key={index}>{element.children[0].text}</p>
                    ))}
                  </div>
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

export default BlogDetails;
