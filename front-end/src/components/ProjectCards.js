import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectCards = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="card-img" src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{link && <a href={link} target="_blank" rel="noopener noreferrer" className='link-proj'>Project Link</a>}</p>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCards;
