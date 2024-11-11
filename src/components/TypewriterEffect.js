import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: ${props => props.theme.text}; }
`;

const TypewriterText = styled.div`
  overflow: hidden;
  border-right: .15em solid ${props => props.theme.text};
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: 
    ${typing} 3.5s steps(40, end),
    ${blinkCaret} .75s step-end infinite;
`;

const TypewriterEffect = ({ text }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setDisplayText(text.slice(0, index));
            index++;
            if (index > text.length) {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [text]);

    return <TypewriterText>{displayText}</TypewriterText>;
};

export default TypewriterEffect;