import React from "react";
import { Button, Alert, Container, Row, Col, Form, ListGroup, Image, Carousel , Nav, Tab} from 'react-bootstrap';
import "./style.css";
import "./";
import { Assets } from "../../Common";

export default function index() {
  return (
    <div className="_main">
            {/* Header : Begin */}
            <div className="_header-main">
                <Container>  
                    <Row>
                        <Col>
                            <div className="_logo">
                              <a href="#">
                                <img src={Assets.images.logo} className="_logo"  />
                                {/* Logo */}
                              </a>
                              </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
            
            {/* Banner : Begin */}
            <div className="_bannerOutter">
                {/* Banner part 1 : Begin */}
                <div className="_banner-top _c-padding">
                    <Container>  
                        <Row>
                            <Col xs={12} md={6} >
                                <div className="_bannerCont">
                                    <div className="_titleDiv">
                                      <p className="_topTag"><span className="_trophyIcon"><Image src={Assets.images.trophy1} className="" />  </span> Award Winning Company</p>
                                      <h1 className="_titleLarge">Measure it <br/>to Manage it</h1>
                                      <p className="_titleTxt">Join hundreds of users on Empeal App, a simple to use, one stop digital health solution, to improve your health and increase productivity.</p>
                                    </div>   
                                    <Form className="_bannerMail-form">
                                      <Form.Group>
                                        <Form.Control type="email" placeholder="Email" />   
                                      </Form.Group>   
                                      <Button type="submit" className="_btn">Schedule a Demo</Button>                                  
                                    </Form> 
                                    <div className="_b-btns">
                                      <a href="#" className="_appBtn"><span><Image src={Assets.images.appStrore} className="" /></span> App Store</a>
                                      <a href="#" className="_appBtn"><span><Image src={Assets.images.googlePlay} className="" /></span> Google Play</a>
                                    </div> 
                                    <div className="_womanImg">
                                      <Image src={Assets.images.woman} className="" />  
                                    </div>                               
                                </div>
                            </Col>
                            {/* <Col xs={12} md={6}>
                              <div className="_bannerRight">

                              </div>
                            </Col> */}
                        </Row>
                    </Container>
                    <div className="_bannerRight">
                      <Image src={Assets.images.mobile} className="" />         
                    </div>
                </div>
                {/* Banner part 2 : Begin */}
                <div className="_banner-bottom _c-padding">
                    <Container>  
                      <Row className="_aI-center">
                        <Col  xs={12} md={6} lg={5}>
                          <div className="_bannerSliderCont">
                          <Carousel className="_mobScreenSlider">
                              <Carousel.Item>
                                <img
                                  className="d-block"
                                  src={Assets.images.screenImg1}
                                  alt="First slide"
                                />                               
                              </Carousel.Item>  
                              <Carousel.Item>
                                <img
                                  className="d-blocK"
                                  src={Assets.images.screenImg1}
                                  alt="First slide"
                                />                               
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  className="d-block"
                                  src={Assets.images.screenImg1}
                                  alt="First slide"
                                />                               
                              </Carousel.Item>                          
                            </Carousel>
                          </div>
                        </Col>
                        <Col  xs={12} md={6} lg={7}>
                          <div className="_bannerRigthTextBlock">
                              <div class="_titleDiv">
                                <h2 className="_title">What does Empeal Do?</h2>
                              </div>
                          
                              <ListGroup className="_customListGrp-1">
                                <ListGroup.Item>
                                  <span className="_iconHolder">
                                    <Image src={Assets.images.foodIcon} className="_iconImg" />
                                  </span>
                                  <div className="_listCont">
                                    <p className="_title-4">Health Risk Assessment</p>
                                    <p>Empeal app delivers proprietary as well as customisable assessments remotely to give 360° view of health and wellbeing</p>
                                  </div>                               
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <span className="_iconHolder">
                                    <Image src={Assets.images.foodIcon} className="_iconImg" />
                                  </span>
                                  <div className="_listCont">
                                    <p className="_title-4">Personalised Health Programmes</p>
                                    <p>Empeal’s innovation gives users access to group and individual customised health and wellbeing programmes, anytime, anywhere, while gamifying the process! </p>
                                  </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <span className="_iconHolder">
                                    <Image src={Assets.images.foodIcon} className="_iconImg" />
                                  </span>
                                  <div className="_listCont">
                                    <p className="_title-4">Remote Monitoring</p>
                                    <p>Integrated with wearables and other technologies, Empeal helps users measure and manage their progress with full data protection.</p>
                                  </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <span className="_iconHolder">
                                    <Image src={Assets.images.foodIcon} className="_iconImg" />
                                  </span>
                                  <div className="_listCont">
                                    <p className="_title-4">Health Footprint Analysis</p>
                                    <p>Empeal analytics help in identifying trends and root causes for health and wellbeing issues, making it easier to address. Measure it, to manage it!</p>
                                  </div>
                                </ListGroup.Item>                              
                              </ListGroup>
                          </div>
                        </Col>
                      </Row>                     
                    </Container>
                </div>
            </div>
            
            {/* About Company : Begin */}
            <div className="_aboutCompany _c-padding">
              <Container>
                <Row className="_abtRow">
                  <Col xs={12} md={8}>
                      <div className="_abtBlock">
                          <span class="_awIcon"><Image src={Assets.images.trophy1} className="" /></span>
                          <div class="_titleDiv">
                            <h2 className="_title">An Award Winning Company</h2>
                            <p>In 2019 Empeal won an award for Business Excellence  CSR. We were  thrilled with this. In 2019 Empeal won an award for Business Excellence & CSR. We were  thrilled with this. In 2019 Empeal won an award for Business Excellence & CSR. </p>
                          </div>
                      </div>
                  </Col>                  
                  <Col xs={12} md={4}>
                    <div class="_compAwards">
                      <Row>
                        <Col xs={12} md={6}>
                          <div className="_awardImgDiv"><Image src={require('../../assets/images/company-award-1.png')} className="" /></div>
                        </Col>                        
                        <Col xs={12} md={6}>
                          <div className="_awardImgDiv"><Image src={require('../../assets/images/company-award-1.png')} className="" /></div>
                        </Col> 
                      </Row>
                    </div>                    
                  </Col>
                </Row>                
              </Container>
            </div>    

            {/* About You : Begin */}
            <div className="_aboutYouSection _c-padding _deepBlue-bg">
              <div className="_aboutMainDiv">
                <Container>
                  <Row className="">
                    <Col xs={12} md={8} className="mx-auto">
                      <div class="_titleDiv text-center">
                        <h2 className="_title _white">Tell us about you… </h2>
                        <p className="_white">We create bespoke, personalised health plans for groups and individuals, which benefits  organisations, insurance and EAP providers as well as health services.</p>
                      </div>                    
                    </Col> 
                    <Col md={12}>
                        <div className="text-center _titleDiv">
                          <p className="_title-3 _white">What best describes your position?</p>
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
                          <div className="_fCol">
                            <Form.Group controlId="formBasicCheckbox">
                              <label className="_fLabel">
                                <input type="radio" name="position" />
                                <span className="_fSpan">
                                    <span className="_checkDiv">
                                      <span className="_checkDiv-tick"></span>
                                      <span className="_checkDiv-icon"><Image src={require('../../assets/images/Health_icon_red.png')} className="" /></span>
                                      <span className="_checkDiv-txt">Health Service</span>
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
                                <input type="radio" name="position" />
                                <span className="_fSpan">
                                    <span className="_checkDiv">
                                      <span className="_checkDiv-tick"></span>
                                      <span className="_checkDiv-icon"><Image src={require('../../assets/images/np-building.png')} className="" /></span>
                                      <span className="_checkDiv-txt">Organisation</span>
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
                                <input type="radio" name="position" />
                                <span className="_fSpan">
                                    <span className="_checkDiv">
                                      <span className="_checkDiv-tick"></span>
                                      <span className="_checkDiv-icon"><Image src={require('../../assets/images/np_employee.png')} className="" /></span>
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
                                <input type="radio" name="position" />
                                <span className="_fSpan">
                                    <span className="_checkDiv">
                                      <span className="_checkDiv-tick"></span>
                                      <span className="_checkDiv-icon"><Image src={require('../../assets/images/np_human-resources.png')} className="" /></span>
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
                                <input type="radio" name="position" />
                                <span className="_fSpan">
                                    <span className="_checkDiv">
                                      <span className="_checkDiv-tick"></span>
                                      <span className="_checkDiv-icon"><Image src={require('../../assets/images/np_health-insurance.png')} className="" /></span>
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
                          <Button  type="submit" className="_customBtn-1 ">
                            Next
                          </Button>
                        </div>                  
                        
                      </Form> 
                      {/* Form Ends */}          
                    </div>
                  </div>       
                </Container>
              </div>
              
              {/* Hill */}
              <div className="_hillDiv">
                <Image src={Assets.images.hill} className="" />
              </div>
            </div>             

            {/* Your Story : Begin */}
            <div className="_yourStory _c-padding">
              <Container>
                <Row className="_abtRow">
                  <Col md={12} lg={8} className="mx-auto">
                    <div class="_titleDiv text-center">
                      <h2 className="_title _blue-1">We Know Your Story...</h2>
                      <p>Our measurable metrics based on medical, nutrition, lifestyle, behaviour and individual goals data, help users and organisations understand their health footprint and act on it.</p>
                    </div>
                  </Col>
                </Row>
                <Tab.Container defaultActiveKey="first" className="_storyTab">
                  <Row className="_abtRow">
                    <Col xs={12} md={4} lg={3}>
                        <div className="_navPill-outter">
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="first">
                                <div className="_navDiv">
                                  <p className="_txt">Employee</p>
                                  <span className="_navIcon"><Image src={require('../../assets/images/np_employee.png')} className="" /></span>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">
                                <div className="_navDiv">
                                  <p className="_txt">Organisation</p>
                                  <span className="_navIcon"><Image src={require('../../assets/images/np-building.png')} className="" /></span>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">
                                <div className="_navDiv">
                                  <p className="_txt">Health Service</p>
                                  <span className="_navIcon"><Image src={require('../../assets/images/Health_icon_red.png')} className="" /></span>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="forth">
                                <div className="_navDiv">
                                  <p className="_txt">HR</p>
                                  <span className="_navIcon"><Image src={require('../../assets/images/np_human-resources.png')} className="" /></span>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="fifth">
                                <div className="_navDiv">
                                  <p className="_txt">Insurance</p>
                                  <span className="_navIcon"><Image src={require('../../assets/images/np_health-insurance.png')} className="" /></span>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>                          
                        </div>
                    </Col>                  
                    <Col xs={12} md={8} lg={9}>
                      <div class="_tabCont-outter">
                        <Tab.Content>
                          {/* Tab Pane : Begin  */}
                          <Tab.Pane eventKey="first">
                            <div className="_paneInner">
                              <Row className="_paneInner-row">
                                <Col md={6}>
                                  <figure className="_tabFig">
                                    <Image src={require('../../assets/images/tab-img-1.jpg')} className="img-fluid" />
                                  </figure>
                                </Col>
                                <Col md={6}>
                                  <div className="_content">
                                    <p>Employee</p>
                                    <h2 class="_title">John Doe</h2>
                                    <p>Jane is a customer support team leader. Jane’s responsibilities are overseeing technical systems, handling employee relations, ensuring compliance with regulations, managing staff engagement, assessing staff needs, hiring and developing each team member to the best potential. </p>
                                    <p><strong>Jane always feels tired</strong> and confident she could do better if <strong>there was a way</strong> to <strong>balance her life better</strong>. </p>
                                    <a href="#" className="btn _btnCustom-2">Full Story</a>
                                  </div>
                                </Col>
                              </Row>
                            </div>                            
                          </Tab.Pane>
                          {/* Tab Pane : Begin  */}
                          <Tab.Pane eventKey="second">
                            <div className="_paneInner">
                              <Row className="_paneInner-row">
                                <Col md={6}>
                                  <figure className="_tabFig">
                                    <Image src={require('../../assets/images/tab-img-1.jpg')} className="img-fluid" />
                                  </figure>
                                </Col>
                                <Col md={6}>
                                  <div className="_content">
                                    <p>Organisation</p>
                                    <h2 class="_title">John Doe</h2>
                                    <p>Jane is a customer support team leader. Jane’s responsibilities are overseeing technical systems, handling employee relations, ensuring compliance with regulations, managing staff engagement, assessing staff needs, hiring and developing each team member to the best potential. </p>
                                    <p><strong>Jane always feels tired</strong> and confident she could do better if <strong>there was a way</strong> to <strong>balance her life better</strong>. </p>
                                    <a href="#" className="btn _btnCustom-2">Full Story</a>
                                  </div>
                                </Col>
                              </Row>
                            </div>                            
                          </Tab.Pane>
                          {/* Tab Pane : Begin  */}
                          <Tab.Pane eventKey="third">
                            <div className="_paneInner">
                              <Row className="_paneInner-row">
                                <Col md={6}>
                                  <figure className="_tabFig">
                                    <Image src={require('../../assets/images/tab-img-1.jpg')} className="img-fluid" />
                                  </figure>
                                </Col>
                                <Col md={6}>
                                  <div className="_content">
                                    <p>Health Service</p>
                                    <h2 class="_title">John Doe</h2>
                                    <p>Jane is a customer support team leader. Jane’s responsibilities are overseeing technical systems, handling employee relations, ensuring compliance with regulations, managing staff engagement, assessing staff needs, hiring and developing each team member to the best potential. </p>
                                    <p><strong>Jane always feels tired</strong> and confident she could do better if <strong>there was a way</strong> to <strong>balance her life better</strong>. </p>
                                    <a href="#" className="btn _btnCustom-2">Full Story</a>
                                  </div>
                                </Col>
                              </Row>
                            </div>                            
                          </Tab.Pane>
                          {/* Tab Pane : Begin  */}
                          <Tab.Pane eventKey="forth">
                            <div className="_paneInner">
                              <Row className="_paneInner-row">
                                <Col md={6}>
                                  <figure className="_tabFig">
                                    <Image src={require('../../assets/images/tab-img-1.jpg')} className="img-fluid" />
                                  </figure>
                                </Col>
                                <Col md={6}>
                                  <div className="_content">
                                    <p>HR</p>
                                    <h2 class="_title">John Doe</h2>
                                    <p>Jane is a customer support team leader. Jane’s responsibilities are overseeing technical systems, handling employee relations, ensuring compliance with regulations, managing staff engagement, assessing staff needs, hiring and developing each team member to the best potential. </p>
                                    <p><strong>Jane always feels tired</strong> and confident she could do better if <strong>there was a way</strong> to <strong>balance her life better</strong>. </p>
                                    <a href="#" className="btn _btnCustom-2">Full Story</a>
                                  </div>
                                </Col>
                              </Row>
                            </div>                            
                          </Tab.Pane>
                          {/* Tab Pane : Begin  */}
                          <Tab.Pane eventKey="fifth">
                            <div className="_paneInner">
                              <Row className="_paneInner-row">
                                <Col md={6}>
                                  <figure className="_tabFig">
                                    <Image src={require('../../assets/images/tab-img-1.jpg')} className="img-fluid" />
                                  </figure>
                                </Col>
                                <Col md={6}>
                                  <div className="_content">
                                    <p>Employee</p>
                                    <h2 class="_title">John Doe</h2>
                                    <p>Jane is a customer support team leader. Jane’s responsibilities are overseeing technical systems, handling employee relations, ensuring compliance with regulations, managing staff engagement, assessing staff needs, hiring and developing each team member to the best potential. </p>
                                    <p><strong>Jane always feels tired</strong> and confident she could do better if <strong>there was a way</strong> to <strong>balance her life better</strong>. </p>
                                    <a href="#" className="btn _btnCustom-2">Full Story</a>
                                  </div>
                                </Col>
                              </Row>
                            </div>                            
                          </Tab.Pane>
                        </Tab.Content>
                      </div>                    
                    </Col>
                  </Row>   
                  </Tab.Container>             
              </Container>
            </div>  

            {/* Helth Management Section : Begin */}
            <div className="_helthM-cont _deepBlue-bg _c-padding">
              <Container>
                <Row className="_abtRow">
                  <Col md={12} lg={8}>
                      <div className="_h-textBlock">
                          <span class="_numCircle">85%</span>
                          <div class="_titleDiv _mB-0">
                            <h2 className="_title _white">of Corporates say…</h2>
                            <p class="_title-4 _white _fW-400">…they have no scientiﬁc way of designing and implementing <span className="_yellow">Employee Health Management</span>, neither do they have any way of tracking data……</p>
                          </div>
                      </div>
                  </Col>  
                </Row>                
              </Container>
            </div>   


        </div>    
  );
}
