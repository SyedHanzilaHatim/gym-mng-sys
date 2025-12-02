import React, { useEffect, useState, useContext } from 'react';
import API from '../api';
import { AuthContext } from '../contexts/AuthContext';

export default function PlansPage(){
  const [plans, setPlans] = useState([]);
  const [form, setForm] = useState({name:'', price:0, duration:30, description:''});
  const { user } = useContext(AuthContext);

  useEffect(()=>{
    const load = async ()=>{
      const { data } = await API.get('/plans');
      setPlans(data);
    };
    load();
  },[]);

  const create = async (e) => {
    e.preventDefault();
    try{
      const { data } = await API.post('/plans', form);
      setPlans(s=>[...s, data]);
      setForm({name:'', price:0, duration:30, description:''});
    }catch(err){
      alert('Create failed (admin only)');
    }
  };

  const remove = async (id)=>{
    if(!window.confirm('Delete plan?')) return;
    try{
      await API.delete(`/plans/${id}`);
      setPlans(s=>s.filter(p=>p._id!==id));
    }catch(err){ alert('Delete failed'); }
  };

  const buy = async (id)=>{
    try{
      await API.post('/subscriptions/buy', { planId: id });
      alert('Plan purchased (subscription created)');
    }catch(err){ alert('Buy failed'); }
  };

  return (
    <div>
      <h2>Plans</h2>
      <div className="row mt-3">
        <div className="col-md-8">
          <div className="row">
            {plans.map(p=> (
              <div className="col-md-6 mb-3" key={p._id}>
                <div className="card h-100">
                  <div className="card-body d-flex flex-column">
                    <h5>{p.name}</h5>
                    <p className="text-muted">{p.description}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <strong>${p.price}</strong>
                      <div>
                        <button className="btn btn-sm btn-success me-2" onClick={()=>buy(p._id)}>Buy</button>
                        {user?.role==='admin' && <button className="btn btn-sm btn-danger" onClick={()=>remove(p._id)}>Delete</button>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {user?.role==='admin' && (
          <div className="col-md-4">
            <div className="card p-3">
              <h5>Create Plan</h5>
              <form onSubmit={create}>
                <input className="form-control mb-2" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
                <input type="number" className="form-control mb-2" placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:parseFloat(e.target.value||0)})} required />
                <input type="number" className="form-control mb-2" placeholder="Duration (days)" value={form.duration} onChange={e=>setForm({...form,duration:parseInt(e.target.value||0)})} required />
                <textarea className="form-control mb-2" placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
