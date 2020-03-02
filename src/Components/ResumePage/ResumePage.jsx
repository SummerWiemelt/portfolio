import React, { Component } from 'react';

import image from '../../Assets/resume.jpg';
import './resumePage.scss';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

class ResumePage extends Component {
  render() {
    return (
      <Container className='resume-container'>
      <Image src={image} className='resume-image' fluid />
      </Container>
    );
  }
}

export default ResumePage;
