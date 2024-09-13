import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <Container>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>About Us</h4>
            <p style={styles.footerText}>
              At Beullah Limited, your success is our priority.
            </p>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Find Us</h4>
            <p style={styles.footerText}>
              Tel: +254100206709<br />
              Tel: +254708403511<br />
              Email: beullahlimited@gmail.com
            </p>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <ul style={styles.footerLinks}>
              <li><Link to="/" style={styles.footerLink}>Home</Link></li>
              <li><Link to="/services" style={styles.footerLink}>Our Services</Link></li>
              <li><Link to="/aboutus" style={styles.footerLink}>About Us</Link></li>
              <li><Link to="/contactus" style={styles.footerLink}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p style={styles.footerBottomText}>
            &copy; {new Date().getFullYear()} Beullah Limited. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

// Inline styles
const styles = {
  footer: {
    backgroundColor: '#b3d9ff', // Light blue color
    color: '#003366', // Dark blue color for text
    padding: '40px 0',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  footerSection: {
    flex: '1 1 300px',
    margin: '0 20px',
  },
  footerTitle: {
    fontSize: '20px',
    marginBottom: '20px',
    textDecoration: 'underline',
    textDecorationColor: 'rgb(209, 41, 41)',
    textDecorationSkip: '4px',
    textDecorationThickness: '3px',
    textUnderlineOffset: '4px'
  },
  footerText: {
    fontSize: '16px',
    lineHeight: '1.6',
  },
  footerLinks: {
    listStyleType: 'none',
    padding: '0',
  },
  footerLink: {
    color: '#003366', // Dark blue color for links
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    fontSize: '16px',
  },
  footerLinkHover: {
    textDecoration: 'underline',
  },
  footerBottom: {
    borderTop: '1px solid #444',
    paddingTop: '10px',
    textAlign: 'center',
  },
  footerBottomText: {
    fontSize: '14px',
  },
};
