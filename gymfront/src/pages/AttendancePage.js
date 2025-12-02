import React, { useEffect, useState } from 'react';
import API from '../api';

export default function AttendancePage(){
  const [records, setRecords] = useState([]);

  useEffect(()=>{
    const load = async ()=>{
      const { data } = await API.get('/attendance/my');
      setRecords(data);
    };
    load();
  },[]);

  const checkin = async () => {
    try{
      const { data } = await API.post('/attendance/checkin');
      setRecords(s=>[data, ...s]);
    }catch(err){ alert('Checkin failed'); }
  };

  return (
    <div>
      <h2>Attendance</h2>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={checkin}>Check in</button>
      </div>
      <div className="list-group">
        {records.map(r=> (
          <div key={r._id} className="list-group-item">
            <div>{new Date(r.checkinTime).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
