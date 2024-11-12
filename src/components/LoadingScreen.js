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

const LoadingScreen = ({ onLoadingComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Welcome to my portfolio!";

  const typeNextCharacter = useCallback(() => {
    setDisplayedText(prev => {
      if (prev.length < fullText.length) {
        return fullText.slice(0, prev.length + 1);
      }
      return prev;
    });
  }, [fullText]);

  useEffect(() => {
    if (displayedText.length === fullText.length) {
      setTimeout(onLoadingComplete, 500);
      return;
    }

    const typingTimeout = setTimeout(typeNextCharacter, 100);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, fullText, onLoadingComplete, typeNextCharacter]);

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