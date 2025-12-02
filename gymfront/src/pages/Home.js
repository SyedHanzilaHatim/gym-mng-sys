import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <div>
      <section className="py-5 text-white" style={{background: 'linear-gradient(90deg,#0d6efd88,#6610f288)'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-5">Get Fit. Stay Strong.</h1>
              <p className="lead">Join our community and reach your fitness goals with expert trainers and flexible plans.</p>
              <div className="mt-4">
                <Link to="/plans" className="btn btn-light me-2">Explore Plans</Link>
                <Link to="/signup" className="btn btn-outline-light">Get Started</Link>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block text-center">
              <img alt="hero" src="https://images.unsplash.com/photo-1558611848-73f7eb4001d9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3e8a0c6b3f6f6f6d" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h3>Testimonials</h3>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="card p-3">
                <p>"Amazing trainers and flexible schedules. I've lost 10kg in 3 months."</p>
                <small className="text-muted">— Sarah K.</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <p>"Clean facility and great community. Highly recommend for beginners."</p>
                <small className="text-muted">— Mark L.</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <p>"Professional trainers who really care about your progress."</p>
                <small className="text-muted">— Priya R.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h3>Explore More</h3>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="card p-3 h-100">
                <h5>Personal Training</h5>
                <p>One-on-one coaching to speed up your progress.</p>
                <Link to="/trainers" className="stretched-link">View trainers</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 h-100">
                <h5>Flexible Plans</h5>
                <p>Choose plans that fit your schedule and budget.</p>
                <Link to="/plans" className="stretched-link">See plans</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 h-100">
                <h5>Community Events</h5>
                <p>Group classes, challenges and social meetups.</p>
                <Link to="/about" className="stretched-link">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
