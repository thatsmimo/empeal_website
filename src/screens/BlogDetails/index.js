import React from "react";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import { Assets } from "../../Common";
import { Header, Footer } from "../../components";

function BlogDetails() {
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
                    <a href="#">Back to Home</a>
                  </div>
                  <div className="_blogD-hdr">
                    <p className="_title-1 _dark-1">Competition with a difference</p>
                    <div className="_blogD-info">
                      <div className="_date _title-4">
                        <span className="_icon">
                        <img
                        className=""
                        src={Assets.images.calenderIcon}
                        alt=""
                      /></span>
                      2020-04-07</div>
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
                    <p>Step challenges and other team competitions are extremely prevalent these days. It is an absolute delight to witness various companies embrace these competitions as a means of increasing team engagement, while building positive team philosophies. This is even more relevant today as both employers and employees are finding it challenging to stay personally connected while working remortly.</p>
                    <p>Upon speaking to several HR professionals across the globe, we found that these processes could result in being quite cumbersome. This is because, it involves working through an exorbitant number of spreadsheets along with managing various social media challenges to keep participants updated. Another major reason of worry is data security/privacy of the employees.</p>
                    <p>Amidst this, we found that <a href="#">Empeal’s digital solution</a> could be a game changer. This platform enables the smooth running of competitions at multiple locations simultaneously, while ensuring complete data privacy for employees. It also provides for customising challenges to suit individual circumstances.</p>
                    <p>However, this blog is not about how our solution helps companies implement team competitions.</p>
                    <p>Given our constant quest of challenging ourselves and putting our system to test, we recently ran a competition with participants ranging from Australia to West Coast of US. This competition, included participants of various age groups and of course gender.</p>
                    <p>Through this competition, we were aiming to find the probable challenges of running competitions in diverse time zones and demographics. We also wanted to stay true to our philosophy of prevention of chronic conditions through behavior change. Along with this, we wanted to see if we can solve the most common complaints we hear from participants. One such complaint was,‘these challenges are only won by the fittest person in the team’.</p>
                    <p>We were pleasantly surprised that habit creation was effectively embraced by the group. Some of the testimonials quoted as follows: ‘Thank you for organizing such a wonderful bonding game. It was good fun and pleasure’ ‘I have started walking back from office, which is a bit more than 5k’ ‘My new habit is listening to podcasts (while walking)’ ‘Nice to be in shape and ‘Fit by Foot’</p>
                    <p>Today, we share these comments with an attempt to reassure that, people look for habit creation in health competitions. Merely providing leader boards with reward systems might not prove to be effective. In fact, this could be more discouraging to participants considering the fittest in the team would always win.</p>
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
