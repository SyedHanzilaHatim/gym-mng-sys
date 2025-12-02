import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container d-flex justify-content-between">
        <div>© {new Date().getFullYear()} Gym Manager</div>
        <div>
          <a className="text-white me-3" href="/about">About</a>
          <a className="text-white" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
