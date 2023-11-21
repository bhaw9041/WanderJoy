import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/about.css';
import hyperlapse from '../assets/images/hyperlapse.mp4';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import customIcon from '../assets/images/icons8-location-48.png';

import londonImg from '../assets/images/tour-img01.jpg';
import baliImg from '../assets/images/tour-img02.jpg';
import dubaiImg from '../assets/images/tour-img07.jpg';
import newyorkImg from '../assets/images/tour-img04.jpg';
import delhiImg from '../assets/images/tour-img03.jpg';
import parisImg from '../assets/images/tour-img05.jpg';
import sudanImg from '../assets/images/gallery-01.jpg';
import yemenImg from '../assets/images/gallery-02.jpg';
import turkeyImg from '../assets/images/gallery-03.jpg';
import vietnamImg from '../assets/images/gallery-04.jpg';
import russiaImg from '../assets/images/gallery-05.jpg';
import moroccoImg from '../assets/images/gallery-06.jpg';


const myIcon = new Icon({
  iconUrl: customIcon,
  iconSize: [25, 25],
});


const About = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const places = [
    { name: 'London', details:'London is the capital and largest city of England and the United Kingdom, located on the River Thames.', lat: 51.5074, lng: -0.1278, url: londonImg},
    { name: 'Bali',details:'Bali is a province of Indonesia known for its beautiful beaches, vibrant culture, and lush landscapes.', lat: -8.3405, lng: 115.0920, url: baliImg},
    { name: 'Dubai',details:'Dubai is a city in the United Arab Emirates known for its luxurious shopping, modern architecture, and vibrant nightlife.', lat: 25.2048, lng: 55.2708, url: dubaiImg},
    { name: 'New York',details:'New York is a bustling city known for its iconic landmarks, diverse culture, and thriving arts scene.', lat: 40.7128, lng: -74.0060, url: newyorkImg},
    { name: 'Delhi',details:'Delhi is the capital of India and one of the largest cities in the world, known for its rich history and diverse culture.', lat: 28.7041, lng: 77.1025, url: delhiImg},
    { name: 'Paris',details:'Paris, the capital of France, the City of Light, and is a global center for art, fashion, gastronomy, and culture.', lat: 48.8566, lng: 2.3522, url: parisImg},
    { name: 'Sudan', details:'Sudan is a country in northeastern Africa known for its ancient history, diverse culture, and natural beauty.', lat: 15.5007, lng: 32.5599, url: sudanImg},
    { name: 'Yemen', details:'Yemen is a country in the Middle East known for its rich history, stunning landscapes, and vibrant culture.', lat: 15.5527, lng: 48.5164, url: yemenImg},
    { name: 'Turkey', details:'Turkey is a country located at the crossroads of Europe and Asia, known for its stunning natural beauty, rich history, and diverse culture.', lat: 38.9637, lng: 35.2433, url: turkeyImg},
    { name: 'Vietnam', details:'Vietnam is a country in Southeast Asia known for its rich culture, stunning natural beauty, and delicious cuisine.', lat: 14.0583, lng: 108.2772, url: vietnamImg},
    { name: 'Russia', details:'Russia is the largest country in the world, spanning two continents and known for its rich history, stunning architecture, and diverse culture.', lat: 61.5240, lng: 105.3188, url: russiaImg},
    { name: 'Morocco', details:'Morocco is a country in North Africa known for its vibrant culture, stunning architecture, and beautiful landscapes.', lat: 31.7917, lng: -7.0926, url: moroccoImg}
  ];
  

  const handleVideoClose = () => {
    setVideoOpen(false);
  };

  const renderVideoOverlay = () => {
    if (!videoOpen) {
      return null;
    }

    return (
      <div className="video-overlay">
        <video autoPlay controls loop>
          <source src={hyperlapse} type="video/mp4" />
        </video>
        <button className="close-btn" onClick={handleVideoClose}>
          X
        </button>
      </div>
    );
  };

  return (
    <section>
  {renderVideoOverlay()}
  <Container>
    <Button className="btn primary__btn w-25" onClick={() => setVideoOpen(true)}>
      Watch Video
    </Button>
    <Row>
      <Col lg="12" className="pt-5 text-center">
        <div className="about">
          <h1 className="mb-3 fw-semibold">About Us</h1>
          <p>
            We are a team of passionate individuals who strive to create the best travel experiences for our customers.
            We believe that every journey should be unique and personalized, and that's why we work closely with our
            clients to understand their preferences and needs.
          </p>
          <p>
            Our goal is to provide high-quality services and make sure that every detail is taken care of, so that our
            clients can relax and enjoy their trip.
          </p>
          <p>
            We are committed to continuous improvement and use various metrics to measure the success of our projects.
            Some of the metrics we track include:
          </p>
          <ul>
            <li>Customer satisfaction rate</li>
            <li>Feedback and reviews from customers</li>
            <li>Number of repeat bookings</li>
            <li>Safety of customers</li>
          </ul>
          <p>
            By monitoring these metrics, we can identify areas for improvement and make data-driven decisions to
            enhance our services and provide even better travel experiences for our customers.
          </p>
          <Button className="btn primary__btn w-25">
            <Link to="/home">Back to Home</Link>
          </Button>
        </div>
      </Col>
    </Row>
    <Row>
      <Col lg="12" className="pt-5 text-center">
      <h3>Our most visited places</h3>
        <MapContainer center={[30, 0]} zoom={1.8} scrollWheelZoom={false} style={{ height: '600px', width: '100%', backgroundColor: '#fff', border: 'none' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {places.map(place => (
            <Marker position={[place.lat, place.lng]} key={place.name} icon={myIcon}>
            <Popup>
          <div>
          <img src={place.url} alt={place.name} style={{ height: '80px', width: '35%'}} />
          <h4>{place.name}</h4>
          <p>{place.details}</p>
         </div>
      </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Col>
    </Row>
  </Container>
</section>

  );
};

export default About;

