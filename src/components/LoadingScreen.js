import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #000033;
  color: #ffffff;
`;

const TypewriterText = styled.h1`
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  border-right: 0.15em solid #ffffff;
  animation: 
    ${typing} 3.5s steps(40, end),
    ${blink} 0.75s step-end infinite;
  font-family: 'Courier New', monospace;
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const FadeInWrapper = styled.div`
  animation: ${fadeIn} 1s ease-in;
`;

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 4000); // Adjust this time to match your typing animation duration

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <LoadingWrapper>
      <FadeInWrapper>
        <TypewriterText>
          Welcome to my portfolio!
        </TypewriterText>
      </FadeInWrapper>
    </LoadingWrapper>
  );
};

export default LoadingScreen;