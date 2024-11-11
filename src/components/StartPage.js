import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const StartPageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0a0a1f;
  color: #ffffff; 
  overflow: hidden;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem; 
  margin-bottom: 1rem; 
  text-align: center;
  font-family: 'Courier New', monospace; 
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

const InteractiveArea = styled(motion.div)`
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #007bff, #00aaff); 
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StartText = styled(motion.span)`
  font-size: 2.0rem;
  font-weight: bold;
`;

const messages = [
    "Click me!",
    "Get started!"
];



const StartPage = ({ onStartComplete }) => {
    const [interactionCount, setInteractionCount] = useState(0);
    const controls = useAnimation();

    const handleInteraction = async () => {
        await controls.start({ scale: 0.9, transition: { duration: 0.1 } });
        await controls.start({ scale: 1, transition: { type: 'spring', stiffness: 300, damping: 10 } });
        setInteractionCount(prev => prev + 1);
    };

    useEffect(() => {
        if (interactionCount >= messages.length) {
            setTimeout(onStartComplete, 500);
        }
    }, [interactionCount, onStartComplete]);

    return (
        <StartPageWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Title
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                Get to Know Me
            </Title>
            <InteractiveArea
                animate={controls}
                whileHover={{ scale: 1.05 }}
                onClick={handleInteraction}
            >
                <StartText>
                    {interactionCount < messages.length ? messages[interactionCount] : "Let's go!"}
                </StartText>
            </InteractiveArea>
        </StartPageWrapper>
    );
};

export default StartPage;
