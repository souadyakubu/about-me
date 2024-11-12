import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import StartPage from './components/StartPage';
import IntroductionPage from './components/IntroductionPage';
import ExperiencePage from './components/ExperiencePage';
import PetProjectPage from './components/PetProjectPage';
import AchievementsPage from './components/AchievementsPage'; // Import the new AchievementsPage component
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

const AppWrapper = styled.div`
   background-color: ${props => props.theme.background};
   color: ${props => props.theme.text};
   min-height: 100vh;
`;

const AppContent = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState('loading');

  const handleLoadingComplete = () => {
    setCurrentPage('start');
  };

  const handleStartComplete = () => {
    setCurrentPage('introduction');
  };

  const handleIntroductionComplete = () => {
    navigate('/experience');
  };

  return (
    <AnimatePresence mode="wait">
      {currentPage === 'loading' && (
        <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
      )}
      {currentPage === 'start' && (
        <StartPage key="start" onStartComplete={handleStartComplete} />
      )}
      {currentPage === 'introduction' && (
        <IntroductionPage key="introduction" onComplete={handleIntroductionComplete} />
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<AppContent />} />
            <Route path="/introduction" element={<IntroductionPage onComplete={() => { }} />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/pet-projects" element={<PetProjectPage />} />
            <Route path="/achievements" element={<AchievementsPage />} /> {/* Add this new route */}
          </Routes>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;