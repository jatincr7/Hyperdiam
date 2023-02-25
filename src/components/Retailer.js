import React, { useState } from 'react';
import './Retailer.css';

const Retailer = () => {
  const [retailerName, setRetailerName] = useState('');
  const [location, setLocation] = useState('');
  const [broughtFrom, setBroughtFrom] = useState('');
  const [soldTo, setSoldTo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className="retailer">
      <form onSubmit={handleSubmit} className="retailer-form">
        <label htmlFor="retailer-name" className="retailer-label">
          Retailer Name:
        </label>
        <input
          type="text"
          id="retailer-name"
          className="retailer-input"
          placeholder="Enter retailer name"
          value={retailerName}
          onChange={(event) => setRetailerName(event.target.value)}
        />

        <label htmlFor="location" className="retailer-label">
          Location:
        </label>
        <input
          type="text"
          id="location"
          className="retailer-input"
          placeholder="Enter location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />

        <label htmlFor="brought-from" className="retailer-label">
          Brought From:
        </label>
        <input
          type="text"
          id="brought-from"
          className="retailer-input"
          placeholder="Enter source of purchase"
          value={broughtFrom}
          onChange={(event) => setBroughtFrom(event.target.value)}
        />

        <label htmlFor="sold-to" className="retailer-label">
          Sold To:
        </label>
        <input
          type="text"
          id="sold-to"
          className="retailer-input"
          placeholder="Enter buyer name"
          value={soldTo}
          onChange={(event) => setSoldTo(event.target.value)}
        />

        <button type="submit" className="retailer-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Retailer;