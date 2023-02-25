import React from 'react';
import './Manufacturer.css';

function Manufacturer() {
  return (
    <div className="Manufacturer">
      <h2>Enter Diamond Details :</h2>
      <form className="manufacturer-form">
        <label>Company Name:</label>
        <input className="input-field" type="text" name="companyName" placeholder="Enter company name" />
        
        <label>Location:</label>
        <input className="input-field" type="text" name="location" placeholder="Enter location" />
        
        <label>Raw Height:</label>
        <input className="input-field" type="text" name="rawHeight" placeholder="Enter raw height" />
        
        <label>Polish Weight:</label>
        <input className="input-field" type="text" name="polishWeight" placeholder="Enter polish weight" />
        
        <label>Color:</label>
        <input className="input-field" type="text" name="color" placeholder="Enter color" />
        
        <label>Clarity:</label>
        <input className="input-field" type="text" name="clarity" placeholder="Enter clarity" />
        
        <label>Cut:</label>
        <input className="input-field" type="text" name="cut" placeholder="Enter cut" />
        
        <label>Time to Start Work:</label>
        <input className="input-field" type="datetime-local" name="startTime" />
        
        <label>Time to Complete Work:</label>
        <input className="input-field" type="datetime-local" name="endTime" />
        
        <button className="submit-button">Submit</button>
        </form>
    </div>
  );
}

export default Manufacturer;
