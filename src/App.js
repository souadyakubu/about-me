import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
//import LoadingScreen from './components/LoadingScreen';
import StartPage from './components/StartPage';
import IntroductionPage from './components/IntroductionPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectListPage from './components/ProjectListPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import AchievementsPage from './components/AchievementsPage';
import NavigationPage from './components/NavigationPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

const AppWrapper = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  min-height: 100vh;
`;

// Define the AppContent component (was referenced but missing)
function AppContent() {
  return (
    <AnimatePresence mode="wait">
      <StartPage />
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<AppContent />} />
            <Route path="/home" element={<NavigationPage />} />
            <Route path="/projects" element={<ProjectListPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/introduction" element={<IntroductionPage onComplete={() => { }} />} />


          </Routes>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
