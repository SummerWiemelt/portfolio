import React, { Component } from 'react';

import image1 from '../../Assets/Mistify-landing.png';
import image2 from '../../Assets/charcuterie.png';
import image3 from '../../Assets/fashion-landing.png';
import './projectsPage.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProjectsPage extends Component {
  render() {
    return (
      <Container className='projects-container'>
        <Row>
          <Col sm={6} lg={4} className='project-col'>
            <Card>
              <Card.Img variant='top' src={image1} />
              <Card.Body>
                <Card.Title>Mistify</Card.Title>
                <Card.Text>
                  Plant management system, created using React.
                </Card.Text>
                <div className='project-button-parent'>
                  <Button variant='light' className='project-button'>
                    See the project
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} className='project-col'>
            <Card>
              <Card.Img variant='top' src={image2} />
              <Card.Body>
                <Card.Title>Charcuterie</Card.Title>
                <Card.Text>
                  Restaurant concept website built using HTML, CSS and
                  JavaScript
                </Card.Text>
                <div className='project-button-parent'>
                  <Button variant='light' className='project-button'>
                    See the project
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={4} className='project-col'>
            <Card>
              <Card.Img variant='top' src={image3} />
              <Card.Body>
                <Card.Title>À La Mode</Card.Title>
                <Card.Text>Web Design for a concept fashion blog using Figma</Card.Text>
                <div className='project-button-parent'>
                  <Button variant='light' className='project-button'>
                    See the project
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectsPage;
