import React from "react";
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
  Accordion,
  Card,
  Table
} 
from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./";
import { Assets } from "../../Common";
import { Header } from '../../components'
import { Footer } from "../../components";

function Pricing() {
  return (
    <div className="_main">
        {/***** Header : Begin ********/}
        {/***** Header : Begin ********/}
      <Header dummyText={"Abcd"}/>

        {/* Story Section */}        
        <div className="_pricingPage _topGap _white-bg">           
            {/* Section : Begin */}      
            <div className="_pricing-sec-1 _c-padding  _pB-0">
              <Container> 
                <Row className="">
                  {/* Col : Begin */}
                  <Col md={10} lg={5} className="">
                    <div class="_titleDiv">
                      <h2 className="_title">Pricing</h2>
                      <p class="_title_txt  _fW-500">Check out the different pricing plans we offer at Empeal and see the unique features across all plans.  </p>
                    </div>
                  </Col>
                  {/* Col : End */}                    
               </Row>                           
              </Container>
              <div className="_l-btm-hill">
                <Image src={Assets.images.rightHill} className="" />
                <span className="_absImg"><Image src={Assets.images.girlCycle} className="" /></span>
              </div> 
            </div> 
            {/* Section : Begin */}      
            <div className="_priceTableSec _c-padding _white-bg _pB-0">
              <Container>
                <div class="_tableOutter">
                  <div className="table-responsive">
                    <Table striped hover className="_table">
                      <thead>
                        <tr>
                          <th>Plans</th>
                          <th className="_title-3">Team Challenge</th>
                          <th className="_title-3">Health Assessment</th>
                          <th className="_title-3">Full Platform</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="_t-subTitle">User Health Profile</td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle">Organization Goal Setting/Revising</td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle">Monthly Challenges</td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle">Integration with Wearables</td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle">Leader-board Reporting</td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle">Employee Engagement Tracking</td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle">Wellness Footprint Reporting</td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle">Nutrition Tracking</td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle">Activity Tracking</td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle">Personalised Protocol Delivery</td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle">User Level Analytics</td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle">Organization Level Analytics</td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle">Image & Voice Recognition</td>
                          <td><span className=""><Image src={Assets.images.wrong} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                          <td><span className=""><Image src={Assets.images.right} className="" /></span></td>
                        </tr>
                        <tr>
                          <td className="_t-subTitle"></td>
                          <td>
                            <p>Customised pricing dependent on number of employees</p>
                            <a href="#" className="btn _btnCustom-2">€1000/m</a>
                          </td>
                          <td>
                            <p>Customised pricing dependent on number of employees</p>
                            <a href="#" className="btn _btnCustom-2 _btn-border-blue">€1500/m</a>
                          </td>
                          <td>
                            <p>Customised pricing dependent on number of employees</p>
                            <a href="#" className="btn _btnCustom-2">€2500/m</a>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>             
              </Container>
            </div>
            {/* Section : Begin */}      
            <div className="_pricingTabSection _footerGraphicBg _c-padding _white-bg">
              <Container> 
                <Row className="">
                    {/* Col : Begin */}
                    <Col md={10} lg={6} className="mx-auto">
                      <div class="_titleDiv text-center">
                        <h2 className="_title">The Cost of doing Nothing</h2>
                        <p class="_title-4">Unmanaged Chronic Health Conditions are wasting <span className="_red">BILLIONS</span></p>
                      </div>
                    </Col>
                    {/* Col : End */}                                        
                </Row>   
                <div className="_tab3Container">                  
                  <Row className="">
                    {/* Col : Begin */}
                    <Col md={12} lg={7} className="mx-auto">
                      <div className="_tab3Outter">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={12}>
                              <div className="_tab3Nav">
                                <Nav variant="pills" className="">
                                  <Nav.Item>
                                    <Nav.Link eventKey="first">Health Insurers</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="second">Corporations</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="third">Health Service</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="forth">Employee</Nav.Link>
                                  </Nav.Item>
                                </Nav>
                              </div>
                            </Col>
                            <Col sm={12}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <div className="_tab3Pane-inner text-center">
                                    <div className="_titleDiv _mB-30">
                                      <p className="_title-3">Cost to Insurers</p>
                                      <p className="_txt">Insurers spend 60% of premiums on preventable chronic conditions arising from socio-behavioral attributes; And this is costing money.</p>
                                    </div>                                   
                                    <div className="text-center">
                                      <a href="#" className="_customBtn-1 btn">Learn More</a>
                                    </div>
                                  </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  <div className="_tab3Pane-inner text-center">
                                    <div className="_titleDiv _mB-30">
                                      <p className="_title-3">Cost to Insurers</p>
                                      <p className="_txt">Insurers spend 60% of premiums on preventable chronic conditions arising from socio-behavioral attributes; And this is costing money.</p>
                                    </div>                                   
                                    <div className="text-center">
                                      <a href="#" className="_customBtn-1 btn">Learn More</a>
                                    </div>
                                  </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                  <div className="_tab3Pane-inner text-center">
                                    <div className="_titleDiv _mB-30">
                                      <p className="_title-3">Cost to Insurers</p>
                                      <p className="_txt">Insurers spend 60% of premiums on preventable chronic conditions arising from socio-behavioral attributes; And this is costing money.</p>
                                    </div>                                   
                                    <div className="text-center">
                                      <a href="#" className="_customBtn-1 btn">Learn More</a>
                                    </div>
                                  </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="forth">
                                  <div className="_tab3Pane-inner text-center">
                                    <div className="_titleDiv _mB-30">
                                      <p className="_title-3">Cost to Insurers</p>
                                      <p className="_txt">Insurers spend 60% of premiums on preventable chronic conditions arising from socio-behavioral attributes; And this is costing money.</p>
                                    </div>                                   
                                    <div className="text-center">
                                      <a href="#" className="_customBtn-1 btn">Learn More</a>
                                    </div>
                                  </div>
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </div>  
                    </Col>
                    {/* Col : End */}                                        
                  </Row>   
                  <div className="_tab3Sideimg">
                    <Image src={Assets.images.manAtDesk} className="" />
                  </div>  
                </div>                                      
              </Container>
            </div>                   
        </div>

        {/* Footer : Begin             */}
        <Footer />
        
    </div>        
);
}

export default Pricing;
