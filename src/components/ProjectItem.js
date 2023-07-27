import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjOne from '../assets/images/projectone.png';

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2.rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .projectItem_links {
    font-size: 20px;
    justify-content: space-between;
    margin-left: 18rem;
    text-decoration: underline;
  }
  .projectItem_linkone {
    margin-right: 3rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
    .projectItem_links {
      font-size: 10px;
      margin-left: 2rem;
    }
  }
`;

export default function ProjectItem({
  img = ProjOne,
  title = 'Project Name',
  desc = 'blah blah blah',
  link1 = 'beep',
  link2 = 'boop',
}) {
  return (
    <ProjectItemStyle>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <div className="github-container">
          <p className="projectItem__desc">{desc}</p>
          <div className="projectItem_links">
            <a
              href={link1}
              target="_blank"
              rel="noreferrer"
              className="projectItem_linkone"
            >
              GitHub
            </a>
            <a href={link2} target="_blank" rel="noreferrer">
              Deployed
            </a>
          </div>
        </div>
      </div>
    </ProjectItemStyle>
  );
}
