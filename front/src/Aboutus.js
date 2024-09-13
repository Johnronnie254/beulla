import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import vision from './vision.avif';
import mission from './mission.avif';
import values from './values.avif';
import './Aboutus.css'; // Add this for custom styling
import gal12 from './gal12.jpg'

function Aboutus() {
  return (
    <div style={{ backgroundColor: 'white', color: '#000', padding: '40px 0' }}>
      <Container>
        {/* Company Overview Section */}
        <Row className="align-items-center" style={{ marginBottom: '40px' }}>
          <Col md={6}>
            <h2 className="section-title">Get to Know Us</h2>
            <p className="section-description">
              At Beullah Limited, we are dedicated to providing top-tier event management, sound and stage setup, DJ services, and creative solutions for all occasions. Our passion for excellence ensures that every event we handle is a memorable success. We take pride in working with diverse clients, delivering personalized services that cater to their unique needs. Your success is our priority.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={gal12}
              alt="Company Overview"
              className="overview-img"
            />
          </Col>
        </Row>

        {/* Vision, Mission, and Values Carousel */}
        <Row style={{ marginTop: '60px' }}>
          <Col>
            <h2 className="section-title text-center">Our Vision, Mission, and Values</h2>
            <Carousel>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6}>
                    <img
                      src={values}
                      alt="Our Values"
                      className="carousel-img"
                    />
                  </Col>
                  <Col md={6} className="text-content">
                    <h3 className="text-title">Our Values</h3>
                    <p className="text-description">Commitment, Professionalism & Integrity</p>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6}>
                    <img
                      src={mission}
                      alt="Mission"
                      className="carousel-img"
                    />
                  </Col>
                  <Col md={6} className="text-content">
                    <h3 className="text-title">Our Mission</h3>
                    <p className="text-description">To consistently offer high quality event equipment and services to exceed our client expectations.</p>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6}>
                    <img
                      src={vision}
                      alt="Vision"
                      className="carousel-img"
                    />
                  </Col>
                  <Col md={6} className="text-content">
                    <h3 className="text-title">Our Vision</h3>
                    <p className="text-description">To be the regional audio-visual and broadcasting solutions provider of choice.</p>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutus;
