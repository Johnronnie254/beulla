import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contactus() {
    return (
        <div style={{ backgroundColor: 'white', padding: '30px 20px', color: '#000', height: '300px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: 'Arial', textAlign: 'center', marginBottom: '20px' }}>
                Contact Us
            </h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <p style={{ marginBottom: '10px' }}><FontAwesomeIcon icon={faPhone} /> Tel: +254708403511 / +254100206709</p>
                <p style={{ marginBottom: '10px' }}><FontAwesomeIcon icon={faEnvelope} /> Email: beullahlimited@gmail.com</p>
            </div>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <a href="https://facebook.com" style={{ color: '#000' }}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="https://instagram.com" style={{ color: '#000' }}><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a href="https://tiktok.com" style={{ color: '#000' }}><FontAwesomeIcon icon={faTiktok} size="2x" /></a>
            </div>
        </div>
    );
}
