import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Plans from '../pages/Plans';
import Services from '../pages/Servicess'; 
import APIkey from '../pages/ApiKey'; 
import AccessControls from '../pages/AccessControls';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import DashBoard from '../pages/dashboard';
import DashBoardContend from '../pages/dashboard/ContentDashboard';

const Index: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />}>
          <Route path='/' element={<DashBoardContend />} />
          <Route path="DashBoard" element={<DashBoardContend />} />
          <Route path="APIkeys" element={<APIkey />} />
          <Route path="AccessControls" element={<AccessControls />} />
          <Route path="Plans" element={<Plans />} />
          <Route path="Services" element={<Services />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Index;
