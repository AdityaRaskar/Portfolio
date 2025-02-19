import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import uni from "../../Assets/Projects/Techprojects/uni.png"
import leaf from "../../Assets/Projects/Techprojects/leaf.png";
import pwd from "../../Assets/Projects/Techprojects/pwd.png";
import bus from "../../Assets/Projects/Techprojects/bus.png";
function ProjectsTech() {

  return (

    <Container fluid className="project-section">
    <Particle />
    <Container>
      
      <h1 className="project-heading">
        My Recent <strong className="purple">Tech projects </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few projects I've worked on recently.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={uni}
            isBlog={false}
            title="University Infrastructure Management"
            description="A comprehensive system that manages university infrastructure, from equipment tracking and maintenance to handling fault reports and resolutions."
            ghLink="https://github.com/AdityaRaskar/University-Infrastructure-Management"
            showGithub={true}
            // demoLink=""
          />
        </Col>

   
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={leaf}
            isBlog={false}
            showGithub={true}
            title="Plant AI"
            description="A system for detecting plant diseases through image analysis of plant leaves, enabling early diagnosis and treatment."
            ghLink="https://github.com/AdityaRaskar/AI-project"
            // demoLink=""
          />
        </Col>

   
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={pwd}
            isBlog={false}
            showGithub={true}
            title="Random Password Generator"
            description="A React.js-based random password generator that creates secure, customizable passwords with various characters and lengths."
            ghLink="https://github.com/AdityaRaskar/Random-Password-Generator"
            // demoLink=""
          />
        </Col>
   
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={bus}
            isBlog={false}
            showGithub={true}
            title="Bus ticket booking"
            description="A DBMS-based bus ticket booking system that manages bus schedules, seat availability, user bookings, and payment processing efficiently."
            ghLink="https://github.com/AdityaRaskar/DBMS-project"
            // demoLink=""
          />
        </Col>

      </Row>
    </Container>
  </Container>
  );
}

export default ProjectsTech;
