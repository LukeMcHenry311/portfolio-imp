import React from 'react';
import styled from 'styled-components';
import ProjectsSection from '../components/ProjectsSection';

const ProjectsStyles = styled.div`
  padding: 3rem 0;
`;

export default function Projects() {
  return (
    <ProjectsStyles>
      <ProjectsSection />
    </ProjectsStyles>
  );
}
