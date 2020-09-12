import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Assets } from "../../Common";
import { Header, Footer, FullPageLoader } from "../../components";
import Api from "../../js/service/api";
import { useHistory } from "react-router-dom";

export default function Company() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const goOurTeam = () => history.push("ourteam");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const allPromise = await Promise.all([await Api.get("company_story")]);
    console.log("Company: ", allPromise);
    setData(allPromise);
    setLoading(false);
  };

  if (loading) {
    return <FullPageLoader />;
  }
  return (
    <div className="_main">
      {/***** Header : Begin ********/}
      <Header />

      {/* Story Section */}
      <div className="_storySection _c-padding _topGap">
        {/* Banner part 1 : Begin */}
        <Container>
          <div className="_titleDiv">
            <h2 className="_titleLarge">Our Story</h2>
          </div>

          <Row className="_textCard-row">
            {data[0].result.map((element, index) => (
              <Col md={6} lg={5} className="_textCard-col" key={index}>
                <div className="_textCard">
                  <h3 className="_title-2">{element.name}</h3>
                  <p>{element.description[0].children[0].text}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="_btnDiv">
            <Button onClick={goOurTeam} className="btn _btnCustom-2">
              Meet the Team
            </Button>
          </div>
        </Container>
        <div className="_btmHill">
          <Image src={Assets.images.rightHill} className="" />
          <span className="_janeImg">
            <Image src={Assets.images.woman} className="" />
          </span>
        </div>
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
