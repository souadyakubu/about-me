import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const ExperiencePageWrapper = styled(motion.div)`
  background-color: #0a0a1f;
  min-height: 100vh;
  padding: 40px;
  font-family: 'Courier New', monospace;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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

const BackArrow = styled(NavigationArrow)`left: 20px;`;
const ForwardArrow = styled(NavigationArrow)`right: 20px;`;

// Main page title 
const Header = styled(motion.h1)`
  color: #4cc9f0;
  text-align: center;
  margin-bottom: 40px;
  font-size: 3rem;
`;

// Container for flipping cards
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  flex-grow: 1;
  justify-content: space-between;
`;

// Adds spacing below the first card (in case of future expansion)
const FirstCardContainer = styled.div`
  margin-bottom: 100px;
`;

// Sets 3D perspective for flipping animation
const CardWrapper = styled.div`
  width: 100%;
  height: 400px;
  perspective: 1000px;
`;

// Base card styling shared by front and back
const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #16213e;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardFront = styled(Card)`
  background-color: #0f3460;
  backface-visibility: hidden;
`;

const CardBack = styled(Card)`
  background-color: #16213e;
  backface-visibility: hidden;
`;


const Title = styled.h2`
  color: #4cc9f0;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const Subtitle = styled.h3`
  color: #f0f0f0;
`;

// Container for bullet point details
const Details = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Bullet styling for each experience detail
const DetailItem = styled.li`
  margin-bottom: 10px;

  &:before {
    content: "•";
    color: #4cc9f0;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #4cc9f0;
  color: #16213e;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer; 
  font-size: 16px; 
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a9fc0; 
  }

  &:disabled {
    background-color: #2a4a6a; 
    cursor: not-allowed; 
  }
`;

// Array of experiences 
const experiences = {
  workExperience: [
    {
      title: "Software Engineer",
      subtitle: "Blvck Sapphire (Remote) | April 2023 - Present",
      details: [
        "Develop server-side logic, database integration, APIs, and user interfaces, ensuring software reliability.",
        "Design, develop, and maintain AI software applications with facial recognition features.",
        "Assist in managing AWS infrastructure (S3, DynamoDB, Rekognition, Lambda, IAM) for machine learning projects."
      ]
    },
    {
      title: "Library IT Assistant",
      subtitle: "Hekman Library | Grand Rapids, MI | May 2023 – Present",
      details: [
        "Transformed the library's website with innovative JavaScript frameworks and CSS methods, ensuring top-tier accessibility and user experience.",
        "Manage database operations, ensuring timely updates and optimizing functionality to streamline library operations."
      ]
    },
    {
      title: "Computer Science Chair",
      subtitle: "National Society of Black Engineers | May 2023 – Present",
      details: [
        "Led workshops, mentorships, and hackathons, increasing member participation by 25% and fostering technical growth."
      ]
    },
    {
      title: "Girls Who Code Tutor and Mentor",
      subtitle: "Calvin University | September 2023 – August 2024",
      details: [
        "Guided students in coding projects and problem-solving, encouraging confidence and technical fluency."
      ]
    },
    {
      title: "Research Intern",
      subtitle: "Calvin University | August 2023 – December 2023",
      details: [
        "Facilitated workshops and coding sessions, helping students master programming skills and build real-world apps."
      ]
    },
    {
      title: "Co-founder",
      subtitle: "S & S Foundation | Accra, Ghana | September 2020 - Present",
      details: [
        "Organized donation drives for schools and orphanages.",
        "Prepared meals for over 200 people and led community clean-up initiatives."
      ]
    }
  ],
};


const ExperienceCard = ({ type, experiences }) => {
  const [isFlipped, setIsFlipped] = useState(false); // Controls whether the card is showing front or back
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks which experience to show

  // Automatically flips 
  useEffect(() => {
    const timer = setTimeout(() => setIsFlipped(true), 3500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Move to the next experience card
  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  // Go back to the previous experience card
  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
  };

  const currentExperience = experiences[currentIndex];

  return (
    <div>
      <CardWrapper>
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront={0.6}
          flipSpeedFrontToBack={0.6}
        >
          <CardFront>
            <Title>{currentExperience.title}</Title>
            <Subtitle>{currentExperience.subtitle}</Subtitle>
          </CardFront>
          <CardBack>
            <Title>{currentExperience.title}</Title>
            <Details>
              {currentExperience.details.map((detail, index) => (
                <DetailItem key={index}>{detail}</DetailItem>
              ))}
            </Details>
          </CardBack>
        </ReactCardFlip>
      </CardWrapper>

      {/* Navigation buttons to cycle through cards */}
      <NavigationButtons>
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </NavigationButtons>
    </div>
  );
};

const ExperiencePage = () => {
  return (
    <ExperiencePageWrapper>
      <Header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      />
      <NavigationMenu />

      <BackArrow to="/home">←</BackArrow>
      <ForwardArrow to="/introduction">→</ForwardArrow>

      <Header>My Experiences</Header>

      {/* Container holding all the flipping cards */}
      <CardsContainer>
        <FirstCardContainer>
          <ExperienceCard
            type="Work Experience"
            experiences={experiences.workExperience}
          />
        </FirstCardContainer>
      </CardsContainer>
    </ExperiencePageWrapper>
  );
};

export default ExperiencePage;
