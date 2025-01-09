import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Singup.css";

function Signup() {
  const [isSignup, setIsSignup] = useState(true); 

  const handleToggle = () => {
    setIsSignup(!isSignup); 
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-light"
    >
      <Row className="w-100 justify-content-center">
        <div className="mb-4 d-flex align-items-center justify-content-center">
          <Form.Check 
            type="switch"
            id="custom-switch"
            label={isSignup ? "Sign Up" : "Log In"}
            checked={!isSignup}
            onChange={handleToggle}
            className="text-light"
          
          />
        </div>

        <Col xs={12} md={6} lg={4}>
          <Card className="card p-4 text-light">
            <Card.Body>
              <h4 className="text-center mb-4">{isSignup ? "Sign Up" : "Log In"}</h4>
              
              <Form>
              
                {isSignup && (
                  <Form.Group className="mb-3" controlId="signupFullName">
                    <Form.Control
                      type="text"
                      placeholder="Your Full Name"
                      className="bg-dark text-light custom-placeholder no-border"
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-3" controlId="signupEmail">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    className="bg-dark text-light custom-placeholder no-border"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="signupPassword">
                  <Form.Control
                    type="password"
                    placeholder="Your Password"
                    className="bg-dark text-light custom-placeholder no-border"
                  />
                </Form.Group>

                <div className="centered-container">
                  <Button
                    type="submit"
                    className="w-50 custom-button text-primary-emphasis "
                  >
                    {isSignup ? "SUBMIT" : "LogIN"}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
