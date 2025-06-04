import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Wrapper for the whole start page, centers content vertically and horizontally,
// sets background and text colors, and hides overflow for clean animation effects
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

// Main title style, with monospace font for a techy vibe,
// some spacing below, and subtle text shadow for depth
const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Courier New', monospace;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

// The clickable interactive area styled as a large circle with a cool gradient background.
// Centered content inside and changes cursor to pointer on hover for clear interactivity.
// user-select: none disables text highlighting on click for a smooth UX.
const InteractiveArea = styled(motion.div)`
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #007bff, #00aaff);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

// Text inside the interactive area, large bold font for emphasis
const StartText = styled(motion.span)`
  font-size: 2rem;
  font-weight: bold;
`;

// Messages to cycle through on each user interaction (currently just one message)
const messages = ["Get started!"];

const StartPage = () => {
    // Track how many times user has clicked/tapped the interactive area
    const [interactionCount, setInteractionCount] = useState(0);
    // Flag to trigger exit animation before navigating away
    const [isExiting, setIsExiting] = useState(false);

    // Controls for framer-motion animations on the interactive area
    const controls = useAnimation();

    // React Router hook for navigation
    const navigate = useNavigate();

    // Called on click: triggers a quick shrink-grow animation for tactile feedback,
    // then increments interaction count to progress through messages or finish
    const handleInteraction = async () => {
        // Shrink the circle quickly
        await controls.start({ scale: 0.9, transition: { duration: 0.1 } });
        // Bounce back to normal size with spring animation
        await controls.start({ scale: 1, transition: { type: 'spring', stiffness: 300, damping: 10 } });
        // Increase interaction count to move through messages or trigger exit
        setInteractionCount((prev) => prev + 1);
    };

    // Effect watches interaction count and triggers navigation once all messages are done
    useEffect(() => {
        if (interactionCount >= messages.length) {
            // Start exit fade animation
            setIsExiting(true);
            // Delay navigation to allow exit animation to complete smoothly
            const timer = setTimeout(() => {
                navigate('/home'); // Change this to your desired route
            }, 1200);
            return () => clearTimeout(timer); // Cleanup timer if component unmounts early
        }
    }, [interactionCount, navigate]);

    return (
        // Page wrapper with fade-in on mount and fade-out on exit controlled by isExiting flag
        <StartPageWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: isExiting ? 0 : 1, transition: 'opacity 1s ease' }} // smooth fade out on exit
        >
            <Title
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                Get to Know Me
            </Title>

            <InteractiveArea animate={controls} whileHover={{ scale: 1.05 }} onClick={handleInteraction}>
                {/* Display current message or a final prompt once messages are done */}
                <StartText>
                    {interactionCount < messages.length ? messages[interactionCount] : "Let's go!"}
                </StartText>
            </InteractiveArea>
        </StartPageWrapper>
    );
};

export default StartPage;
