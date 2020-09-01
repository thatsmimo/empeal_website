import React from "react";
import ReactDOM from 'react-dom';
import { Button, Alert, Container, Row, Col } from 'react-bootstrap';

function Dashboard() {
    return ( 
        <div className="_main">
            {/* Header : Begin */}
            <div className="_header-main">
                <Container>  
                    <Row>
                        <Col>
                            <div className="_logo"><a href="#">Empeal</a></div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
            <div className="_bannerOutter">
                {/* Banner part 1 : Begin */}
                <div className="_banner-top">
                    <Container>  
                        <Row>
                            <Col>
                                <div className="_bannerCont">
                                    <h1 class="_titleLarge">Measure it to Manage it</h1>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
                {/* Banner part 2 : Begin */}
                <div className="_banner-top">
                    <Container>  
                    <h1>HIDJ</h1>
                    </Container>
                </div>
            </div>
            
        </div>        
    );
}

export default Dashboard;