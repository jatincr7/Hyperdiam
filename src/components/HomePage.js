import React from "react";
import { Link } from "react-router-dom";
import './HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <h1>💎 HyperDiam 💎</h1>
      <nav>
        <ul>
          <li>
            <Link to="/diamond-list">Diamond List</Link>
          </li>
          <li>
            <Link to="/add-diamonds">Add Diamonds</Link>
          </li>
          <li>
            <Link to="/miner">Miner</Link>
          </li>
          <li>
            <Link to="/manufacturer">Manufacturer</Link>
          </li>
          <li>
            <Link to="/retailer">Retailer</Link>
          </li>
          <li>
            <Link to="/customer">Customer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;