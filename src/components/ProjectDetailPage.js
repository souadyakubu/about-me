import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import NavigationMenu from './NavigationMenu';
import { projects } from './projectsData';

const PageWrapper = styled(motion.div)`
  background-color: #0a0a1f;
  min-height: 100vh;
  padding: 60px 20px;
  font-family: 'Courier New', monospace;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackLink = styled(Link)`
  color: #4cc9f0;
  text-decoration: none;
  font-size: 1.2rem;
  position: absolute;
  top: 20px;
  left: 20px;
  &:hover {
    color: #3a9fc0;
  }
`;

const Header = styled.h1`
  color: #4cc9f0;
  text-align: center;
  margin-bottom: 25px;
  font-size: 2.5rem;
  line-height: 1.2;
`;

const LinksRow = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 25px;
  justify-content: center;
`;

const StyledA = styled.a`
  color: #4cc9f0;
  text-decoration: underline;
  font-weight: 600;
  font-size: 1.1rem;
  &:hover {
    color: #3a9fc0;
  }
`;

const DetailsContainer = styled.div`
  background: #16213e;
  border-radius: 12px;
  padding: 35px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.4);
  font-size: 1.15rem;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const ProjectDetailPage = () => {
  // Grab the project ID from the URL parameters
  const { id } = useParams();

  // Find the project in the data array using the ID
  const project = projects.find(p => p.id === id);

  // If no project is found, show a simple "not found" message
  if (!project) {
    return (
      <PageWrapper>
        <BackLink to="/projects">←</BackLink>
        <Header>Project Not Found</Header>
      </PageWrapper>
    );
  }

  // Otherwise render the project details with smooth fade-in animation
  return (
    <PageWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavigationMenu />

      <BackLink to="/projects">←</BackLink>
      <Header>{project.title}</Header>

      <LinksRow>
        {project.github && (
          <StyledA href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </StyledA>
        )}
        {project.website && (
          <StyledA href={project.website} target="_blank" rel="noopener noreferrer">
            Website
          </StyledA>
        )}
      </LinksRow>
      <DetailsContainer>
        <ReactMarkdown>{project.details}</ReactMarkdown>
      </DetailsContainer>
    </PageWrapper>
  );
};

export default ProjectDetailPage;
