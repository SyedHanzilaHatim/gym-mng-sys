import React, { useEffect, useState } from 'react';
import API from '../api';

export default function Dashboard(){
  const [stats, setStats] = useState({plans:0, trainers:0, payments:0, attendance:0});

  useEffect(()=>{
    const load = async ()=>{
      try{
        const [plans, trainers, payments, attendance] = await Promise.all([
          API.get('/plans'),
          API.get('/trainers'),
          API.get('/payments').catch(()=>({data:[]})),
          API.get('/attendance').catch(()=>({data:[]})),
        ]);

        setStats({
          plans: plans.data.length,
          trainers: trainers.data.length,
          payments: (payments.data || []).length,
          attendance: (attendance.data || []).length
        });
      }catch(err){
        console.error(err);
      }
    };
    load();
  },[]);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-3 mb-3">
          <div className="card p-3 text-center">
            <h5>Plans</h5>
            <h3>{stats.plans}</h3>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card p-3 text-center">
            <h5>Trainers</h5>
            <h3>{stats.trainers}</h3>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card p-3 text-center">
            <h5>Payments</h5>
            <h3>{stats.payments}</h3>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card p-3 text-center">
            <h5>Attendance</h5>
            <h3>{stats.attendance}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
