import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import your pages
import DashboardLayout from './components/dashboard/layout.jsx';
import DashboardOverview from './components/dashboard/page.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/register.jsx';

function App() {
  return (
    <Routes>
      {/* 1. Redirect "/" to the Dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* 2. Login & Register Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 3. The Dashboard System */}
      <Route 
        path="/dashboard/*" 
        element={
          <DashboardLayout>
            <Routes>
              {/* This loads the Overview when you visit /dashboard */}
              <Route index element={<DashboardOverview />} />
              
              {/* You can add more dashboard pages here later */}
              {/* <Route path="events" element={<EventsPage />} /> */}
            </Routes>
          </DashboardLayout>
        } 
      />
    </Routes>
  );
}

export default App;