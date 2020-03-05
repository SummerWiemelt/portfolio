import React, { Component } from 'react';

import desktop from '../../Assets/mistify-desktop.mp4';
import mobile from '../../Assets/mistify-mobile.mp4';
import './projectOne.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ReactPlayer from 'react-player'

class ProjectOne extends Component {
    render() {
        return(
            <Container className='project-container' fluid>
            <Row>
              <span className='project-header'>Mistify</span>
            </Row>
            <Row>
              <span className='project-subheader'>
              Plant management website used to keep and track houseplant information. Built using React, Redux, Firestore authentication, Firebase (database), React router, Node.js and Express. 
              </span>
              <span className='project-subheader'>
                Click <a className='link' href="https://github.com/SummerWiemelt/Mistify">here</a> to see the source code on github
                
              </span>
            </Row>
            <Row className='video-row'>
              <span className='project-text'>Website design</span>
            </Row>
            <Row className='justify-content-center'>
            <ReactPlayer url={desktop} playing loop />
            </Row> 
            <Row className='video-row'>
              <span className='project-text'>Responsive design works with all screen sizes</span>
            </Row>
            <Row className='justify-content-center mobile-video-parent'>
              <ReactPlayer url={mobile} playing loop />
            </Row>
          </Container>
        );
    }
}

export default ProjectOne;