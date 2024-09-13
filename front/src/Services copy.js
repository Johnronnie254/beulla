import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';
import { FaBroadcastTower, FaChalkboardTeacher, FaCogs } from 'react-icons/fa';

function Services() {
  return (
    <div style={{ backgroundColor: '#002b45', color: '#ffffff', padding: '40px 0' }}>
      <Container>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '40px', textAlign: 'center' }}>
          Our Services
        </h2>

        <Row>
          <Col md={4} className="text-center">
            <FaBroadcastTower style={{ fontSize: '3rem', color: '#ffcc00', marginBottom: '20px' }} />
            <h3 style={{ color: '#ffffff', marginBottom: '20px' }}>Audio-Visual Solutions</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              From audio systems to visual displays, we provide state-of-the-art audio-visual services that ensure flawless technical execution for your events.
            </p>
          </Col>

          <Col md={4} className="text-center">
            <FaChalkboardTeacher style={{ fontSize: '3rem', color: '#ffcc00', marginBottom: '20px' }} />
            <h3 style={{ color: '#ffffff', marginBottom: '20px' }}>Consultation Services</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              We offer expert consultation on event planning, technology integration, and innovative solutions to meet all your event needs.
            </p>
          </Col>

          <Col md={4} className="text-center">
            <FaCogs style={{ fontSize: '3rem', color: '#ffcc00', marginBottom: '20px' }} />
            <h3 style={{ color: '#ffffff', marginBottom: '20px' }}>Event Management</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Our team handles every detail of event management, from logistics and coordination to on-site execution, ensuring a seamless and successful event.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Services;
