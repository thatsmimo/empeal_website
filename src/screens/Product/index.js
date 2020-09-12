import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Accordion,
  Card,
} from "react-bootstrap";
import { Assets } from "../../Common";
import { Header, Footer, FullPageLoader } from "../../components";
import Api from "../../js/service/api";

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const allPromise = await Promise.all([
      await Api.get("product_info"),
      await Api.get("product_description"),
      await Api.get("product_features"),
    ]);
    console.log("Product: ", allPromise);
    setData(allPromise);
    setLoading(false);
  };

  if (loading) {
    return <FullPageLoader />;
  }
  return (
    <div className="_main">
      <Header />

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
                    <h2 className="_titleLarge">{data[0].result[0].title}</h2>
                    <p className="_txtLarge">
                      {data[0].result[0].body[0].children.map(
                        (element, index) => (
                          <a key={index}>{element.text}</a>
                        )
                      )}
                    </p>
                    <p className="_txtLarge">
                      {data[0].result[0].body[1].children.map(
                        (element, index) => (
                          <a key={index}>{element.text}</a>
                        )
                      )}
                    </p>
                  </div>
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
                      <p className="_title-4 _white">
                        {data[1].result[3].title}
                      </p>
                      <p className="_white">
                        {data[1].result[3].description[0].children[0].text}
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
                      <p className="_title-4 _white">
                        {data[1].result[2].title}
                      </p>
                      <p className="_white">
                        {data[1].result[2].description[0].children[0].text}
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
                      <p className="_title-4 _white">
                        {data[1].result[1].title}
                      </p>
                      <p className="_white">
                        {data[1].result[1].description[0].children[0].text}
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
                      <p className="_title-4 _white">
                        {data[1].result[0].title}
                      </p>
                      <p className="_white">
                        {data[1].result[0].description[0].children[0].text}
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
                  <Col md={12} lg={6} className="_acCard-col">
                    {data[2].result.map((element, index) => (
                      <Card key={index}>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey={index + ""}
                        >
                          <p className="_title-3">{element.title}</p>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={index + ""}>
                          <Card.Body>
                            {element.body[0].children[0].text}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    ))}
                  </Col>
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
