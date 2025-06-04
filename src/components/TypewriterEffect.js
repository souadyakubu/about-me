import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for typing effect: gradually increases the width of text from 0 to full
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// Animation for blinking caret effect: toggles border color to simulate cursor blinking
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: ${props => props.theme.text}; }
`;

const TypewriterText = styled.div`
  overflow: hidden;                  // Hide overflowing text for typing effect
  border-right: .15em solid ${props => props.theme.text};  // Right border acts as caret
  white-space: nowrap;               // Prevent text wrapping to new lines
  margin: 0 auto;                   // Center horizontally
  letter-spacing: .15em;            // Spacing between letters for style
  animation: 
    ${typing} 3.5s steps(40, end), // Typing animation runs over 3.5 seconds, with 40 steps
    ${blinkCaret} .75s step-end infinite;  // Infinite blinking caret animation
`;

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;

    // Timer interval to gradually add one character at a time
    const timer = setInterval(() => {
      // Update displayed text to include one more character from the original text
      setDisplayText(text.slice(0, index));

      index++;

      // Clear timer when full text is displayed to stop updates
      if (index > text.length) {
        clearInterval(timer);
      }
    }, 100); // Interval duration (100ms) controls typing speed

    // Cleanup function to clear timer when component unmounts or text changes
    return () => clearInterval(timer);
  }, [text]); // Effect runs again if input text changes

  // Render the animated styled text container with the current displayed text
  return <TypewriterText>{displayText}</TypewriterText>;
};

export default TypewriterEffect;
