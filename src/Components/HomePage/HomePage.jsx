import React, { Component } from 'react';

import image from '../../Assets/headshot.jpg';
import './homePage.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class HomePage extends Component {
  render() {
    return (
      <Container className='home-container'>
        <Row>
          <Col md={6}>
            <Image src={image} thumbnail className='home-image' />
          </Col>
          <Col md={6}>
            <span className='about-header'>Hi, I'm Summer.</span>
            <br></br>
            <span>
              A self-taught web developer. I have an eye
              for aesthetically pleasing websites, and believe a good design is
              as important as a functional site. <br></br>
              <br></br> I love a challenge, which is why I have been teaching
              myself to program. I have a background in working with people in
              social service roles, and this allows me to see my code from a
              humanistic perspective. I love to think about the human behind the
              screen.<br></br><br></br>
              <br></br>Get to know me, and let's create something together.
            </span>
            <br></br><br></br>
            Send me an email at <span className="bold">summer.eisertw@gmail.com</span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
