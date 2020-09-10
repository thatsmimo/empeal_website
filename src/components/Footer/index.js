import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Alert,
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  Image,
  Carousel,
  Nav,
  Tab,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "../../App.css";
import { Assets } from "../../Common";

const Footer = () => {
  return (
    <footer className="_footer">
        <div className="_footerMain">
          <Container>
            <Row className="_fm-row">
              <Col md={12} lg={4}>
                <div className="_f-logo">
                  <a href="#">
                    <img src={Assets.images.logo} className="_logo" />
                  </a>
                  <p>
                    Wind of Change Total Wellbeing Solutions Ltd. <br />
                    Dogpatch Labs The CHQ Building, Custom House Quay, Dublin 1
                  </p>
                </div>
                <p>
                  <a href="#" className="_dark-1">
                    <strong>+353-879945928 (Ireland) </strong>
                  </a>
                  <br />
                  <a href="#" className="_dark-1">
                    <strong>+91-9836179466 (India)</strong>
                  </a>
                </p>
                <p>
                  <a href="#" className="_dark-1">
                    <strong>info@empeal.com</strong>
                  </a>
                  <br />
                </p>
              </Col>
              <Col md={12} lg={8}>
                <Row>
                  <Col md={4} lg={4}>
                    <h3 className="_title-3">Services</h3>
                    <ul className="_f-lists">
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Social Media</a>
                      </li>
                      <li>
                        <a href="#">Develop</a>
                      </li>
                    </ul>
                  </Col>
                  <Col md={4} lg={4}>
                    <h3 className="_title-3">Information</h3>
                    <ul className="_f-lists">
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                    </ul>
                  </Col>
                  <Col md={4} lg={4}>
                    <h3 className="_title-3">Contact Us</h3>
                    <ul className="_f-lists">
                      <li>
                        <a href="#">Write to Us</a>
                      </li>
                      <li>
                        <a href="#">Call to Us</a>
                      </li>
                      <li>
                        <a href="#">Information</a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="_footerBtm">
          <Container>
            <Row className="_aI-center">
              <Col md={6} lg={6}>
                <div className="">
                  <p className="_white">© Copyright 2020 Empeal</p>
                </div>
              </Col>
              <Col md={6} lg={6}>
                <ul className="_socialLinks">
                  <li>
                    <a href="#">
                      <Image
                        src={require("../../assets/images/facebook.png")}
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src={require("../../assets/images/twitter.png")}
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src={require("../../assets/images/instagram.png")}
                        className="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
  );
};

export default Footer;
