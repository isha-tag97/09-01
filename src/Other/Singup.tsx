import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import './Singup.css';

function Signup() {
  const [isSignup, setIsSignup] = useState(true);
  const [placeholders, setPlaceholders] = useState({
    fullName: "Your Full Name",
    email: "Your Email",
    password: "Your Password",
  });

  const [rotating, setRotating] = useState(false);

  const handleToggle = () => {
    if (!rotating) {
      setRotating(true);
      setTimeout(() => {
        setIsSignup((prev) => !prev);
        setRotating(false);
      }, 1000);
    }
  };

  const handleFocus = (field) => {
    setPlaceholders((prev) => ({ ...prev, [field]: "" }));
  };

  const handleBlur = (field, defaultPlaceholder) => {
    setPlaceholders((prev) => ({
      ...prev,
      [field]: defaultPlaceholder,
    }));
  };

  return (
    <Container
      fluid
      className="  d-flex justify-content-center align-items-center min-vh-100 bg-dark text-light"
    >
      <Row className="w-100 justify-content-center">
        <div className="mb-4 d-flex align-items-center justify-content-center toggle-switch-container">
          <span className={`toggle-option ${isSignup ? "active" : ""}`}>Sign Up</span>
          <div
            className="toggle-switch d-flex align-items-center position-relative"
            onClick={handleToggle}
          >
            <div
              className={`toggle-slider position-absolute ${isSignup ? "off" : "on"}`}
            ></div>
          </div>
          <span className={`toggle-option ${!isSignup ? "active" : ""}`}>Log In</span>
        </div>

        <Col xs={12} md={8} lg={6} xl={4}>
          <Card className={`card p-4 text-light ${rotating ? "rotate-card" : ""}`}>
            <Card.Body>
              <h4 className="text-center text-white-50 mb-4">{isSignup ? "Sign Up" : "Log In"}</h4>

              <Form>
                {isSignup && (
                  <Form.Group className="mb-2" controlId="signupFullName">
                    <InputGroup>
                      <InputGroup.Text className="bg-dark text-light border-0">
                        <FontAwesomeIcon icon={faUser} className="icon" />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        value={placeholders.fullName}
                        onFocus={() => handleFocus("fullName")}
                        onBlur={() => handleBlur("fullName", "Your Full Name")}
                        className="bg-dark text-light border-0"
                      />
                    </InputGroup>
                  </Form.Group>
                )}

                <Form.Group className="mb-2" controlId="signupEmail">
                  <InputGroup>
                    <InputGroup.Text className="bg-dark text-light border-0">
                      <FontAwesomeIcon icon={faAt} className="icon"/>
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      value={placeholders.email}
                      onFocus={() => handleFocus("email")}
                      onBlur={() => handleBlur("email", "Your Email")}
                      className="bg-dark text-light border-0"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="signupPassword">
                  <InputGroup>
                    <InputGroup.Text className="bg-dark text-light border-0">
                      <FontAwesomeIcon icon={faLock} className="icon"/>
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      value={placeholders.password}
                      onFocus={() => handleFocus("password")}
                      onBlur={() => handleBlur("password", "Your Password")}
                      className="bg-dark text-light border-0"
                    />
                  </InputGroup>
                </Form.Group>

                <div className="centered-container mb-3 d-flex justify-content-center align-items-center">
                  <Button
                    type="submit"
                    className="w-50 custom-button text-primary-emphasis custom-shadow-yellow"
                  >
                    {isSignup ? "SUBMIT" : "Login"}
                  </Button>
                </div>

                {!isSignup && (
                  <div className="text-center">
                    <a href="#" className="text-light text-decoration-none">
                      Forgot your password?
                    </a>
                  </div>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
