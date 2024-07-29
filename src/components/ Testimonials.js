import React from 'react';
import { Carousel } from 'react-bootstrap';
import './styles/Testimonials.css';

const Testimonials = () => (
  <div className="testimonials">
    <h2>What Our Users Say</h2>
    <Carousel>
      <Carousel.Item>
        <p>"Amazing platform! It has transformed the way I manage my tasks."</p>
        <footer>- John Doe</footer>
      </Carousel.Item>
      <Carousel.Item>
        <p>"The user interface is so intuitive and easy to use."</p>
        <footer>- Jane Smith</footer>
      </Carousel.Item>
      <Carousel.Item>
        <p>"Highly recommend it to anyone looking for efficiency."</p>
        <footer>- Michael Johnson</footer>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Testimonials;
