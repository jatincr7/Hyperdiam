import React from 'react';
import './Miner.css';

function Miner() {
  return (
    <div className="Miner">
      <h2>Mine Diamonds</h2>
      <form>
        <div className="form-row">
          <label htmlFor="diamond">Diamond:</label>
          <input type="text" id="diamond" name="diamond" placeholder="Enter diamond ID" required />
        </div>

        <div className="form-row">
          <label htmlFor="location">Mine Location:</label>
          <input type="text" id="location" name="location" placeholder="Enter mine location" required />
        </div>

        <div className="form-row">
          <label htmlFor="company">Mining Company:</label>
          <input type="text" id="company" name="company" placeholder="Enter mining company" required />
        </div>

        <div className="form-row">
          <label htmlFor="batch">Batch No:</label>
          <input type="text" id="batch" name="batch" placeholder="Enter batch number" required />
        </div>

        <div className="form-row">
          <label htmlFor="time">Time:</label>
          <input type="datetime-local" id="time" name="time" required />
        </div>

        <div className="form-row">
          <label htmlFor="weight">Weight:</label>
          <input type="text" id="weight" name="weight" placeholder="Enter weight in carats" required />
        </div>

        <div className="form-row">
          <label htmlFor="grade">Grade:</label>
          <input type="text" id="grade" name="grade" placeholder="Enter diamond grade" required />
        </div>

        <button type="submit" className="submit-button"
        onClick={() => alert(`Miner Data Added`)}>
            Submit</button>
      </form>
    </div>
  );
}

export default Miner;
