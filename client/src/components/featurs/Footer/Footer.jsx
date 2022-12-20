import "./Footer.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py-3">
            copyright &copy; Proshop
          </Col>
        </Row>
      </Container>

    </footer>
  );
};

export default Footer;
