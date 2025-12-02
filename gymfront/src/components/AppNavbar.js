import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function AppNavbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const doLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/home">Gym Manager</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            {user && (
              <> 
                <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/plans">Plans</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/trainers">Trainers</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/payments">Payments</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/attendance">Attendance</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/subscriptions">Subscriptions</Link></li>
              </>
            )}
          </ul>

          <ul className="navbar-nav ms-auto">
            {!user && (
              <>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/signup">Sign up</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admin/login">Admin Login</Link></li>
              </>
            )}

            {user && (
              <>
                <li className="nav-item"><span className="nav-link">{user.firstName} {user.lastName}</span></li>
                <li className="nav-item"><button className="btn btn-outline-light btn-sm" onClick={doLogout}>Logout</button></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
