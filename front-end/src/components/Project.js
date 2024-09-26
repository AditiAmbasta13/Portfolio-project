import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import projImg1 from "../assets/img/project-1-img.png";
import projImg2 from "../assets/img/project-2-img.jpeg";
import projImg3 from "../assets/img/project-3-img.jpeg";
import projImg4 from "../assets/img/project-4-img.png";
import projImg5 from "../assets/img/project-5-img.png";
import projImg6 from "../assets/img/project-6-img.png";
import projImg7 from "../assets/img/new-proj-1.jpg";
import projImg8 from "../assets/img/new-proj-2.jpg";
import projImg9 from "../assets/img/new-proj-3.jpg";
import projImg10 from "../assets/img/project-7-img.png";
import projImg11 from "../assets/img/project-8-img.png";
import projImg12 from "../assets/img/project-9-img.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Project = () => {
    const [activeTab, setActiveTab] = useState('first');

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    const projects = [
      {
        title: "Urify Finance",
        description: "Finance Website",
        imgUrl: projImg10,
        link: "https://github.com/AditiAmbasta13/Urify-Finance?tab=readme-ov-file"
    },
      {
        title: "Artify",
        description: "Edutainment Website",
        imgUrl: projImg8,
        link: "https://github.com/sameer240704/HachNCode_Gaavwale"
    },
      {
        title: "Infomatrix Website",
        description: "Figma Website",
        imgUrl: projImg7,
        link: "https://www.figma.com/design/joPPd3LUsHDg7yWnI78MUg/Infomatrix-full-website?node-id=407-2&t=cEvI9qdzc55qsspz-1"
    },
      {
        title: "Krishak Saathi",
        description: "Empowering Farmers",
        imgUrl: projImg12,
        link: "https://github.com/sameer240704/Agriculture_Management_System"
    },
      {
        title: "Personal Portfolio",
        description: "Fullstack project",
        imgUrl: projImg1,
        link: "https://github.com/AditiAmbasta13/Portfolio-project"
    },
      {
        title: "Multi-Class-Prediction-of-Obesity-Risk",
        description: "ML project",
        imgUrl: projImg11,
        link: "https://github.com/Springboard-Internship-2024/Multi-Class-Prediction-of-Obesity-Risk_May_2024/tree/Aditi-Ambasta"
    },
    ];

    const cards = projects.map((project, index) => (
        <ProjectCards key={index} {...project} />
    ));

    return (
        <section className='project' id="projects">
            <Container>
                <Row>
                    <Col sm={12}>
                        <h2>Projects</h2>
                        <p></p>
                        <Tab.Container id="left-tabs-example" activeKey={activeTab} onSelect={handleTabChange}>
                            <Row>
                                <Col sm={3}>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                <section className="cards-list">
                                                    {cards}
                                                </section>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background" />
        </section>
    );
}

export default Project;
