import React, { useContext, useEffect, useState } from 'react';
import API from '../api';
import { AuthContext } from '../contexts/AuthContext';

export default function UsersPage(){
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(()=>{
    const load = async ()=>{
      try{
        const { data } = await API.get('/users/profile');
        setProfile(data);
      }catch(err){
        console.error(err);
      }
    };
    load();
  },[]);

  return (
    <div>
      <h2>My Profile</h2>
      {profile ? (
        <div className="card p-3 mt-3">
          <p><strong>Name:</strong> {profile.firstName} {profile.lastName}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Role:</strong> {profile.role}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
