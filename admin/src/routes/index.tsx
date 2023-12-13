import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const Index = () => {
  return (
    <div>
        <Router>
          <Routes>
            {routes.map((route) => {
              return (
                <Route key={route.path} path={route.path} element = { <route.page/> } />
              )
            })}
          </Routes>
        </Router>
    </div>
  )
}

export default Index