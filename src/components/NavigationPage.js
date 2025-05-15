import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Fun floating background circle
const FloatingCircle = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 80%;
  width: 90px;
  height: 90px;
  background: radial-gradient(circle, #00aaff 60%, transparent 100%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.5;
`;

const FloatingSquare = styled(motion.div)`
  position: absolute;
  bottom: 12%;
  left: 10%;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ffb347 60%, transparent 100%);
  border-radius: 16px;
  z-index: 0;
  pointer-events: none;
  opacity: 0.5;
`;

const PageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(120deg, #0a0a1f 70%, #1a2740 100%);
  color: white;
  min-height: 100vh;
  font-family: 'Courier New', monospace;
  position: relative;
  overflow: hidden;
`;

const SectionList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
  width: 100%;
  max-width: 400px;
  z-index: 1;
`;

const SectionLink = styled(motion(Link))`
  padding: 1rem 1.5rem;
  background: linear-gradient(45deg, #007bff, #00aaff);
  color: white;
  text-align: center;
  font-size: 1.25rem;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  transition: background 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
  font-weight: bold;
  letter-spacing: 1px;

  &:hover {
    background: linear-gradient(45deg, #00aaff, #007bff);
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  }
`;

const Emoji = styled.span`
  margin-right: 0.75rem;
  font-size: 1.5rem;
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.8;
  z-index: 1;
  background: rgba(10,10,31,0.8);
  padding: 1.2rem 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.1);
`;

const Sparkle = styled(motion.span)`
  color: #ffe066;
  font-size: 1.5rem;
  margin-left: 0.5rem;
  vertical-align: middle;
`;

const NavigationPage = () => {
    return (
        <PageWrapper
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
        >
            {/* Fun animated background elements */}
            <FloatingCircle
                animate={{ y: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <FloatingSquare
                animate={{ x: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            />

            {/* Animated heading */}
            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
                style={{ zIndex: 1, fontSize: "2.5rem", marginBottom: "1.5rem", fontWeight: "bold" }}
            >
                Welcome!
                <Sparkle
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    role="img"
                    aria-label="sparkles"
                >
                    ✨
                </Sparkle>
            </motion.h1>

            <SectionList>
                <SectionLink
                    to="/projects"
                    whileHover={{ scale: 1.08, rotate: -2 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Emoji>🚀</Emoji>Projects
                </SectionLink>
                <SectionLink
                    to="/achievements"
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Emoji>🏆</Emoji>Achievements
                </SectionLink>
                <SectionLink
                    to="/experience"
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Emoji>💼</Emoji>Experience
                </SectionLink>
                <SectionLink
                    to="/introduction"
                    whileHover={{ scale: 1.08, rotate: -2 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Emoji>👋</Emoji>Learn about me
                </SectionLink>



            </SectionList>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                style={{ width: "100%" }}
            >
                <ContactInfo>
                    <p>
                        Reach me at:{" "}
                        <a href="mailto:sny2@calvin.edu" style={{ color: "#00aaff", fontWeight: "bold" }}>
                            sny2@calvin.edu
                        </a>
                    </p>
                    <p>
                        LinkedIn:{" "}
                        <a
                            href="https://www.linkedin.com/in/souad-yakubu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#00aaff", fontWeight: "bold" }}
                        >
                            inkedin.com/in/souad-yakubu
                        </a>
                    </p>
                </ContactInfo>
            </motion.div>
        </PageWrapper>
    );
};

export default NavigationPage;
