import React from "react";
import "./Customer.css";

function Customer() {
  return (
    <div className="customer-container">
      <h2>Customer Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="diamond-id">Diamond ID:</label>
          <input type="text" id="diamond-id" placeholder="Enter Diamond ID" />
        </div>
        <div className="form-group">
          <label htmlFor="color-scale">Color Scale:</label>
          <select id="color-scale">
            <option value="">--Select Color--</option>
            <option value="colorless">Colorless</option>
            <option value="nearcolorless">Near Colorless</option>
            <option value="faint">Faint</option>
            <option value="verylight">Very Light</option>
            <option value="light">Light</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="clarity-scale">Clarity Scale:</label>
          <select id="clarity-scale">
            <option value="">--Select Clarity--</option>
            <option value="vvs1">Very Very Slightly Included 1</option>
            <option value="vvs2">Very Very Slightly Included 2</option>
            <option value="vs1">Very Slightly Included 1</option>
            <option value="vs2">Very Slightly Included 2</option>
            <option value="si1">Slightly Included 1</option>
            <option value="si2">Slightly Included 2</option>
            <option value="i1">Included 1</option>
            <option value="i2">Included 2</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="carat-weight">Carat Weight:</label>
          <input type="number" id="carat-weight" placeholder="Enter Carat Weight" />
        </div>
        <div className="form-group">
          <label htmlFor="cut-scale">Cut Scale:</label>
          <select id="cut-scale">
            <option value="">--Select Cut--</option>
            <option value="excellent">Excellent</option>
            <option value="verygood">Very Good</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Customer;
