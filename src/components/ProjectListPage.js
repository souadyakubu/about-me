import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
import { projects } from './projectsData';

const PageWrapper = styled(motion.div)`
  background-color: #0a0a1f;
  min-height: 100vh;
  padding: 40px;
  font-family: 'Courier New', monospace;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const NavigationArrow = styled(motion(Link))`
  position: absolute;
  top: 20px;
  font-size: 24px;
  color: #4cc9f0;
  text-decoration: none;
  &:hover {
    color: #3a9fc0;
  }
`;

const BackArrow = styled(NavigationArrow)`
  left: 20px;
`;

const ForwardArrow = styled(NavigationArrow)`
  right: 20px;
`;

const Header = styled(motion.h1)`
  color: #4cc9f0;
  text-align: center;
  margin-bottom: 50px;
  font-size: 3rem;
  line-height: 1.2;
`;

const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const ProjectCard = styled(motion(Link))`
  background-color: #1f2a56;
  border-radius: 12px;
  padding: 25px;
  width: 280px;
  height: 260px; /* Fixed height to keep cards uniform */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align text at the top */
  transition: box-shadow 0.3s ease;

  &:hover {
    position: relative;
    overflow: hidden;

    // Shiny hover effect animation
    &:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        120deg,
        rgba(255,255,255,0) 60%,
        rgba(255,255,255,0.25) 70%,
        rgba(255,255,255,0) 80%
      );
      transform: rotate(25deg);
      pointer-events: none;
      transition: opacity 0.3s;
      opacity: 0;
    }

    &:hover:before {
      animation: shine 0.9s forwards;
      opacity: 1;
    }
  }
`;

const GithubLink = styled.a`
  color: #4cc9f0;
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: -45px;

  transition: background 0.2s, color 0.2s;
  &:hover {
    color: #1f2a56;
  }
`;

const ProjectTitle = styled.h2`
  color: #4cc9f0;
  margin-bottom: 15px;
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 10px;
`;

const LoadingTitle = styled(motion.h2)`
  color: #4cc9f0;
  font-size: 2rem;
`;

const ProjectListPage = () => {
    // Get location object to check if user came from Home page
    const location = useLocation();

    // Control if the loading animation is shown
    const [isLoading, setIsLoading] = useState(false);

    // Index to cycle through projects during loading animation
    const [loadingIndex, setLoadingIndex] = useState(0);

    // State to hold the typed out "My Projects" header text
    const [typedTitle, setTypedTitle] = useState('');

    // Flag to indicate when the title typing animation has finished
    const [isTitleTyped, setIsTitleTyped] = useState(false);

    // Typing animation effect for the page header "My Projects"
    useEffect(() => {
        const fullTitle = "My Projects";
        let typingTimeout;

        const typeTitle = () => {
            let index = 0;

            const typeNextLetter = () => {
                if (index < fullTitle.length) {
                    // Update typedTitle one letter at a time
                    setTypedTitle(fullTitle.slice(0, index + 1));
                    index++;
                    // Random delay for more natural typing effect
                    typingTimeout = setTimeout(typeNextLetter, Math.random() * (150 - 50) + 45);
                } else {
                    // Once complete mark as typed
                    setIsTitleTyped(true);
                }
            };

            typeNextLetter();
        };

        typeTitle();

        // Clean up timeout if component unmounts during typing
        return () => clearTimeout(typingTimeout);
    }, []);

    // Effect controlling the loading animation sequence based on navigation and typing completion
    useEffect(() => {
        // Check if user navigated here from the Home page (via location state)
        const cameFromHome = location.state?.fromHome;

        // Check if user has already seen the loading animation (persisted in sessionStorage)
        const hasSeenLoading = sessionStorage.getItem("hasSeenProjects");

        // Show loading animation only if user came from Home and hasn't seen it yet
        if (cameFromHome && !hasSeenLoading) {
            setIsLoading(true);
            sessionStorage.setItem("hasSeenProjects", "true"); // remember for this session
        }

        // Start cycling through project titles only after typing animation finishes and loading is active
        if (isTitleTyped && cameFromHome && !hasSeenLoading) {
            // Interval cycles the project titles every 380ms
            const interval = setInterval(() => {
                setLoadingIndex((prevIndex) => (prevIndex + 1) % projects.length);
            }, 380);

            // Stop loading after showing all project titles once
            setTimeout(() => {
                clearInterval(interval);
                setIsLoading(false);
            }, projects.length * 380);

            // Clean up interval on unmount or dependency change
            return () => clearInterval(interval);
        }
    }, [isTitleTyped, location.state]);

    const pageVariants = {
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <PageWrapper
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <NavigationMenu />
            <BackArrow to="/home"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.8 }}>
                ←
            </BackArrow>
            <ForwardArrow to="/achievements"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.8 }}>
                →
            </ForwardArrow>

            <Header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            >
                {typedTitle}
            </Header>

            <AnimatePresence>
                {isLoading && isTitleTyped ? (
                    <LoadingTitle
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        style={{ color: '#e0e0e0' }}
                    >
                        {projects[loadingIndex].title}
                    </LoadingTitle>
                ) : !isLoading && (
                    // Once loading is done, show GitHub link and list of project cards
                    <>
                        <GithubLink
                            href="https://github.com/souadyakubu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View my GitHub for more →
                        </GithubLink>

                        <ProjectContainer
                            key="projects"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    to={`/projects/${project.id}`}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: Math.random() * 5 - 2.5,
                                        boxShadow: "0px -2px rgba(76,201,240,.5)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <ProjectDescription>{project.description}</ProjectDescription>
                                </ProjectCard>
                            ))}
                        </ProjectContainer>
                    </>
                )}
            </AnimatePresence>
        </PageWrapper>
    );
};

export default ProjectListPage;
