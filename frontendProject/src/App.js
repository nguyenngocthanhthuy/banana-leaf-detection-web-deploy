import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import DetectionPage from './components/DetectionPage';
import AboutPage from './components/AboutPage';
import SettingsPage from './components/SettingsPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
//import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/detection" element={<DetectionPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
