import React, { Component } from 'react';

import './navigation.scss';
import HomePage from '../HomePage/HomePage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ResumePage from '../ResumePage/ResumePage';
import ContactPage from '../ContactPage/ContactPage';

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
              <Nav.Link href='/about' className='nav-header'>Summer Eisert-Wiemelt</Nav.Link>
          </Nav>
        </Navbar>
        <Navbar bg='none' className='nav-links'>
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
          </Nav>
        </Navbar>

        <Route path='/' exact render={() => <HomePage />} />
        <Route path='/about' render={() => <HomePage />} />
        <Route path='/projects' render={() => <ProjectsPage />} />
        <Route path='/resume' render={() => <ResumePage />} />
      </Router>
    );
  }
}

/*  For future Contact Page with Email Form 
        <LinkContainer to='/contact'>
              <Nav.Link>Contact</Nav.Link>
        </LinkContainer>

        <Route path='/contact' render={() => <ContactPage />} />
*/



export default Navigation;
