import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import projImg1 from "../assets/img/project-1-img.png";
import projImg2 from "../assets/img/project-2-img.jpeg";
import projImg3 from "../assets/img/project-3-img.jpeg";
import projImg4 from "../assets/img/project-4-img.png";
import projImg5 from "../assets/img/project-5-img.png";
import projImg6 from "../assets/img/project-6-img.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Project = () => {

    const projects = [
        {
          title: "Personal Portfolio",
          description: "Fullstack project",
          imgUrl: projImg1,
        },
        {
          title: "Event Management System",
          description: "Python x DBMS Project",
          imgUrl: projImg2,
        },
        {
          title: "Bucket-List App",
          description: "JavaScript Project",
          imgUrl: projImg3,
        },
        {
          title: "Music-Player",
          description: "Python Project",
          imgUrl: projImg4,
        },
        {
          title: "Meme-generator",
          description: "Javascript Project",
          imgUrl: projImg5,
        },
        {
          title: "Movie streaming Website",
          description: "Javascript Project",
          imgUrl: projImg6,
        },
      ];

      const cards = projects.map((project, index) => {
        return (
            <ProjectCards
                key={index}
                {...project}
            />
        )
      })

  return (
    <section className='project' id="projects">
    <Container>
      <Row>
        <Col sm={12}>
          <h2>Projects</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.</p>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column tab-list">
                  <Nav.Item className='nav-item first-tab'>
                    <Nav.Link className="tab-item" eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='nav-item second-tab'>
                    <Nav.Link className="tab-item" eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='nav-item third-tab'>
                    <Nav.Link className="tab-item" eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                            {
                              <section className="cards-list">
                                  {cards}
                              </section>
                            }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p></p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p></p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
  </section>
      
  );
}

export default Project
