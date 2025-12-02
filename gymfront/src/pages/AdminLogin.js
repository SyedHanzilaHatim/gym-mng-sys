import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function AdminLogin(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    try{
      await login(email, password);
      // after login, auth context fetchMe runs and sets user
      if (user && user.role === 'admin') {
        navigate('/dashboard');
      } else {
        // user might not be set immediately; re-fetch user and check
        setTimeout(()=>{
          if (user && user.role === 'admin') navigate('/dashboard');
          else {
            logout();
            setError('Not an admin account');
          }
        }, 400);
      }
    }catch(err){
      setError(err?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="card-title mb-3">Admin Login</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={submit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} required />
              </div>

              <button className="btn btn-primary">Login as admin</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
