import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div className="center-body">
      <div className="loader-circle-9">
        <img src="/stp-logo.jpg" alt="STP Logo" className="loader-logo-img" />
        <span></span>
      </div>
    </div>
  );
}
