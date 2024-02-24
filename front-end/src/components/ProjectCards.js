import React from 'react'
import { Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const ProjectCards = (props) => {
  return (
      <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="card-img" src={props.imgUrl} />
        <div className="proj-txtx">
          <h4>{props.title}</h4>
          <span>{props.description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCards
