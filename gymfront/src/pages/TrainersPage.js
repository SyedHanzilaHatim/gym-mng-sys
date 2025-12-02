import React, { useEffect, useState, useContext } from 'react';
import API from '../api';
import { AuthContext } from '../contexts/AuthContext';

export default function TrainersPage(){
  const [trainers, setTrainers] = useState([]);
  const [form, setForm] = useState({name:'', expertise:'', experience:0});
  const { user } = useContext(AuthContext);

  useEffect(()=>{
    const load = async ()=>{
      const { data } = await API.get('/trainers');
      setTrainers(data);
    };
    load();
  },[]);

  const create = async (e)=>{
    e.preventDefault();
    try{
      const { data } = await API.post('/trainers', form);
      setTrainers(s=>[...s, data]);
      setForm({name:'', expertise:'', experience:0});
    }catch(err){
      alert('Create failed or you are not admin');
    }
  };

  const remove = async (id)=>{
    if(!window.confirm('Delete trainer?')) return;
    try{
      await API.delete(`/trainers/${id}`);
      setTrainers(s=>s.filter(t=>t._id!==id));
    }catch(err){
      alert('Delete failed');
    }
  };

  return (
    <div>
      <h2>Trainers</h2>
      <div className="row mt-3">
        <div className="col-md-8">
          <div className="list-group">
            {trainers.map(t=> (
              <div key={t._id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{t.name}</h5>
                  <small>{t.expertise} • {t.experience} yrs</small>
                </div>
                {user?.role === 'admin' && (
                  <button className="btn btn-danger btn-sm" onClick={()=>remove(t._id)}>Delete</button>
                )}
              </div>
            ))}
          </div>
        </div>

        {user?.role === 'admin' && (
          <div className="col-md-4">
            <div className="card p-3">
              <h5>Add Trainer</h5>
              <form onSubmit={create}>
                <div className="mb-2"><input className="form-control" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required /></div>
                <div className="mb-2"><input className="form-control" placeholder="Expertise" value={form.expertise} onChange={e=>setForm({...form,expertise:e.target.value})} required /></div>
                <div className="mb-2"><input type="number" className="form-control" placeholder="Experience" value={form.experience} onChange={e=>setForm({...form,experience:parseInt(e.target.value||0)})} required /></div>
                <button className="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
