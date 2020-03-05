import React, { Component } from 'react';

import gif from '../../Assets/mistify-small-desktop.gif';
import desktop from '../../Assets/mistify-small-desktop.mov';
import mobile from '../../Assets/mistify-mobile-small.mp4';
import './projectOne.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ReactPlayer from 'react-player';
import GifPlayer from 'react-gif-player';


class ProjectOne extends Component {
  render() {
    return (
      <Container className='project-container' fluid>
        <Row>
          <span className='project-header'>Mistify</span>
        </Row>
        <Row>
          <span className='project-subheader'>
            Plant management website used to keep and track houseplant
            information. Built using React, Redux, Firestore authentication,
            Firebase (database), React router, Node.js and Express.
          </span>
          <span className='project-subheader'>
            Click{' '}
            <a className='link' href='https://github.com/SummerWiemelt/Mistify'>
              here
            </a>{' '}
            to see the source code on github
          </span>
        </Row>
        <Row className='video-row'>
          <span className='project-text'>Website design</span>
        </Row>
        <Row className='justify-content-center'>
        <div></div>
          <GifPlayer
            className='desktop-gif'
            gif={gif}
            autoplay='true'
          />
          <ReactPlayer className='desktop-video' async url={desktop} playing playsinline loop />
        </Row>

        <Row className='video-row'>
          <span className='project-text'>
            Responsive design works with all screen sizes
          </span>
        </Row>
        <Row className='justify-content-center mobile-video-parent'>
          <ReactPlayer async url={mobile} playing playsinline loop />
        </Row>
      </Container>
    );
  }
}

export default ProjectOne;
