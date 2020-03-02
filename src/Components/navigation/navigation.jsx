import React, { Component } from 'react';

import './navigation.scss';
import HomePage from '../HomePage/HomePage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ResumePage from '../ResumePage/ResumePage';
import ContactPage from '../ContactPage/ContactPage';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Router>
        <Navbar bg='none'>
          <Nav className='ml-auto mr-auto'>

              <Nav.Link href='/about' className='navHeader'>Summer Eisert-Wiemelt</Nav.Link>

          </Nav>
        </Navbar>
        <Navbar bg='none'>
          <Nav className='ml-auto mr-auto'>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/projects'>
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/resume'>
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>

        <Route path='/' exact render={() => <HomePage />} />
        <Route path='/about' render={() => <HomePage />} />
        <Route path='/projects' render={() => <ProjectsPage />} />
        <Route path='/resume' render={() => <ResumePage />} />
        <Route path='/contact' render={() => <ContactPage />} />
      </Router>
    );
  }
}

export default Navigation;
