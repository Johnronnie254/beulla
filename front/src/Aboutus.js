import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

function Aboutus() {
  return (
    <div style={{ backgroundColor: 'white', color: '#000', padding: '40px 0' }}>
      <Container>
        {/* Company Overview Section */}
        <Row className="align-items-center" style={{ marginBottom: '40px' }}>
          <Col md={6}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#000', marginBottom: '20px' }}>
              Get to Know Us
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px' }}>
              At Beullah Limited, we are dedicated to providing top-tier event management, sound and stage setup, DJ services, and creative solutions for all occasions. Our passion for excellence ensures that every event we handle is a memorable success. We take pride in working with diverse clients, delivering personalized services that cater to their unique needs. Your success is our priority.
            </p>
          </Col>
          <Col md={6}>
            <img
              src='https://images.unsplash.com/photo-1521472709501-280327085513?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Company Overview'
              style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            />
          </Col>
        </Row>

        {/* Vision, Mission, and Values Carousel */}
        <Row style={{ marginTop: '60px' }}>
          <Col>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#000', marginBottom: '20px', textAlign: 'center' }}>
              Our Vision, Mission, and Values
            </h2>
            <Carousel>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6}>
                    <img
                      src='https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='Our Values'
                      style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                  </Col>
                  <Col md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px' }}>Our Values</h3>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Commitment, Professionalism & Integrity</p>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6}>
                    <img
                      src='https://images.unsplash.com/photo-1521472709501-280327085513?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='Mission'
                      style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                  </Col>
                  <Col md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px' }}>Our Mission</h3>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>To consistently offer high quality event equipment and services to exceed our client expectations.</p>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col md={6}>
                    <img
                      src='https://images.unsplash.com/photo-1521472709501-280327085513?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='Vision'
                      style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                  </Col>
                  <Col md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px' }}>Our Vision</h3>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>To be the regional audio-visual and broadcasting solutions provider of choice.</p>
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
