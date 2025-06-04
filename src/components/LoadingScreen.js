import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoadingWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #0a0a1f;
  color: #ffffff;
`;

const TypewriterText = styled.h1`
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  font-family: 'Courier New', monospace;
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const Cursor = styled.span`
  border-right: 2px solid #ffffff;
  animation: blink-cursor 0.75s step-end infinite;

  @keyframes blink-cursor {
    from, to { border-color: transparent }
    50% { border-color: white; }
  }
`;

// Main LoadingScreen component that types out a welcome message letter by letter
const LoadingScreen = ({ onLoadingComplete }) => {
  // State to track the currently displayed portion of the full text
  const [displayedText, setDisplayedText] = useState('');

  // The complete welcome message to be typed out
  const fullText = "Welcome to my portfolio!";

  // Callback to add one more character to displayedText at a time
  const typeNextCharacter = useCallback(() => {
    setDisplayedText(prev => {
      if (prev.length < fullText.length) {
        return fullText.slice(0, prev.length + 1);
      }
      return prev;
    });
  }, [fullText]);

  // useEffect handles the typing interval and triggers the callback once typing is complete
  useEffect(() => {
    // When all text is displayed, call the provided completion handler after a short delay
    if (displayedText.length === fullText.length) {
      setTimeout(onLoadingComplete, 500);
      return;
    }

    // Otherwise set a timeout to type the next character
    const typingTimeout = setTimeout(typeNextCharacter, 100);

    // Clean up the timeout to prevent memory leaks or unexpected behavior
    return () => clearTimeout(typingTimeout);
  }, [displayedText, fullText, onLoadingComplete, typeNextCharacter]);

  // Render the animated loading screen with the typewriter text
  return (
    <LoadingWrapper
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TypewriterText>
        {displayedText}
        <Cursor />
      </TypewriterText>
    </LoadingWrapper>
  );
};

export default LoadingScreen;
