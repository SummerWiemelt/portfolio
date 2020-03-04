import React, { Component } from 'react';

import './resumePage.scss';
import pdf from '../../Assets/Summer-Eisert-Wiemelt-resume.pdf';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ResumePage extends Component {
  render() {
    return (
      <Container className='justify-content-center resume-container'>
        <Row className='justify-content-center pdf-link-parent'>
          <div>
            Click{' '}
            <a className='link' href={pdf} download>
              here
            </a>{' '}
            to download a PDF
          </div>
        </Row>
        <Row>
          <Col lg={4}>
            <div className='resume-header'>Contact</div>
            <ul>
              <div>303-847-2869</div>
              <div>summer.eisertw@gmail.com</div>
              <div>github.com/SummerWiemelt</div>
              <div>Longmont, Colorado</div>
            </ul>

            <div className='resume-header'>Courses</div>
            <ul>
              <div className='resume-subheader'>Frontend Masters Courses</div>
              <ul>
                <li>Complete Intro to React, v5</li>
                <li>Intermediate React, v2</li>
                <li>State Management with Redux</li>
                <li>JavaScript: The Hard Parts, v2</li>
              </ul>
              <br />
              <div className='resume-subheader'>Udemy Courses</div>
              <ul>
                <li>The Complete JavaScript Course</li>
                <ul>
                  <li>
                    Created a recipe search app with API integration. See the
                    project{' '}
                    <a
                      className='link'
                      href='https://github.com/SummerWiemelt/Recipe-App'>
                      here
                    </a>{' '}
                  </li>

                  <li>
                    Implemented a budgeting app. See the project{' '}
                    <a
                      className='link'
                      href='https://github.com/SummerWiemelt/Budget-App'>
                      here
                    </a>{' '}
                  </li>

                  <li>
                    Built a dice game. See the project{' '}
                    <a
                      className='link'
                      href='https://github.com/SummerWiemelt/Dice-Game-'>
                      here
                    </a>{' '}
                  </li>
                </ul>
              </ul>
            </ul>
          </Col>
          <Col lg={4}>
            <div className='resume-header'>Work Experience</div>
            <ul>
              <div className='resume-subheader'>
                Emergency Family Assistance Association
              </div>
              <div>Housing Case Manager Intern</div>
              <div>July 2018-August 2019</div>
              <ul>
                <li>Developed goal-oriented, comprehensive service plans</li>
                <li>
                  Designed posters in illustrator for community evens and public
                  notices
                </li>
                <li>
                  Maintained thorough case history records and updated state and
                  federal databased in a timely manner
                </li>
              </ul>
            </ul>
            <ul>
              <div className='resume-subheader'>CampMinder</div>
              <div>Technical Support Intern</div>
              <div>June 2016-August 2016</div>
              <ul>
                <li>
                  Provided customer support on technical issues through problem
                  resolution
                </li>
                <li>
                  Worked individually and as a tea to solve software related
                  issues
                </li>
              </ul>
            </ul>
          </Col>

          <Col lg={4}>
            <div className='resume-header'>Technologies</div>
            <Container className='technologies-container'>
            <Row className='technologies-row-1'><ul className='no-padding'>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </ul></Row>
          <Row className='technologies-row-2'><ul>
            <ul>
              <li>Figma</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
            </ul>
          </ul></Row>
          </Container>
            
            <div className='resume-header'>Education</div>
            <ul>
              <div className='resume-subheader'>B.A. Sociology</div>
              <div>2019</div>
              <div>University of Colorado, Denver</div>
              <ul>
                <li>Cumulative GPA 3.91</li>
                <li>
                  Certificates in Family & Social Welfare, and Criminology
                </li>
              </ul>
              <br />
              <div className='resume-subheader'>A.A. Business</div>
              <div>2017</div>
              <div>Front Range Community College</div>
            </ul>

            <div className='resume-header'>Honors and Awards</div>
            <ul className='no-padding'>
              <ul>
                <li>Dean's list 2015-2019</li>
                <li>Sigma Alpha Lambda National Leadership and Honors</li>
                <li>Magna Cum Laude</li>
                <li>Phi Thetta Kappa Honor Society</li>
              </ul>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ResumePage;
