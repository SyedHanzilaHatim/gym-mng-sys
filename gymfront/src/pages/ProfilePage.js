import React, { useEffect, useState } from 'react';
import API from '../api';

export default function ProfilePage(){
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});

  useEffect(()=>{
    const load = async ()=>{
      const { data } = await API.get('/users/profile');
      setProfile(data);
      setForm({ firstName: data.firstName, lastName: data.lastName });
    };
    load();
  },[]);

  const save = async (e)=>{
    e.preventDefault();
    try{
      const { data } = await API.put('/users/profile', form);
      setProfile(data);
      setEditing(false);
    }catch(err){ alert('Update failed'); }
  };

  if(!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      {!editing ? (
        <div className="card p-3 mt-3">
          <p><strong>Name:</strong> {profile.firstName} {profile.lastName}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <button className="btn btn-sm btn-primary" onClick={()=>setEditing(true)}>Edit</button>
        </div>
      ) : (
        <form className="card p-3 mt-3" onSubmit={save}>
          <div className="row">
            <div className="col-md-6 mb-2">
              <input className="form-control" value={form.firstName} onChange={e=>setForm({...form, firstName: e.target.value})} />
            </div>
            <div className="col-md-6 mb-2">
              <input className="form-control" value={form.lastName} onChange={e=>setForm({...form, lastName: e.target.value})} />
            </div>
          </div>
          <button className="btn btn-success me-2">Save</button>
          <button type="button" className="btn btn-secondary" onClick={()=>setEditing(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}
