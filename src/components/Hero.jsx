import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero-left">
      <img src="/profile.jpg" alt="Naveenkumar Varadharaj" className="hero-image" />
    </div>
    <div className="hero-right" data-aos="fade-left">
      <h1>Naveenkumar V</h1>
      <h2>ERP Techno-Functional Specialist</h2>
      <p>
        I’m a dedicated ERP specialist with hands-on experience in Datatex and WFX ERP systems,
        focused on driving digital transformation through business process optimization and IT enablement.
      </p>
      <div className="hero-buttons">
        <a href="/resume.pdf" download className="btn">Download Resume</a>
        <a href="tel:+919943584370" className="icon"><FaPhone /></a>
        <a href="mailto:vnaveenkumar0802@gmail.com" className="icon"><FaEnvelope /></a>
        <a href="https://wa.me/919943584370" className="icon" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
      </div>
    </div>
  </section>
);

export default Hero;
