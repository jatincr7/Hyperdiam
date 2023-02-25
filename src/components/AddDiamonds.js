import React, { useState } from "react";
import "./AddDiamonds.css"
function AddDiamonds() {
    return (
      <div className="add-diamonds-container">
        <div><h1>Add Diamonds</h1></div>
        <div className="button-div">
        <button className="add-diamonds-button" 
        onClick={() => alert(`A New Diamond Added with no unique No : ${Math.floor(Math.random()*1000000000)}`)}>
            Click Here</button>
            </div>
      </div>
    );
  }

export default AddDiamonds;
