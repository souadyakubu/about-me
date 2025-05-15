import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const IntroductionPageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
 background-color: #0a0a1f;
  color: #ffffff;
  overflow: hidden;
  padding: 5px;
  position: relative;
  font-family: 'Courier New', monospace;
`;

const NavigationArrow = styled(Link)`
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


const ChatContainer = styled.div`
   width: 100%; 
   max-width: 600px; 
   margin: auto; 
`;

const Message = styled(motion.div)`
  margin: 10px 0;
  padding: 15px;
  border-radius: 10px;
  max-width: 80%;
`;

const Question = styled(Message)`
  background-color: #004080;
  align-self: flex-start;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #004080;
  }
`;

const Answer = styled(Message)`
  background-color: #007bff;
  align-self: flex-end;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #007bff;
  }
`;

const TypingIndicator = styled.span`
  font-style: 'Courier New', monospace;

`;

const ContinueButton = styled.button`
  font-style: 'Courier New', monospace;
  margin-top: -10px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px; 

  &:hover {
    background-color: #0056b3;
    transition: background-color 0.3s ease;
  }
`;

const messages = [
  { question: "Hello!", answer: " Hello there! Excited to meet you. I am Souad Yakubu." },
  { question: "What are your hobbies?", answer: " I love cooking, going to the gym, and learning a new skill. I currenty on a daily 'try something new everyday' journey and it has been pretty exciting so far! " },
  { question: "What is your field of study and why did you choose that field?", answer: " My field of study is computer science, and it represents more than just coding; it's my way of making a significant difference in the world. I’ve truly found my groove in this discipline, which is all about solving puzzles and generating innovative ideas, one of the main reasons I love it so much. However, my passion is deeply rooted in a personal story: when I was 13, my uncle lost his sight, drastically altering his life and highlighting the tough realities faced by people with disabilities. While I know that disabilities do not define us, they undeniably impact our lives. This experience led me to question why living with a disability should hinder anyone from pursuing their dreams. My vision is to leverage artificial intelligence in computer science to create solutions that empower individuals like my uncle. Inspired by Steve Jobs’ quote, 'The people who are crazy enough to think they can change the world are the ones who do.' I strive to be one of those people. With every new skill I acquire, I'm getting closer to building technologies that improve lives and make a meaningful impact." },
  { question: "That interesting. Can I get a little more personal?", answer: " Okay, let's go for it. " },
  { question: "What is the biggest lesson you learnt outside of the classroom?", answer: " Wow, well there are countless lessons I’ve learned outside the classroom, but one of the most valuable has been the importance of gratitude, even in difficult times. For a long time, I struggled with how unfair life can seem: why does one person live in a mansion while another is homeless? Why do some people face immense hardships while others seem to have everything? Over time, I began to understand that comparing ourselves to others only leads to frustration, and we rarely know the full story behind someone’s life. I also realized that sometimes, setbacks happen for a reason. Missing out on a job might mean there’s a better opportunity ahead. Being delayed in traffic could keep me safe from harm. Even personal challenges, like illness, have taught me to grow and deepen my faith. By embracing gratitude, I’ve learned to appreciate every moment and find peace, trusting that each experience has a purpose." },
  { question: "What is the significance of combining academic excellence with community engagement in your personal development?", answer: " I value the combination of academic excellence and community engagement because together they create a well-rounded, purposeful education. Academic achievement drives me to push my boundaries, to understand complex ideas, and to develop skills that will last a lifetime. But it’s in community engagement that I find a sense of connection and purpose, where what I’m learning goes beyond the classroom and becomes something that can make a difference.When I engage with others, I’m reminded that knowledge is most powerful when shared. Working with different people, hearing their perspectives, and contributing in ways that uplift others gives my academic pursuits real meaning. Learning alone feels incomplete; it’s when I can use what I know to support or connect with others that my education feels the most fulfilling.For me, academic success without community lacks purpose, and community work without knowledge can lack impact. " },
  { question: "Thanks for sharing!", answer: " It was a pleasure. Let's get to know about my experiences!" },
];

const IntroductionPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const typingIntervalRef = React.useRef(null);

  const handleContinue = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setDisplayedAnswer("");
    } else {

      navigate('/experience');
    }
  };


  useEffect(() => {
    if (currentIndex < messages.length) {
      setDisplayedAnswer(""); // Clear displayed answer for the new question
      setIsTyping(true); // Start typing indicator
      typeAnswer(messages[currentIndex].answer); // Start typing effect for the answer
    }


    return () => clearInterval(typingIntervalRef.current);
  }, [currentIndex]);

  const typeAnswer = (answer) => {
    let index = 0;
    clearInterval(typingIntervalRef.current); // Clear any existing interval

    typingIntervalRef.current = setInterval(() => {
      setDisplayedAnswer((prev) => prev + answer.charAt(index));
      index++;

      if (index === answer.length) {
        clearInterval(typingIntervalRef.current);
        setIsTyping(false);
      }
    }, 30);
  };

  return (
    <IntroductionPageWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavigationMenu />
      <BackArrow to="/home">←</BackArrow>

      <ChatContainer>
        <Question>{messages[currentIndex].question}</Question>
        <Answer>
          {displayedAnswer}
          {isTyping && <TypingIndicator>...</TypingIndicator>}
        </Answer>
      </ChatContainer>
      {!isTyping && displayedAnswer && (
        <ContinueButton onClick={handleContinue}>
          Continue
        </ContinueButton>
      )}
    </IntroductionPageWrapper>
  );
};

export default IntroductionPage;