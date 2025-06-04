import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const PetProjectPageWrapper = styled(motion.div)`
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

const BackArrow = styled(NavigationArrow)` left: 20px; `;
const ForwardArrow = styled(NavigationArrow)` right: 20px; `;

const Header = styled(motion.h1)`
  color: #4cc9f0;
  text-align: center;
  margin-bottom: 40px;
  font-size: 3rem;
`;

const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProjectCard = styled(motion.div)`
  background-color: #16213e;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

const ProjectTitle = styled.h2`
  color: #4cc9f0;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #e0e0e0;
`;

const LoadingTitle = styled(motion.h2)`
  color: #4cc9f0;
  font-size: 2rem;
`;

const PetProjectPage = () => {
    // State variables to manage loading, typing animation, and title display
    const [isLoading, setIsLoading] = useState(true);
    const [loadingIndex, setLoadingIndex] = useState(0);
    const [typedTitle, setTypedTitle] = useState('');
    const [isTitleTyped, setIsTitleTyped] = useState(false);

    // List of projects to display
    const projects = [
        { title: "Accessible Voice Assistant", description: "Multilingual voice-activated assistant for the visually impaired using NLP and ML." },
        { title: "Budget App", description: "Full-stack budgeting application using React and Node.js with API integration." },
        { title: "RFID Door Lock", description: "Arduino-based RFID door lock prototype exploring hardware-software integration." },
        { title: "Bartering App", description: "Platform for item-for-item exchanges without monetary transactions." },
        { title: "Readers Tool", description: "AI-powered tool enhancing the reading experience of classic Christian texts." },
    ];

    // Typing effect for the title
    useEffect(() => {
        let typingTimeout;
        const fullTitle = "My Pet Projects";

        const typeTitle = () => {
            let index = 0;

            // Type each letter with a randomized speed
            const typeNextLetter = () => {
                if (index < fullTitle.length) {
                    setTypedTitle(fullTitle.slice(0, index + 1));
                    index++;
                    typingTimeout = setTimeout(typeNextLetter, Math.random() * (150 - 50) + 50);
                } else {
                    setIsTitleTyped(true);
                }
            };

            typeNextLetter();
        };

        typeTitle();

        return () => clearTimeout(typingTimeout);
    }, []);

    // After title is typed show animated project titles one by one, then display all cards
    useEffect(() => {
        if (isTitleTyped) {
            const interval = setInterval(() => {
                setLoadingIndex((prevIndex) => (prevIndex + 1) % projects.length);
            }, 500);

            // Stop loading after cycling through each project title once
            setTimeout(() => {
                clearInterval(interval);
                setIsLoading(false);
            }, projects.length * 500);

            return () => clearInterval(interval);
        }
    }, [isTitleTyped, projects.length]);

    // Animation variants for page transitions and project cards
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
        visible: { y: 0, opacity: 1 }
    };

    return (
        <PetProjectPageWrapper
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <NavigationMenu />
            <BackArrow to="/experience"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.8 }}
            >
                ←
            </BackArrow>

            <ForwardArrow to="/achievements"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.8 }}
            >
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
                    <ProjectContainer
                        key="projects"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Render each project card with hover effects */}
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    rotate: Math.random() * (5) - 2.5,
                                    boxShadow: "0px -2px rgba(76,201,240,.5)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>
                            </ProjectCard>
                        ))}
                    </ProjectContainer>
                )}
            </AnimatePresence>
        </PetProjectPageWrapper>
    );
};

export default PetProjectPage;
