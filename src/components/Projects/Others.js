import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom"; // For back navigation

// Sample other images (replace with actual images)
import otherImage1 from "../../Assets/Projects/Others/phone.png"; 

import ProjectCard from "./ProjectCards"; // Import ProjectCard

function Others() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Function to show the selected image in full-screen
  const handleShow = (image) => {
    setSelectedImage(image); // Set the selected image for the modal
    setShow(true); // Show the modal
  };

  // Function to close the modal
  const handleClose = () => {
    setShow(false); // Close the modal
  };

  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">
        Other Designs <strong className="purple">Gallery</strong>
      </h1>
      <Button variant="secondary" as={Link} to="/projectsgraphic" style={{ marginBottom: "20px" }}>
        Back to Projects
      </Button>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {/* Use ProjectCard for each image */}
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={otherImage1}
            title="3d phone art"
            // description="Click to view full image."
            onClick={() => handleShow(otherImage1)}
            showButton={true}
          />
        </Col>
        
      </Row>

      {/* Fullscreen Modal for Image */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
        style={{
          maxWidth: "100%",
          width: "100%",
          height: "100%",
          padding: 0,
          // backgroundColor: "", // Background color to make it feel immersive
        }}
      >
        <Modal.Body
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh", // Fullscreen height
          }}
        >
          <Image
            src={selectedImage}
            fluid
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",  // Ensures the image fits without distortion
              padding: "20px" ,
            }}
          />
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "none", backgroundColor: "transparent" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Others;
