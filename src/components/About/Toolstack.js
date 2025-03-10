import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows,
  SiLinux,
  SiPycharm,
  SiAdobephotoshop,
  SiCanva,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
    </Row>
  );
}

export default Toolstack;
