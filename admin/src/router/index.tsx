import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Slider from '../pages/dashboard'; 
import Plans from '../pages/Plans';
import Services from '../pages/Servicess';
import APIkey from '../pages/ApiKey';
import AccessControls from '../pages/AccessControls';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Slider />
      <Routes>
        <Route path="/" element={<Outlet />}>
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

export default App;
