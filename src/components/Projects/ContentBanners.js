import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom"; // For back navigation

// Sample banner images (replace with actual images)
import banner1 from "../../Assets/Projects/ContentBanners/snaxmaxx.png"; 

import ProjectCard from "./ProjectCards"; // Import ProjectCard

function ContentBanners() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">
        Channel Banners <strong className="purple">Gallery</strong>
      </h1>
      <Button variant="secondary" as={Link} to="/projectsgraphic" style={{ marginBottom: "20px" }}>
        Back to Projects
      </Button>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {/* Use ProjectCard for each image */}
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={banner1}
            title="Snaxmaxx"
            // description="Click to view full image."
            onClick={() => handleShow(banner1)}
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

export default ContentBanners;
