import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const AchievementsPageWrapper = styled(motion.div)`
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

const NavigationArrow = styled(Link)`
  position: absolute;
  top: 20px;
  font-size: 24px;
  color: #4cc9f0;
  text-decoration: none;
  z-index: 10;
  &:hover {
    color: #3a9fc0;
  }
`;

const BackArrow = styled(NavigationArrow)`
  left: 20px;
`;
const ForwardArrow = styled(NavigationArrow)` right: 20px; `;

const Header = styled(motion.h1)`
  color: #4cc9f0;
  text-align: center;
  margin-bottom: 40px;
  font-size: 3rem;
`;

const AchievementContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const AchievementCard = styled(motion.div)`
  background: rgba(22, 33, 62, 0.8);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(76, 201, 240, 0.3);
  cursor: pointer;
`;

const AchievementTitle = styled.h2`
  color: #4cc9f0;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const AchievementDescription = styled.p`
  color: #e0e0e0;
  font-size: 1rem;
`;

const AchievementLink = styled.a`
  color: #4cc9f0;
  text-decoration: none;
  display: inline-block;
  margin-top: 8px;
  font-style: italic;
  &:hover {
    text-decoration: underline;
    color: #3a9fc0;
  }
`;

const Particle = styled(motion.div)`
  position: absolute;
  background-color: #4cc9f0;
  border-radius: 50%;
`;

const achievements = [
    {
        title: "Collegiate Honors Student",
        description: "Recognized for maintaining a 3.9 GPA while actively participating in student government, academic clubs, and extensive community engagement initiatives. Demonstrated outstanding leadership skills through coordinating volunteer programs and mentoring fellow students, earning commendation for balancing academic excellence with meaningful extracurricular involvement."
    },
    {
        title: "Research Paper Co-author",
        description: "Co-authored a research paper titled 'Towards Full Authorship with AI: Supporting Revision with AI-Generated Views', accepted for presentation at the HAI-GEN 2024 conference. The paper introduces Textfocals, a UI prototype that maintains user autonomy in writing by providing AI-generated insights rather than direct text generation, encouraging thoughtful self-revision.",
        link: "https://hai-gen.github.io/2024/papers/9904-Kim.pdf"
    },
    {
        title: "Most Creative Award - Hackathon 2024",
        description: "Demonstrated creativity and innovation during the hackathon by developing an Accessible Voice Assistant solution that addresses accessibility challenges.",
        projectRef: true
    },
    {
        title: "Leadership Award – Girls Who Code",
        description: "Recognized for outstanding mentorship and leadership in Girls Who Code, where I lead dynamic coding workshops for young women, I was able to ignite their passion for technology by empowering them to develop their own applications."
    }
];

const AchievementsPage = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    return (
        <AchievementsPageWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <NavigationMenu />
            <BackArrow to="/home">←</BackArrow>
            <ForwardArrow to="/experience">→</ForwardArrow>
            <Header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            >
                Achievements
            </Header>
            <AchievementContainer>
                <AnimatePresence>
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            layoutId={`achievement-${index}`}
                            initial={{ opacity: 0, y: 50, rotateX: -15 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                boxShadow: "0 8px 30px rgba(76, 201, 240, 0.3)"
                            }}
                            onClick={() => setSelectedAchievement(index)}
                        >
                            <AchievementTitle>{achievement.title}</AchievementTitle>
                            <AchievementDescription>{achievement.description}</AchievementDescription>
                            {achievement.link && (
                                <AchievementLink href={achievement.link} target="_blank" rel="noopener noreferrer">
                                    Read the paper →
                                </AchievementLink>
                            )}
                            {achievement.projectRef && (
                                <AchievementLink as={Link} to="/projects/voice-assistant">
                                    View project details →
                                </AchievementLink>
                            )}
                        </AchievementCard>
                    ))}
                </AnimatePresence>
            </AchievementContainer>

            <AnimatePresence>
                {selectedAchievement !== null && (
                    <motion.div
                        layoutId={`achievement-${selectedAchievement}`}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "rgba(10, 10, 31, 0.9)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1000
                        }}
                        onClick={() => setSelectedAchievement(null)}
                    >
                        <AchievementCard style={{ width: "80%", maxWidth: "600px" }}>
                            <AchievementTitle>{achievements[selectedAchievement].title}</AchievementTitle>
                            <AchievementDescription>{achievements[selectedAchievement].description}</AchievementDescription>
                            {achievements[selectedAchievement].link && (
                                <AchievementLink href={achievements[selectedAchievement].link} target="_blank" rel="noopener noreferrer">
                                    Read the paper →
                                </AchievementLink>
                            )}
                            {achievements[selectedAchievement].projectRef && (
                                <AchievementLink as={Link} to="/projects/accessible-voice-assistant">
                                    View project details →
                                </AchievementLink>
                            )}
                        </AchievementCard>
                    </motion.div>
                )}
            </AnimatePresence>

            {[...Array(50)].map((_, index) => (
                <Particle
                    key={index}
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: 0
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: Math.random(),
                        scale: Math.random() * 3
                    }}
                    transition={{
                        duration: Math.random() * 10 + 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    style={{
                        width: Math.random() * 5 + 1 + "px",
                        height: Math.random() * 5 + 1 + "px"
                    }}
                />
            ))}
        </AchievementsPageWrapper>
    );
};

export default AchievementsPage;