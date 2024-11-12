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

const BackArrow = styled(NavigationArrow)`
  left: 20px;
`;

const ForwardArrow = styled(NavigationArrow)`
  right: 20px;
`;

const Header = styled(motion.h1)`
  color: #4cc9f0;
  text-align: center;
  margin-bottom: 40px;
  font-size: 3rem;
  text-shadow: 0 0 10px rgba(76, 201, 240, 0.5);
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  flex-grow: 1;
justify-content: space-between; // This will push the cards apart

`;

const FirstCardContainer = styled.div`
  margin-bottom: 100px; // Adjust this value as needed
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 400px;
  
`;

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
   overflow-y: auto;
  
`;

const CardFront = styled(Card)`
  background-color: #0f3460;
`;

const CardBack = styled(Card)`
  background-color: #16213e;
`;

const Title = styled.h2`
  color: #4cc9f0;
  margin-bottom: 10px;
  font-size: 1.5rem
`;


const Subtitle = styled.h3`
  color: #f0f0f0;
`;

const Details = styled.ul`
  list-style-type: none;
  padding: 0;
`;

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
  
   cursor:pointer; 
   font-size :16px; 
   transition : background-color .3s;

   &:hover {
      background-color :#3a9fc0; 
   }

   &:disabled {
      background-color :#2a4a6a; 
      cursor:not-allowed; 
   }
`;

const experiences = {
  workExperience: [
    {
      title: "Software Engineer",
      subtitle: "Blvck Sapphire(provides AI technologies to businesses/organizations)| Remote | April 2023 - Present",
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
      subtitle: " National Society of Black Engineers| Grand Rapids, MI | May 2023 – Present",
      details: [
        "Lead and coordinate computer science initiatives, fostering educational growth and collaboration among members. Organized workshops, mentorship programs, and hackathons, resulting in increased member participation by over 25% and improved technical skill development"
      ]
    },
    {
      title: "Girls Who Code Tutor and Mentor ",
      subtitle: " Calvin University| Grand Rapids, MI | September 2023 – August 2024",
      details: [
        "Lead and coordinate computer science initiatives, fostering educational growth and collaboration among members. Organized workshops, mentorship programs, and hackathons, resulting in increased member participation by over 25% and improved technical skill development"
      ]
    },
    {
      title: "Research Intern",
      subtitle: " Calvin University | Grand Rapids, MI | August 2023 – December 2023",
      details: [
        "Led dynamic coding workshops empowering young women to develop their own applications, fostering expertise in software engineering fundamentals and nurturing inventive problem-solving skills.",
        "Facilitated hands-on project development sessions, fostering fluency in various programming languages and facilitating collaborative app-building projects to cultivate teamwork and innovation."
      ]
    },
    {
      title: "Co-founder",
      subtitle: "S & S foundation (Souad & Seli)| Accra, Ghana| September 2020 - Present",
      details: [
        "Co-founder of S&S foundation",
        "Donated stationery, exercise books, and mathematical sets to schools in remote parts of the country.",
        "Participated in cooking food to feed about200 people on the street.",
        "Organized the collection and donation of clothes to the orphanage",
        "Participated in community clean up services"
      ]
    },
    {
      title: " Executive member",
      subtitle: "Beautiful foundation| Accra, Ghana | December 2021 - August 2023",
      details: [

        "Participated in the collection and donation clothes, books, food, drinks, toiletries, drinking water, and stationeries to the disability homes and local communities."
      ]
    }
  ],

};

const ExperienceCard = ({ type, experiences }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsFlipped(true), 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    }, 300); // Wait for the flip animation to complete before changing the index
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
    }, 300); // Wait for the flip animation to complete before changing the index
  };
  const currentExperience = experiences[currentIndex];

  return (
    <div>
      <CardWrapper>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.6} flipSpeedFrontToBack={0.6}>
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
      >
      </Header>

      <NavigationMenu /> {/* Add the NavigationMenu here */}
      <BackArrow to="/introduction">←</BackArrow>
      <ForwardArrow to="/pet-projects">→</ForwardArrow>
      <Header>My Experiences</Header>
      <CardsContainer>
        <FirstCardContainer>
          <ExperienceCard type="Work Experience" experiences={experiences.workExperience} />
        </FirstCardContainer>
      </CardsContainer>
    </ExperiencePageWrapper>
  );
};

export default ExperiencePage;