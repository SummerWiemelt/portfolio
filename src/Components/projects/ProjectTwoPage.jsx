import React, { Component } from 'react';

import desktopstill from '../../Assets/charcuterie-landing-still.png';
import mobilestill from '../../Assets/charcuterie-mobile-still.png';
import './projectTwo.scss';

import gif from '../../Assets/charc.gif';
import smallgif from '../../Assets/charc-mobile.gif';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import GifPlayer from 'react-gif-player';

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
        <Row className='gif-row'>
          <span className='project-text'>Website design</span>
        </Row>
        <Row className='justify-content-center'>
          <GifPlayer
            className='desktop-gif'
            gif={gif}
            still={desktopstill}
            autoplay='true'
          />
        </Row> 
        <Row className='gif-row'>
          <span className='project-text'>Responsive design works with all screen sizes</span>
        </Row>
        <Row className='justify-content-center mobile-gif-parent'>
          <GifPlayer
            className='mobile-gif'
            gif={smallgif}
            still={mobilestill}
            autoplay='true'
          />
        </Row>
      </Container>
    );
  }
}

export default ProjectTwo;
