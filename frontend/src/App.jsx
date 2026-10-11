import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Layout from './components/Layout';
import Navbar from './components/Navbar'; 
import ProtectedRoute from './components/ProtectedRoute'; // <-- Yahan import kiya hai

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Help from './pages/Help';

// Portal Pages
import Login from './pages/Login';
import CreateShipment from './pages/CreateShipment';
import ShipmentList from './pages/ShipmentList';
import TrackShipment from './pages/TrackShipment';
import Dashboard from './pages/Dashboard';

// Yeh ek chota sa wrapper hai jo sirf public pages ke upar Navbar dikhayega
const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default function App() {
  return (
    <GoogleOAuthProvider clientId="dummy-client-id-for-now">
      <Router>
        <Routes>
          
          {/* 1. Public Pages (In sab ke upar Navbar nazar aayega) */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/track" element={<TrackShipment />} />
          </Route>

          {/* 2. Portal Pages (Inko ProtectedRoute se Lock kar diya hai) */}
          <Route element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="/shipments" element={<ShipmentList />} />
            <Route path="/create-shipment" element={<CreateShipment />} />
          </Route>

          {/* 3. Authentication Page (Login par Navbar nahi chahiye hota) */}
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}