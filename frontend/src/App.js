import React, { useState, useEffect } from 'react';

import { ThemeProvider } from './context/ThemeContext';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import Preloader from './components/Preloader';

import Login from './pages/Login.jsx';
import Signup from './pages/Signup';
import Home from './pages/Home.jsx';
import Chatbot from './pages/Chatbot';
import Profile from './pages/Profile';
import About from './pages/TeamMembers';
import AllNotsh from './pages/Allnotsh.js';
import SetTime from './pages/SetTime';

import './App.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>

      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <div className="App">

            <Routes>

              {/* Public Routes */}

              <Route
                path="/login"
                element={<Login />}
              />

              <Route
                path="/signup"
                element={<Signup />}
              />


              {/* Protected Routes */}

              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/allnotsh"
                element={
                  <ProtectedRoute>
                    <AllNotsh />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/chatbot"
                element={
                  <ProtectedRoute>
                    <Chatbot />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/setTime"
                element={
                  <ProtectedRoute>
                    <SetTime />
                  </ProtectedRoute>
                }
              />


              {/* Website Entry Point */}

              <Route
                path="/"
                element={
                  <Navigate
                    to="/login"
                    replace
                  />
                }
              />


              {/* Unknown Routes */}

              <Route
                path="*"
                element={
                  <Navigate
                    to="/login"
                    replace
                  />
                }
              />

            </Routes>

          </div>
        </Router>
      )}

    </ThemeProvider>
  );
}

export default App;