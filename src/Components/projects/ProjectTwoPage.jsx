import React, { Component } from 'react';

import desktop from '../../Assets/charcuterie-desktop.mp4';
import mobile from '../../Assets/charcuterie-mobile.mp4';
import './projectTwo.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ReactPlayer from 'react-player'

class ProjectTwo extends Component {
  render() {
    return (
      <Container className='project-container' fluid>
        <Row>
          <span className='project-header'>Charcuterie</span>
        </Row>
        <Row>
          <span className='project-subheader'>
            Concept website for a restaurant, Charcuterie. Created using HTML,
            CSS and JavaScript. Utilizes bootstrap for a responsive design.
          </span>
          <span className='project-subheader'>
            Click <a className='link' href="https://github.com/SummerWiemelt/Charcuterie">here</a> to see the source code on github
            
          </span>
        </Row>
        <Row className='video-row'>
          <span className='project-text'>Website design</span>
        </Row>
        <Row className='justify-content-center'>
        <ReactPlayer className='desktop-video' url={desktop} playing loop />
        </Row> 
        <Row className='video-row'>
          <span className='project-text'>Responsive design works with all screen sizes</span>
        </Row>
        <Row className='justify-content-center'>
          <ReactPlayer url={mobile} playing loop />
        </Row>
      </Container>
    );
  }
}

export default ProjectTwo;
