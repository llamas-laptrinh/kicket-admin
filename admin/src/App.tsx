import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import './App.css'

function App() {
  return (
    <>
      <Router>
          <Routes>
            {routes.map((route) => {
              return (
                <Route key={route.path} path={route.path} element = { <route.page/> } />
              )
            })}
          </Routes>
      </Router>
    </>
  )
}

export default App
