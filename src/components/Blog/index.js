import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../screens/Homepage/style.css";
import { dateConverter } from "../../utils";

const Blog = ({ data }) => {
  const history = useHistory();
  const sortTop3Blog = data.result.splice(0, 3);
  const _moveToBlogDetails = (selectedItem) => {
    history.push("/blogdetails", { details: selectedItem });
  };

  return (
    <div className="_blogSection _c-padding _bg-white">
      <Container>
        <Row className="">
          <Col md={12} lg={6} className="mx-auto">
            <div className="_titleDiv text-center">
              <h2 className="_title">Our blog</h2>
              <p className="_title_txt">
                Quidam officiis similique sea ei, vel tollit indoctum efficiendi
                ei, at nihil tantas platonem eos.{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="_blogRow">
          {sortTop3Blog.map((element, index) => (
            <Col index={index} md={6} lg={4} className="_blogCol">
              <div className="_blogDiv">
                <p className="_tag">Nutrition</p>
                <figure className="_blogFig">
                  <Image
                    src={require("../../assets/images/dummy-img.jpg")}
                    className="img-fluid"
                  />
                </figure>
                <a
                  className="_blogTitle"
                  onClick={() => _moveToBlogDetails(element)}
                >
                  {element.title}
                </a>
                <ul className="_blogInfo">
                  <li className="_dark-1">Sohani Dey</li>
                  <li>{dateConverter(element.blog_date)}</li>
                </ul>
                {element.blog_body?.map((element, index) => (
                  <p key={index} className="_blogTxt">
                    {element.children[0].text}
                  </p>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Blog;
