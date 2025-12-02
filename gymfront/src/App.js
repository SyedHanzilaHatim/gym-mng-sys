import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import UsersPage from './pages/UsersPage';
import TrainersPage from './pages/TrainersPage';
import PlansPage from './pages/PlansPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import PaymentsPage from './pages/PaymentsPage';
import AttendancePage from './pages/AttendancePage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import AdminLogin from './pages/AdminLogin';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <AppNavbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/dashboard"
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
          />

          <Route
            path="/profile"
            element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}
          />

          <Route
            path="/users"
            element={<ProtectedRoute><UsersPage /></ProtectedRoute>}
          />

          <Route
            path="/trainers"
            element={<ProtectedRoute><TrainersPage /></ProtectedRoute>}
          />

          <Route
            path="/plans"
            element={<ProtectedRoute><PlansPage /></ProtectedRoute>}
          />

          <Route
            path="/subscriptions"
            element={<ProtectedRoute><SubscriptionsPage /></ProtectedRoute>}
          />

          <Route
            path="/payments"
            element={<ProtectedRoute><PaymentsPage /></ProtectedRoute>}
          />

          <Route
            path="/attendance"
            element={<ProtectedRoute><AttendancePage /></ProtectedRoute>}
          />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
