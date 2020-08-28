import React from "react";
import { Button, Container, Row } from "react-bootstrap";

function Login() {
  return (
    <div>
      <Container>
        <Row>
          <input className="text-box" placeholder="jaskd" />
          <Button className="new-btn" variant="primary">
            Primary
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
