import React, { useEffect, useState } from 'react';
import API from '../api';

export default function PaymentsPage(){
  const [payments, setPayments] = useState([]);
  const [amount, setAmount] = useState(0);
  const [planId, setPlanId] = useState('');
  const [plans, setPlans] = useState([]);

  useEffect(()=>{
    const load = async ()=>{
      const p = await API.get('/plans');
      setPlans(p.data);
      const pm = await API.get('/payments/my');
      setPayments(pm.data);
    };
    load();
  },[]);

  const pay = async (e)=>{
    e.preventDefault();
    try{
      const { data } = await API.post('/payments/pay', { amount, planId });
      setPayments(s=>[...s, data]);
      setAmount(0);
      setPlanId('');
    }catch(err){ alert('Payment failed'); }
  };

  const verify = async (id)=>{
    try{
      const { data } = await API.put(`/payments/${id}/verify`);
      setPayments(s=>s.map(x=> x._id===id ? data : x));
    }catch(err){ alert('Verify failed (admin only)'); }
  };

  return (
    <div>
      <h2>Payments</h2>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <h5>Make Payment</h5>
            <form onSubmit={pay}>
              <select className="form-select mb-2" value={planId} onChange={e=>setPlanId(e.target.value)} required>
                <option value="">Select plan</option>
                {plans.map(p=> <option value={p._id} key={p._id}>{p.name} - ${p.price}</option>)}
              </select>
              <input type="number" className="form-control mb-2" placeholder="Amount" value={amount} onChange={e=>setAmount(parseFloat(e.target.value||0))} required />
              <button className="btn btn-primary">Pay</button>
            </form>
          </div>

          <div className="card p-3">
            <h5>My Payments</h5>
            <ul className="list-group mt-2">
              {payments.map(p=> (
                <li key={p._id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <div>${p.amount}</div>
                    <small className="text-muted">{p.planId}</small>
                  </div>
                  <div>
                    <span className={`badge ${p.status==='verified'?'bg-success':'bg-secondary'} me-2`}>{p.status}</span>
                    {/* Admin verification handled in PaymentsPage as needed */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
