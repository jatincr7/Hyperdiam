import React from "react";
import "./LandingPage.css";

function LandingPage() {
    return (
      <div className="landing-page">
        <h1 className="landing-page-title">
        <div className="hyperdiam">💠</div>
          <span className="hyperdiam">Welcome to HyperDiam </span>
        </h1>
        <div className="landing-page-contributors">
          <p>Contributors:</p>
          <ul>
            <li>🏋 Brijesh Kuvadiya</li>
            <li>🏄 Niravkumar Parmar</li>
            <li>🚴 Jatin Jha</li>
          </ul>
        </div>
      </div>
    );
  }

export default LandingPage;