import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Signup(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    try{
      await signup({ firstName, lastName, email, password });
      navigate('/login');
    }catch(err){
      setError(err?.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="card-title mb-3">Create account</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={submit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">First name</label>
                  <input className="form-control" value={firstName} onChange={e=>setFirstName(e.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last name</label>
                  <input className="form-control" value={lastName} onChange={e=>setLastName(e.target.value)} required />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} required />
              </div>

              <button className="btn btn-primary">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
