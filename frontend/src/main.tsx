import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx'
import BuildingsInspect from './pages/BuildingsInspect.tsx';
import {buildingsData} from './assets/buildingsData/buildingsData.ts';
import './index.css'
import { masterData } from './assets/buildingsData/buildingsData.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/buildings" element={<BuildingsInspect buildings={buildingsData} />} /> */}
          <Route path="/buildings" element={<BuildingsInspect buildings={masterData} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
