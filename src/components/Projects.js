import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { PersonWorkspace, MortarboardFill} from 'react-bootstrap-icons';
import ProjectCard  from "./ProjectCard";
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';
import img5 from '../assets/img/img5.png';
import img6 from '../assets/img/img6.png';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {SiLeetcode, SiCodechef, SiGeeksforgeeks} from 'react-icons/si'
import { FaHackerrank} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {

  // Experiences and Education
  const experiences = [
    { year: 'August 2023 - Present (6 months)', title: 'Intern @ Ministry of Information and Electronics', description: 'Working as a Reseearch Intern and creating scalable solutions for existing problems faced in NeuroImaging-FMRI',  icon: <PersonWorkspace/> },
    { year: 'May 2023 - July 2023', title: 'Intern @ JP Morgan and Chase', description: 'Software Engineer Intern- Was part of GAIA Elastic Search team.Worked extensively on two crucial features OpenSearch anomaly detection and OpenSearch KNN vector search', icon: <MortarboardFill/>}
    // Add more experiences here
  ];

  // Projects

  const projects = [
    {
      title: "Online Learning Management Portal",
      description: "This web portal was built during CodeForGood Hackathon by my team members. This website is a management system portal for admin and teachers",
      imgUrl: img1,
      url: 'https://drive.google.com/file/d/1JZiI8HcJROPu1hlSN43qLZXwJ8lyjZWV/view?usp=share_link'
    },
    {
      title: "Invoice Generator",
      description: "App that allows shopkeepers to generate invoice within seconds by following a simple set of instructions.",
      imgUrl: img2,
      url: 'https://invoice-generator-jet.vercel.app/'
    },
    {
      title: "Cardit",
      description: "Cardit is a web-app where you can create your own GitHub profile card just by giving GitHub username. You can customize the card through different colors and backgrounds.",
      imgUrl: img3,
      url: 'https://cardit-wheat.vercel.app/'
    },
    {
      title: "Daily Schedular",
      description: "This is a Daily Schedular in which the user can type in the text area, and save by clicking the button on the right. Contents of text area will be saved to local storage when the user clicks the save button on the right.",
      imgUrl: img4,
      url: 'https://tanvisaxena1901.github.io/DailySchedular/'
    },
    {
      title: "Text-Tools",
      description: "TextUtils is a utility website which can be used to manipulate your text in the way you want",
      imgUrl: img5,
      url: 'https://github.com/tanvisaxena1901/django-TextTools'
    },
    {
      title: "Force Directed Graph",
      description: "Force-directed-graph Shows Border Countries Of All Countries using SVG",
      imgUrl: img6,
      url: 'https://tanvisaxena1901.github.io/fdg/'
    },
  ];

  // Coding Profiles

  const codingProfiles = [
    { platform: 'LeetCode', icon: <SiLeetcode fontSize={'4.5rem'}/>, username: 'kodecrazy1', Link: 'https://leetcode.com/kodecrazy1/' },
    { platform: 'HackerRank', icon: <FaHackerrank fontSize={'4.5rem'}/>, username: '', Link: 'https://www.hackerrank.com/tanvisaxena1901' },
    { platform: 'GeeksforGeeks', icon: <SiGeeksforgeeks fontSize={'4.5rem'}/>, username: 'tanvisaxena1901', Link: 'https://auth.geeksforgeeks.org/user/tanvisaxena1901/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user' },
    { platform: 'CodeChef', icon: <SiCodechef fontSize={'4.5rem'}/>, username: 'tanvisaxena1901', Link: 'https://www.codechef.com/users/tanvisaxena1901' },
    // Add more coding profiles here
  ];

  return (
    // Projects
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Me</h2>
                <p>Through my journey in the field of Computer Science and Engineering, I have acquired a diverse skill set and a problem-solving mindset. My projects reflect my ability to implement creative solutions and deliver tangible results.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" justify={true}>
                  <Nav variant="pills" className="nav-pills mb-5 mt-5 justify-content-center align-items-center " id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Profiles</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    {/* Experience and Education */}
                    <Tab.Pane eventKey="second">
                      <Container className='d-flex justify-content-center align-items-center'>
                        <VerticalTimeline>
                          {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                              key={index}
                              className="vertical-timeline-element"
                              contentStyle={{ background: 'white', color: '#fff' }}
                              contentArrowStyle={{ borderRight: '25px solid  #f4f4f4' }}
                              date={experience.year}
                              iconStyle={{ background: '#383838', color: '#fff' }}
                              icon={experience.icon}
                            >
                              <h3 className="vertical-timeline-element-title d-flex justify-content-center text-muted">{experience.title}</h3>
                              <span className='d-flex h5 justify-content-around m-4 text-muted'>{experience.description}</span>
                            </VerticalTimelineElement>
                          ))}
                        </VerticalTimeline>
                      </Container>

                      {/* Coding Profile */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Container className='justify-content-between'>
                        <Row>
                          {codingProfiles.map((profile, index) => (
                            <Col key={index} xs={6} sm={3}>
                              <div className="profile d-flex justify-content-center align-items-center flex-column m-4">
                                <Link to={profile.Link} target='_blank' className='text-decoration-none text-light'>
                                  <div className="icon m-2">{profile.icon}</div>
                                  <div className="platform m-2">{profile.platform}</div>
                                  <div className="username m-2">{profile.username}</div>
                                </Link>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Container>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='No img'></img>
    </section>
  )
}

export default Projects;
