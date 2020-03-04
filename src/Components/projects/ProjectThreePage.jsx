import React, { Component } from 'react';

import blogpostimage from '../../Assets/A-la-mode-blogpost.png';
import blogsimage from '../../Assets/A-la-mode-blogs.png';
import landingimage from '../../Assets/fashion-landing.png';
import './projectThree.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class ProjectThree extends Component {
  render() {
    return (
      <Container className='project-three-container'>
        <Row>
          <span className='project-three-header'>À La Mode</span>
        </Row>
        <Row>
          <span className='project-three-subheader'>Web design for a concept fashion blog, built using Figma.</span>
        </Row>
        <Row>
          <Col md={6}>
            <Image src={landingimage} thumbnail />
            <Image src={blogpostimage} thumbnail />
          </Col>
          <Col md={6}>
            <Image src={blogsimage} thumbnail />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectThree;
