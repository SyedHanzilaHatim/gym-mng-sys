import React, { useEffect, useState } from 'react';
import API from '../api';

export default function SubscriptionsPage(){
  const [subs, setSubs] = useState([]);

  useEffect(()=>{
    const load = async ()=>{
      const { data } = await API.get('/subscriptions/my');
      setSubs(data);
    };
    load();
  },[]);

  const cancel = async (id)=>{
    try{
      const { data } = await API.put(`/subscriptions/${id}/cancel`);
      setSubs(s=>s.map(x=> x._id===id ? data : x));
    }catch(err){ alert('Cancel failed'); }
  };

  return (
    <div>
      <h2>My Subscriptions</h2>
      <div className="list-group mt-3">
        {subs.map(s=> (
          <div key={s._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h6>{s.planId?.name || 'Plan'}</h6>
              <small>{new Date(s.startDate).toLocaleDateString()} - {new Date(s.endDate).toLocaleDateString()}</small>
            </div>
            <div>
              <span className="badge bg-secondary me-2">{s.status}</span>
              {s.status!=='cancelled' && <button className="btn btn-sm btn-warning" onClick={()=>cancel(s._id)}>Cancel</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
