import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import pages from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {Object.entries(pages).map(([key, { component, url }]) => (
          <Route key={key} path={url} element={React.createElement(component)} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
