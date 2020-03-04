import React, { Component } from 'react';

import './projectOne.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import GifPlayer from 'react-gif-player';

class ProjectOne extends Component {
    render() {
        return(
            <Container className='project-container' fluid>
            <Row>
              <span className='project-header'>Mistify</span>
            </Row>
            <Row>
              <span className='project-subheader'>
              Plant management website used to keep and track houseplant information. Built using React, Node.js, Express, Firestore authentication, Firebase (database), React router and others.
              </span>
              <span className='project-subheader'>
                Click <a className='link' href="https://github.com/SummerWiemelt/Mistify">here</a> to see the source code on github
                
              </span>
            </Row>
            <Row className='gif-row'>
              <span className='project-text'>Website design</span>
            </Row>
            <Row className='justify-content-center'>
              <GifPlayer
                // className='desktop-gif'
                // gif={}
                // still={}
                // autoplay='true'
              />
            </Row> 
            <Row className='gif-row'>
              <span className='project-text'>Responsive design works with all screen sizes</span>
            </Row>
            <Row className='justify-content-center mobile-gif-parent'>
              <GifPlayer
                // className='mobile-gif'
                // gif={}
                // still={}
                // autoplay='true'
              />
            </Row>
          </Container>
        );
    }
}

export default ProjectOne;