import React from 'react';

export default function About(){
  return (
    <div>
      <div className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>About Us</h1>
              <p className="lead">We are a community-driven gym focused on delivering sustainable fitness results with expert guidance.</p>
              <h5>Our mission</h5>
              <p>To make fitness accessible, safe and enjoyable for everyone — from beginners to athletes.</p>
            </div>
            <div className="col-md-6 text-center">
              <img alt="about" className="img-fluid rounded shadow" src="https://images.unsplash.com/photo-1554284114-4a9c8a4f0b5b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b6f3b2d2d3a" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <h3>Our Team</h3>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="card p-3 text-center">
                <h5>Alex Johnson</h5>
                <p className="text-muted">Head Trainer</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 text-center">
                <h5>Rina Patel</h5>
                <p className="text-muted">Nutritionist</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 text-center">
                <h5>Sam Lee</h5>
                <p className="text-muted">Community Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <h3>Contact Us</h3>
          <p>Email: info@gymexample.com | Phone: +1 555 123 4567</p>
        </div>
      </div>
    </div>
  );
}
