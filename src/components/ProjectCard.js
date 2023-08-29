import React from 'react';
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, imgUrl, url}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Link to={url} className='text-light' target='_blank'>
        <div className="proj-imgbx">
          <img src={imgUrl} alt=''/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Link>
  </Col>
  );
}

export default ProjectCard;
