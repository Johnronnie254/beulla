import React from 'react';
import Footer from './Footer';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Gallery from './Gallery';

// Main Home component
function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div 
        className='hero-container-main' 
        style={styles.heroContainer}
      >
        <section style={styles.heroSection}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={styles.heroTitle}>BEULLAH LIMITED</h1>
            <p style={styles.heroSubtitle}>Your success is our priority.</p>
            <button style={styles.heroButton}>Learn More</button>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section id="services" style={styles.cardSection}>
        <h2 style={styles.sectionTitle}>Our Featured Services</h2>
        <div style={styles.cardContainer}>
          {services.map((service, index) => (
            <div key={index} style={styles.card}>
              <img src={service.image} alt={service.title} style={styles.cardImage} />
              <div style={styles.cardBody}>
                <p style={styles.cardTitle}>{service.title}</p>
                <p style={styles.cardText}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="aboutus">
        <Aboutus />
      </section>

      {/* Clients Section */}
      <div style={{ background: '#f4f4f9', padding: '60px 0' }}>
        <section style={styles.clientsSection}>
          <h2 style={styles.sectionTitle}>Our Clients</h2>
          <div style={styles.clientsContainer}>
            {clients.map((client, index) => (
              <div key={index} style={styles.clientLogo}>
                <img src={client.logo} alt={client.name} style={styles.logoImage} />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Gallery Section */}
      <section id="gallery" style={{ backgroundColor: '#fff', padding: '60px 0' }}>
        <Gallery />
      </section>

      {/* Contact Us Section */}
      <section id="contactus">
        <Contactus />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    maxWidth: '100%',
    color: '#333',
  },
  heroContainer: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1665342459344-a762784e8c9a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    color: 'white',
  },
  heroSection: {
    textAlign: 'center',
    padding: '50px',
    background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  heroTitle: {
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: '0',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    lineHeight: '1.2',
  },
  heroSubtitle: {
    fontSize: '1.8rem',
    marginTop: '10px',
    marginBottom: '30px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  heroButton: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    backgroundColor: '#002b45',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  cardSection: {
    margin: '20px 0 120px 0',
    padding: '60px 0',
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '0 0 50px',
    textAlign: 'center',
    color: '#002b45',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
  },
  card: {
    width: '300px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '20px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#002b45',
  },
  cardText: {
    fontSize: '16px',
    color: '#666',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
  },
  clientsSection: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '80%',
    margin: '0 auto',
  },
  clientsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '30px',
  },
  clientLogo: {
    flex: '1 1 150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  logoImage: {
    maxWidth: '150px',
    height: 'auto',
    transition: 'transform 0.3s ease',
  },
};

// Sample data
const services = [
  {
    title: 'Sound and Stage',
    image: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?q=80&w=1516',
    description: 'Professional sound and stage setup for events.',
  },
  {
    title: 'DJ Services',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1470',
    description: 'Expert DJ services for any occasion.',
  },
  {
    title: 'Events and Management',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470',
    description: 'Comprehensive event planning and management.',
  },
];

const clients = [
  {
    name: 'Africa Nazarene University',
    logo: 'https://www.anu.ac.ke/wp-content/uploads/2023/04/ANU-logo.png',
  },
  {
    name: 'IEBC Kenya',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRplQ3ayfTunnAVGGkkOZjRaRe79wb6FiJLA&s',
  },
  {
    name: 'Panalpina',
    logo: 'https://www.neoops.com/wp-content/uploads/2020/05/logo-panalpina.png',
  },
  {
    name: 'Trace Urban',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Traceurban2022.png',
  },
  {
    name: 'St Paul University',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_fwUtYTo9dczNbspZvyzx-Di-CRriPzsFNQ&s',
  },
  {
    name: 'KEMI',
    logo: 'https://kemi.jiunge.com/storage/uploads/admins/16433558367733508101.png',
  },
];

export default Home;
